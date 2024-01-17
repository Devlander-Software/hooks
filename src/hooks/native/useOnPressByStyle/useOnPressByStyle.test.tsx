// useOnPressByStyle.test.tsx
import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { useOnPressByStyle } from "./useOnPressByStyle.hook" // Adjust the import path

// Mock Component to test the hook
// eslint-disable-next-line react/prop-types
const MockComponent = ({ onPress }: { onPress: () => void }) => {
  const getOnPress = useOnPressByStyle({
    styleName: "specialButton",
    onPress,
  })

  return (
    <TouchableOpacity
      style={styles.specialButton}
      onPress={getOnPress(styles.specialButton)}
    >
      <Text>Press Me</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  specialButton: {
    backgroundColor: "blue",
    padding: 10,
  },
})

describe("useOnPressByStyle Hook", () => {
  it("should call onPress when the button with the special style is pressed", () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<MockComponent onPress={onPressMock} />)

    const button = getByText("Press Me")
    fireEvent.press(button)

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  it("should not call onPress when the button does not have the special style", () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<MockComponent onPress={onPressMock} />)

    const button = getByText("Press Me")
    fireEvent.press(button)

    expect(onPressMock).not.toHaveBeenCalled()
  })
})
