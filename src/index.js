import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// function HelloWorld(){
// 	return <h1> Hello, world!</h1>; //JSX element --> h1
// }
function App(){
	return (
		<div className="app">
			<header className="app-header">

				<h1>My Amazing ToDo-List App</h1>
				<p> The most simple and amazing todo-list React app</p>
			</header>
		</div>

	)

}

ReactDOM.render(<App/>, document.getElementById("root"));
//ReactDOM.render(<App></App>, document.getElementById("root"));