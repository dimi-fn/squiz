import { QuizForm } from '.';
// import { screen, render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';


describe('SearchForm', () => {
    // let getResultMock;

    // beforeEach(() => {
    //     getResultMock = jest.fn();
    //     render(<SearchForm getResult={getResultMock}/>);
    // });

    test('renders input type submit', () => {
      let initState = { roomID: 0, questions: "", category : "", difficulty : "", result: [] }
      /* render(<QuizForm />);*/
      renderWithReduxProvider(<Router><QuizForm /></Router>, { initState });
      const inputElement = screen.getByText(/Create Game/i);
      expect(inputElement).toBeInTheDocument();
    });
  
    test('it renders a form', () => {
        let form = screen.getByRole('form');
        expect(form).toBeInTheDocument();;
    });   
});
