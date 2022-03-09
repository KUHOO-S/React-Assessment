import { takeEvery } from "redux-saga/effects";

import { put } from "redux-saga/effects";
import axios from "axios";
import { taskListSuccess, fetchTaskList, addTask } from "../home.slice";
import { categoryListSuccess, fetchCategoryList } from "../home.slice";


export function* fetchTaskListSaga() {
  try {
    const response = yield axios.get("/task", {
      baseURL: "http://localhost:3000",
    });
    yield put(taskListSuccess(response.data));
  } catch (error) {
    console.log("error", error);
  }
}

export function* addTaskSaga(action) {
  try {
    console.log("action came");
    const entry = { name: action.payload };
    console.log(entry);
    //add this to json file


    axios({
      method: 'post',
      url: 'http://localhost:3000/tasklist',
      headers: {}, 
      data: {
        foo: 'bar', // This is the body part
      }
    });

   

    //yield put(taskListSuccess(response.data));
  } catch (error) {
    console.log("error", error);
  }
}


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
  yield takeEvery([fetchTaskList], fetchTaskListSaga);
  yield takeEvery([addTask], addTaskSaga);
  yield takeEvery([fetchCategoryList], fetchCategoryListSaga);
}
