import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchCategoryList, fetchTaskList, editTask } from "./store/home.slice";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export function Edit() {
    const dispatch = useDispatch();
    
    const timeInputRef=useRef();
    const descriptionInputRef=useRef();
    const deadlineInputRef=useRef();
    const categoryInputRef=useRef();

    //const taskList = useSelector((state) => state.home.list);
    /*
      const [taskName, setTaskName] = useState("");
    */
    //const isTaskLoading = useSelector((state) => state.home.isLoading);
    const categoryList = useSelector((state) => state.home.category);
    const taskList = useSelector((state) => state.home.list);

    const navigate = useNavigate();
    const props = useLocation().state;

    console.log(props)

    const handleClick = (event) => {
        //event.preventDefault();
        console.log("form submit");
        const Task={
            
            name:props.name,
            time:timeInputRef.current.value,
            description:descriptionInputRef.current.value,
            deadline:deadlineInputRef.current.value,
            category:categoryInputRef.current.value,

        }
        console.log(Task);
        dispatch(editTask({newTask:Task,id:props.id}));
        navigate("/");
        
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

            </TaskContainer>

            <div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                    <form>
                        <div><input ref={timeInputRef} type="date" defaultValue={props.time} /></div>

                        <div><textarea ref={descriptionInputRef} rows="6" defaultValue={props.description} /></div>

                        <div><input ref={deadlineInputRef} type="date" defaultValue={props.deadline} /></div>
                        <select ref={categoryInputRef} name="categories">
                            {categoryList.length > 0 && categoryList.map((category, index) => category == props.category ? <option key={index} id={index} value={category.name} selected>{category.name}</option> : <option key={index} id={index} value={category.name}>{category.name}</option>)}

                        </select >
                        <div>
                            <button
                                style={{ marginLeft: 10 }}
                                type="button"
                                onClick={handleClick}
                            >
                                Edit Task
                            </button></div>
                    </form>
                </div>

            </div >
        </TaskWarpper >
    );
}
const TaskWarpper = styled.div`
  display: "flex";
  flex-direction: "column";
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;
const TaskContainer = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
`;
