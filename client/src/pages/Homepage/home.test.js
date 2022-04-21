import { default as HomePage } from '.';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';


describe('HomePage', () => {

    test('it renders the title', () => {
        let initState = { roomID: 0, questions: "", category : "", difficulty : "", result: [] };
        renderWithReduxProvider(<Router><HomePage /></Router> , { initState });
        const heading = screen.getByRole('heading')
        expect(heading.textContent).toContain('SQUIZ');
    });

});
