import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const initialState = {};

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools()
	// compose(
	// 	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	// 	window.__REDUX_DEVTOOLS_EXTENSION__(),
	// ),
);

export default store;
