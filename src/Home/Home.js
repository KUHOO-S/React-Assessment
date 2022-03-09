import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TaskList } from "./components/TaskList";
import { addTask, fetchTaskList, fetchCategoryList } from "./store/home.slice";
import { useSelector } from "react-redux";

export function Home() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.home.list);

  const [taskName, setTaskName] = useState("");
  console.log("kkk")
  useEffect(() => {
    if (taskList.length==0)
    {dispatch(fetchTaskList());}
    dispatch(fetchCategoryList());

  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <form>
          <input type="text" onChange={(e) => setTaskName(e.target.value)} />

          <button
            style={{ marginLeft: 10 }}
            type="button"
            onClick={() => dispatch(addTask(taskName))}
          >
            Add Task
          </button>
        </form>
      </div>
      <TaskList />
    </div>
  );
}
