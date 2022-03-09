import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import homeReducer from "../Home/store/home.slice";
import { sagaMiddleware, runSagas } from "./saga";

export const appReducer = combineReducers({
  home: homeReducer,
});

// enhancer for REDUX DEV TOOLS
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const middlewares = composeEnhancers?.(applyMiddleware(sagaMiddleware));

function configureStore(initialState) {
  return createStore(appReducer, initialState, middlewares);
}
export function configureSaga() {
  return runSagas();
}

export const store = configureStore(undefined);
export const saga = configureSaga();
