import { useSelector } from "react-redux";
import { Task } from "./Task";

export function TaskList() {
  const isTaskLoading = useSelector((state) => state.home.isLoading);
  const taskList = useSelector((state) => state.home.list);
  const categoryList = useSelector((state) => state.home.category);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",           
        marginTop: 30,
      }}
    >
      {isTaskLoading ? (
        <div>Loading!!</div>
      ) : (
        taskList.length > 0 && taskList.map((task,index) => <Task key={index} {...task} id={index} />)
      )}
    </div>
  );
}
