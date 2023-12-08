import { act, renderHook } from "@testing-library/react-hooks";
import { useElementSize } from "./useElementSize.web";

// Mock HTMLElement with just getBoundingClientRect method
class MockHTMLElement extends HTMLElement {
  getBoundingClientRect() {
    return {
      width: 100,
      height: 200,
      x: 10,
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      toJSON() {
        return "";
      },
      y: 20,
    };
  }
}

// Mock customElements.define
window.customElements.define = jest.fn();

describe("useElementSize", () => {
  it("should initialize with default size", () => {
    const { result } = renderHook(() => useElementSize());

    expect(result.current[0]).toEqual({
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    });
  });

  it("should update size when the element is resized", () => {
    const { result } = renderHook(() => useElementSize());

    act(() => {
      // Simulate a change in element size
      result.current[1].current = new MockHTMLElement();

      // Trigger the resize event
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current[0]).toEqual({
      width: 100,
      height: 200,
      x: 10,
      y: 20,
    });
  });

  it("should remove the resize listener on unmount", () => {
    const { unmount } = renderHook(() => useElementSize());

    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );
  });
});
