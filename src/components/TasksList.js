import {useState} from "react";
import Task from "./Task";

function TasksList(){
	// connect to database here part
	const [tasksItemsList, setTaskItemsList] = useState([
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab Pilipinas on Facebook.",
		"Follow Zuitt Coding Bootcamp on Facebook."
		
	]);

const [taskValue, setTaskValue] = useState("");
// console.log("taskValue :", taskValue);


const inputChangeHandler = (e) => {
  setTaskValue(e.target.value)
};

const addTaskHandler = (e) => {
  setTaskItemsList([e.target.value, ...tasksItemsList ]);
  setTaskValue("");
};

	return (
		<>
				<input 
        className="task-input" 
        placeholder="Create a new task" 
        onChange={inputChangeHandler}
        onBlur = {addTaskHandler}
        value={taskValue}
        />

			<ul>
		
			{/* <Task taskName="Follow Edukasyon.ph on Facebook"/>
			<Task taskName="Follow AWS Siklab Pilipinas on Facebook"/>
			<Task taskName="Follow Zuitt Coding Bootcamp on Facebook"/> */}


					{tasksItemsList.map((task, index) => {
				// console.log(task, index);
						return <Task key={index} taskName={task} />;
				

					})}
	
			</ul>
	</>
	);

}

export default TasksList;