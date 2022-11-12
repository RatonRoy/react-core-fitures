import React from 'react';
import ExpensesForm from './ExpencesForm';
// import expensesForm from './expensesForm';

const Newexpenses = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
		  ...enteredExpenseData,
		  id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
	  };
	return (
		<div>
			<ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default Newexpenses;