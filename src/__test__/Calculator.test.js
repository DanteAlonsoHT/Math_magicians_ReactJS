import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from "../App"

beforeEach(() => {
  render(<App />);
});

describe('Test Calculator Result', () => {
  test('Result to be in the document', () => {
    const elementSeven = screen.getByTestId('math-result');
    expect(elementSeven).toBeInTheDocument();
  });
});