import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTask, fetchTaskList } from "../store/home.slice";

import { useNavigate } from "react-router-dom";

export function Task(props) {
  const dispatch = useDispatch();
  const id=props.id;

  const navigate = useNavigate();

    const handleClick = () => {
        navigate("/edit",{state:props});
    }


  return (
    <TaskWarpper>
      <TaskContainer>
        <div
          style={{
            width: "60%",
            padding: "0 5px",
            fontStyle: "italic",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          {props.name}
        </div>
        <button onClick={handleClick}>edit</button>
        <button onClick={() => dispatch(deleteTask(id))}>delete</button>
      </TaskContainer>
      <TaskDetails>
        <TaskDetailHeader>Time</TaskDetailHeader>
        <div>{props.time}</div>
      </TaskDetails>
      <TaskDetails>
        <TaskDetailHeader>Description</TaskDetailHeader>
        <div style={{ maxWidth: "40%", textAlign: "end" }}>
          {props.description}
        </div>
      </TaskDetails>
      <TaskDetails>
        <TaskDetailHeader>Category</TaskDetailHeader>
        <div>{props.category}</div>
      </TaskDetails>
      <TaskDetails>
        <TaskDetailHeader>Deadline</TaskDetailHeader>
        <div>{props.deadline}</div>
      </TaskDetails>
    </TaskWarpper>
  );
}

const TaskContainer = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TaskWarpper = styled.div`
  display: "flex";
  flex-direction: "column";
  border: 1px solid black;
  border-radius: 25px;
  margin: 10px;
  padding: 10px;
`;

const TaskDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

const TaskDetailHeader = styled.div`
  font-weight: 300;
`;
