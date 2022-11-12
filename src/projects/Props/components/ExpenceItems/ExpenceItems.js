import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Cardexpenses from './CardExpences/CardExpenses';
// import ExpensesDate from './ExpensesDate/ExpensesDate';
import './ExpenceItems.css';
import ExpensesItem from './ExpensesItem';

const ExpenceItems = (props) => {

	
	// this line executed three time because the component call three time initially. 
	console.log("this line call when the function is call");
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = selectedYear => {
	  setFilteredYear(selectedYear);
	};
	
	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	
	let expensesVar = <p className='no-found'>No expenses found using variable </p>

	if (filteredExpenses.length > 0) {
		expensesVar = filteredExpenses.map(expenses => <ExpensesItem
			title={expenses.title}
			amount={expenses.amount}
			date={expenses.date}
			key = {expenses.id}
		/>)
	}

	return (
		<Cardexpenses>
			<ExpensesFilter
				selected={filteredYear} onChangeFilter={filterChangeHandler}
				
			/>
			{/* using variable assignment operator  */}
			{
				expensesVar
			}
			{/* conditional rendering using logical and operator  */}
			{/* {
				filteredExpenses.length == 0 && <p className='no-found'>No expenses found using and  operator </p>
			}
			{
				filteredExpenses.length > 0 && filteredExpenses.map(expenses => <ExpensesItem
					title={expenses.title}
					amount={expenses.amount}
					date={expenses.date}
					key = {expenses.id}
				/>)
			} */}
			{/* Add simple ternary operator  */}
			{/* {
				filteredExpenses.length == 0 ? <p className='no-found'>No expenses found using normal ternary operator </p>
					:
				filteredExpenses.map(expenses => <ExpensesItem
					title={expenses.title}
					amount={expenses.amount}
					date={expenses.date}
					key = {expenses.id}
				/>)
			} */}
			{/* <ExpensesItem
			title={props.items[0].title}
			amount={props.items[0].amount}
			date={props.items[0].date}
			/>
			<ExpensesItem
				 title={props.items[1].title}
				 amount={props.items[1].amount}
				 date={props.items[1].date}
			/>
			<ExpensesItem
				title={props.items[2].title}
				amount={props.items[2].amount}
				date={props.items[2].date}
			/> */}
		</Cardexpenses>
	);
};

export default ExpenceItems;