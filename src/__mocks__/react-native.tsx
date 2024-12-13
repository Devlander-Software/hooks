import React from "react"
import type { JSX } from "react/jsx-runtime"

const View = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>,
) => <div {...props} />
const Modal = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>,
) => <div {...props} />

export { View, Modal }
export default {
  View,
  Modal,
  Platform: { OS: "web" },
}
