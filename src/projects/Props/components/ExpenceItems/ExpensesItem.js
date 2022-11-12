import React, { useState } from 'react';
import ExpensesDate from './ExpensesDate/ExpensesDate';

const ExpensesItem = (props) => {
	const [title, setTitle] = useState(props.title);
	const clickHandler = () => {
		setTitle('Update Title');

	}
	return (
		<div className='expenses-container'>
			<ExpensesDate date={props.date} />
			<section className="expenses-description">
				<div className="expenses-title">
				  {title}
				</div>
				<div className="expenses-amount">
					{props.amount}
				</div>
				<button className="btn-expenses" onClick={clickHandler}>
					Change title
				</button>
			</section>
			</div>
	);
};

export default ExpensesItem;