import { takeEvery } from "redux-saga/effects";

import { put } from "redux-saga/effects";
import axios from "axios";
import { categoryListSuccess, fetchCategoryList } from "../home.slice";


export function* fetchCategoryListSaga() {
  try {
    const response = yield axios.get("/category", {
      baseURL: "http://localhost:3000",
    });
    yield put(categoryListSuccess(response.data));
  } catch (error) {
    console.log("error", error);
  }
}

export function* homeSagas() {
  yield takeEvery([fetchCategoryList], fetchCategoryListSaga);
}
