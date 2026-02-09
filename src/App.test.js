// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RegressionLinear title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RegressionLinear/i);
    expect(titleElement).toBeInTheDocument();
});
