import { renderHook, act } from "@testing-library/react-hooks"
import { useFormManager } from "./useFormManager.hook"

interface TestFormValues {
  email: string
  firstName: string
  lastName: string
}

const initialValues: TestFormValues = {
  email: "",
  firstName: "",
  lastName: "",
}

const mockOnSubmit = jest.fn()
const validators = {
  email: (value: string) => (!value ? "Email is required" : null),
  firstName: (value: string) =>
    value.length < 2 ? "First name must be at least 2 characters" : null,
}

describe("useFormManager", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should initialize form values and errors correctly", () => {
    const { result } = renderHook(() =>
      useFormManager(initialValues, mockOnSubmit, validators),
    )

    expect(result.current.formState.formValues).toEqual(initialValues)
    expect(result.current.formState.formErrors).toEqual({})
  })

  it("should update form value when handleChange is called", () => {
    const { result } = renderHook(() =>
      useFormManager(initialValues, mockOnSubmit, validators),
    )

    act(() => {
      result.current.handleChange({ name: "email", value: "test@example.com" })
    })

    expect(result.current.formState.formValues.email).toBe("test@example.com")
  })

  it("should validate form and set errors on handleSubmit", () => {
    const { result } = renderHook(() =>
      useFormManager(initialValues, mockOnSubmit, validators),
    )

    act(() => {
      result.current.handleSubmit()
    })

    expect(result.current.formState.formErrors.email).toBe("Email is required")
    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

  it("should call onSubmit when form is valid on handleSubmit", () => {
    const { result } = renderHook(() =>
      useFormManager(initialValues, mockOnSubmit, validators),
    )

    act(() => {
      result.current.handleChange({ name: "email", value: "test@example.com" })
      result.current.handleChange({ name: "firstName", value: "John" })
      result.current.handleSubmit()
    })

    expect(result.current.formState.formErrors).toEqual({})
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      firstName: "John",
      lastName: "",
    })
  })

  it("should set custom errors using setFormErrors", () => {
    const { result } = renderHook(() =>
      useFormManager(initialValues, mockOnSubmit, validators),
    )

    act(() => {
      result.current.setFormErrors({ email: "Custom email error" })
    })

    expect(result.current.formState.formErrors.email).toBe("Custom email error")
  })

  it("should reset form values and errors on resetForm", () => {
    const { result } = renderHook(() =>
      useFormManager(initialValues, mockOnSubmit, validators),
    )

    act(() => {
      result.current.handleChange({ name: "email", value: "test@example.com" })
      result.current.setFormErrors({ email: "Email is required" })
      result.current.resetForm()
    })

    expect(result.current.formState.formValues).toEqual(initialValues)
    expect(result.current.formState.formErrors).toEqual({})
  })

  it("should validate field on blur using getInputProps onBlur", () => {
    const { result } = renderHook(() =>
      useFormManager(initialValues, mockOnSubmit, validators),
    )

    const emailProps = result.current.getInputProps("email")

    act(() => {
      emailProps.onBlur && emailProps.onBlur()
    })

    expect(result.current.formState.formErrors.email).toBe("Email is required")
  })

  it("should clear field error on focus using getInputProps onFocus", () => {
    const { result } = renderHook(() =>
      useFormManager(initialValues, mockOnSubmit, validators),
    )

    act(() => {
      result.current.setFormErrors({ email: "Email is required" })
      const emailProps = result.current.getInputProps("email")
      emailProps.onFocus && emailProps.onFocus()
    })

    expect(result.current.formState.formErrors.email).toBe("")
  })
})
