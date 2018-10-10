import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState = {}) => {
    return createStore(
        reducer,
        initialState,
        devTools(applyMiddleware(thunk))
    );
};

export default configureStore;