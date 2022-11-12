import React from 'react';
// import './expensesDate.css'
import './ExpensesDate.css';

const ExpensesDate = (props) => {
	const months = props.date.toLocaleString('en-US', { month: 'long' });
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.getFullYear();

	return (
		<section className='date-container'>
			<div className="date-items">
				<div className="month">
					{months}
				</div>
				<div className="year">
					{year}
				</div>
				<div className="day">
					{day}
				</div>
			</div>
		</section>
	);
};

export default ExpensesDate;