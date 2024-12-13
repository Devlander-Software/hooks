import { renderHook, act } from "@testing-library/react-hooks"
import type { NavigationKeyType } from "../../../types/navigation-key.enum"
import { useNextInputFocus } from "./useNextInputFocus.hook"

describe("useNextInputFocus", () => {
  it("should focus the next input when the navigation key is pressed", () => {
    const { result } = renderHook(() =>
      useNextInputFocus({ navigationKey: "Enter" as NavigationKeyType }),
    )

    const mockInputs = [
      document.createElement("input"),
      document.createElement("input"),
      document.createElement("input"),
    ]

    // Mock focus method
    mockInputs.forEach((input) => {
      input.focus = jest.fn()
      document.body.appendChild(input)
    })

    act(() => {
      mockInputs.forEach((input, index) => {
        result.current.setInputRef(input, index)
      })
    })

    const mockEvent = {
      key: "Enter",
      preventDefault: jest.fn(),
      target: mockInputs[0],
    } as unknown as React.KeyboardEvent

    act(() => {
      result.current.handleKeyDown(mockEvent, 0, 3)
    })

    expect(mockInputs[1].focus).toHaveBeenCalled()
    expect(mockEvent.preventDefault).toHaveBeenCalled()
  })

  it("should scroll into view if the input is not visible", () => {
    const { result } = renderHook(() =>
      useNextInputFocus({ navigationKey: "Enter" as NavigationKeyType }),
    )

    const mockInput = document.createElement("input")
    mockInput.focus = jest.fn()
    mockInput.scrollIntoView = jest.fn()
    mockInput.getBoundingClientRect = jest.fn(
      () =>
        ({
          top: -10,
          bottom: -5,
          left: 0,
          right: 0,
          height: 50,
          width: 200,
        }) as DOMRect,
    )

    document.body.appendChild(mockInput)

    act(() => {
      result.current.setInputRef(mockInput, 0)
    })

    const mockEvent = {
      key: "Enter",
      preventDefault: jest.fn(),
      target: mockInput,
    } as unknown as React.KeyboardEvent

    act(() => {
      result.current.handleKeyDown(mockEvent, 0, 1)
    })

    expect(mockInput.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "center",
    })
  })

  it("should submit the form when on the last input", () => {
    const { result } = renderHook(() =>
      useNextInputFocus({ navigationKey: "Enter" as NavigationKeyType }),
    )

    const mockForm = document.createElement("form")
    mockForm.requestSubmit = jest.fn()

    const mockInput = document.createElement("input")
    mockInput.closest = jest.fn(() => mockForm)

    act(() => {
      result.current.setInputRef(mockInput, 0)
    })

    const mockEvent = {
      key: "Enter",
      preventDefault: jest.fn(),
      target: mockInput,
    } as unknown as React.KeyboardEvent

    act(() => {
      result.current.handleKeyDown(mockEvent, 0, 1)
    })

    expect(mockForm.requestSubmit).toHaveBeenCalled()
  })

  it("should not trigger focus or submit if key does not match navigationKey", () => {
    const { result } = renderHook(() =>
      useNextInputFocus({ navigationKey: "Tab" as NavigationKeyType }),
    )

    const mockInput = document.createElement("input")
    mockInput.focus = jest.fn()

    act(() => {
      result.current.setInputRef(mockInput, 0)
    })

    const mockEvent = {
      key: "Enter",
      preventDefault: jest.fn(),
      target: mockInput,
    } as unknown as React.KeyboardEvent

    act(() => {
      result.current.handleKeyDown(mockEvent, 0, 1)
    })

    expect(mockInput.focus).not.toHaveBeenCalled()
    expect(mockEvent.preventDefault).not.toHaveBeenCalled()
  })
})
