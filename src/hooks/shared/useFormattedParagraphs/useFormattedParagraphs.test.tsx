import { render } from '@testing-library/react';
import { useFormattedParagraphs } from './useFormattedParagraphs';

describe('useFormattedParagraphs', () => {
  it('should format paragraphs with proper spacing', () => {
    const description = `Line 1
      Line 2

      Line 3
    `;

    const { container } = render(<div>{useFormattedParagraphs(description)}</div>);
    const textContent = container.textContent;

    // Ensure that paragraphs are formatted with proper spacing
    expect(textContent).toMatchInlineSnapshot(`
      "Line 1
      Line 2

      Line 3"
    `);
  });

  it('should handle empty description', () => {
    const { container } = render(<div>{useFormattedParagraphs()}</div>);
    const textContent = container.textContent;

    // Ensure that it handles empty description and returns an empty string
    expect(textContent).toBe('');
  });

  it('should handle description with no line breaks', () => {
    const description = 'Single line description';

    const { container } = render(<div>{useFormattedParagraphs(description)}</div>);
    const textContent = container.textContent;

    // Ensure that it handles a description with no line breaks
    expect(textContent).toBe('Single line description');
  });
});
