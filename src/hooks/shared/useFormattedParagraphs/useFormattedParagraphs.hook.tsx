import { useMemo } from "react"

export const useFormattedParagraphs = (description = "") => {
  // Split the input description by line breaks
  const paragraphs = useMemo(() => description.split("\n"), [description])

  // Filter out any empty lines or lines with only spaces
  const formattedParagraphs = useMemo(
    () => paragraphs.filter((paragraph) => paragraph.trim() !== ""),
    [paragraphs],
  )

  // Join the paragraphs with a newline character for plain text
  return formattedParagraphs.join("\n")
}
