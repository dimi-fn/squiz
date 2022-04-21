import React from 'react';

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import gameReducer from '../reducer/gameReducer'

const TestProviders = ({ initState }) => {
    initState ||= { roomID: 0, questions: "", category : "", difficulty : "", result: [] };
    let testReducer = () => gameReducer(initState, { type: '@@INIT' })
    const testStore = createStore(testReducer, applyMiddleware(thunk))

    return ({ children }) => (
        <Provider store={testStore}>
            { children }
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

global.renderWithReduxProvider = renderWithReduxProvider
global.React = React;


// import axios from 'axios';
// jest.mock('axios')
// axios.get.mockResolvedValue({ data: [ { latlng: [123, 456] }]})
