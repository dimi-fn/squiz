import { screen, render } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { QuizForm } from '../QuizForm';
import { Provider } from 'react-redux';


test('renders input type submit', () => {
  render(<Provider><QuizForm /></Provider>);
  const inputElement = screen.getByText(/Create Game/i);
  expect(inputElement).toBeInTheDocument();
});
