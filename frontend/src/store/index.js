import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import session from './session';
import users from './users';

const rootReducer = combineReducers({
  session,
  users
});

let enhancer;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
enhancer = composeEnhancers(applyMiddleware(thunk));

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
