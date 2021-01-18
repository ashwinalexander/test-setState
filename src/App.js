import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meaningOfLife: 47 + this.props.increment,
		};
	}

	handleClick = () => {
		//this is not guaranteed, it's asynchronous and React manages state
		//use prevState and prepProps to guarantee the latest state and prop values are being used
		this.setState(
			(prevState, prevProps) => {
				return {
					meaningOfLife: prevState.meaningOfLife + prevProps.increment,
				};
			},
			() => console.log(this.state.meaningOfLife)
		);
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>{this.state.meaningOfLife}</p>
					<button onClick={this.handleClick}>update state</button>
				</header>
			</div>
		);
	}
}

export default App;
