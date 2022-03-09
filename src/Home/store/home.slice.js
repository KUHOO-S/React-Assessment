import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: false,
  list: [],
  category: [],
};

export const toDoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    fetchTaskList: (state) => {
      state.isLoading = true;
    },
    addTask: (state, action) => {
      state.list.push({
        name: action.payload,
      });
    },
    taskListSuccess: (state, action) => {
      state.list = action.payload.list;
      state.isLoading = false;
    },
    deleteTask: (state, action) => {
      state.list.splice(action.payload,1);
      console.log("deleting from state");
    },
    editTask: (state, action) => {
      //del prev task
      //state.list.splice(action.payload.id,1);
      state.list[action.payload.id]=action.payload.newTask;
      //state.list.push(action.payload.newTask)
      console.log("editing");
    },
    fetchCategoryList: (state) => {
      state.isLoading = true;
    },
    categoryListSuccess: (state, action) => {
      state.category = action.payload;
      state.isLoading = false;
    },



  },
});

// Action creators are generated for each case reducer function
export const { addTask, fetchTaskList, taskListSuccess, deleteTask, editTask, fetchCategoryList, categoryListSuccess  } =
  toDoListSlice.actions;

export default toDoListSlice.reducer;
