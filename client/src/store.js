import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { gameReducer } from './reducer/index';

const store = createStore(gameReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
