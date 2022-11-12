import React from 'react';
import './Counter.css';

const Counter = () => {
	let counter = 0; 

	const handleClick = () => {
		counter++;
		console.log('Counter : ', counter );
		Counter();
	}

	const content = (
		<div className='btn-info'>
		  <button onClick={handleClick} className = 'increment-btn'>Increment counter</button>
			<div className='counter-value'>
				<h3 className="counter-text">
				Counter value is {counter}
				</h3>
			</div>
		</div>
	);
	
	return (
		<div className='counter-container'>
			{content}
		</div>
	);
};

export default Counter;