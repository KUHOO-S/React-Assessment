import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

import { homeSagas } from "../Home/store/sagas/taskListSaga";

// instantiate sage middleware
export const sagaMiddleware = createSagaMiddleware();

// root function that run all saga
export function runSagas() {
  return sagaMiddleware.run(rootSaga);
}

// function that define all child saga generator
function* rootSaga() {
  yield fork(homeSagas);
}
