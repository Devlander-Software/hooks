export const useFormattedParagraphs = (description = '') => {
    // Split the input description by line breaks
    const paragraphs = description.split('\n');
  
    // Filter out any empty lines or lines with only spaces
    const formattedParagraphs = paragraphs.filter((paragraph) => paragraph.trim() !== '');
  
    // Join the paragraphs with a newline character for plain text
    return formattedParagraphs.join('\n');
};
  