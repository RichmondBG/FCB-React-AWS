import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


function Task(props){
	// console.log(props);
	return(
		<li className="tasks-item">{props.taskName}</li>

	)

}
function TasksList(){
	// connect to database here part
	const tasksItemsList = [
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab Pilipinas on Facebook.",
		"Follow Zuitt Coding Bootcamp on Facebook."
		
	];

	return (
		<>
				<input className="task-input" />

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

function App(){
	const paraStyle ={
		"marginBottom": "15px"
	};
	return (
		<div className="app">
			<header className="app-header">

				<h1>My Amazing ToDo-List App</h1>
				<p style={paraStyle}> The most simple and amazing todo-list React app</p>

				<TasksList />

			</header>
		</div>

	)

}

ReactDOM.render(<App/>, document.getElementById("root"));
//ReactDOM.render(<App></App>, document.getElementById("root"));