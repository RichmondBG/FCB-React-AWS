import {useState} from "react";
import Task from "./Task";

function TasksList(){
	// connect to database here part
	const tasksItemsList = [
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab Pilipinas on Facebook.",
		"Follow Zuitt Coding Bootcamp on Facebook."
		
	];

const [taskValue, setTaskValue] = useState("Just another task");
console.log("taskValue :", taskValue);


const inputChangeHandler = (e) => {
  setTaskValue(e.target.value)
};
	return (
		<>
				<input 
        className="task-input" 
        placeholder="Create a new task" 
        onChange={inputChangeHandler}

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