import React, { Component } from 'react';
import '../components/Counter/Counter.css';

export default class Classcomponents extends Component {
	constructor (props) {
		super(props);

		this.state = {
			counter: 0
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(
		  (prevState) => {
			return {
			  counter: prevState.counter + 1
			};
		  },
		  () => console.log("counter", this.state.counter)
		);
	  }

	render() {
		const { counter } = this.state;
		return (
			<>
			<h1 className='title-state'> this is states projects using class Component </h1>
			<div className='counter-container'>
				<div className='btn-info' >

					<button onClick={this.handleClick}
					className = 'increment-btn'
					>Increment counter</button>
					<div className='counter-value'>
						<h1 className="counter-text">

						Counter value is {counter}
						</h1>
					</div>
				</div>
				</div>
				</>
		)
	}
}
