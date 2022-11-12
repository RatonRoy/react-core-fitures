import React, { useState } from 'react';
// import './expensesForm.css';
import './ExpencesForm.css';

const ExpensesForm = (props) => {

	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');


	const titleEventHandler = (e) => {
		setEnteredTitle(e.target.value);

	}
	const amountEventHandler = (e) => {
		setEnteredAmount(e.target.value)

	}
	const dateEventHandler = (e) => {
		setEnteredDate(e.target.value)
	}

	const submitHandler = (event) => {
		event.preventDefault();
	
		const expenseData = {
		  title: enteredTitle,
		  amount: enteredAmount,
		  date: new Date(enteredDate),
		};
	
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	  };

	// Manage the data using one state. Here render three states how over you change only one state.

	// 	 const [userInput, setUserInput] = useState({
	// 		enterTitle: '', 
	// 		enterAmount: '', 
	// 		enterDate : '', 
	// 	})

	// 	const titleEventHandler = (e) => {
	// 		/* setUserInput({
	// 			// copy the other state value 
	// 			...userInput, 
	// 			enterTitle: e.target.value
	// 		}); */
	// 		// if a state depends on other states then this way is more better
	// 		setUserInput((preview) => {
	// 			return {...preview, enterTitle : e.target.value}
	// 		})

	// 	}
	// 	const amountEventHandler = (e) => {
	// 		/* setUserInput({
	// 			// copy the other state value 
	// 			...userInput, 
	// 			enterAmount: e.target.value
	// 		}); */

	// 		// if a state depends on other states then this way is more better
	// 		setUserInput((preview) => {
	// 			return {...preview, enterAmount : e.target.value}
	// 		})

	// 	}
	// 	const dateEventHandler = (e) => {
	// 		/* setUserInput({
	// 			// copy the other state value 
	// 			...userInput, 
	// 			enterDate: e.target.value
	// 		}); */
	// 		// if a state depends on other states then this way is more better
	// 		setUserInput((preview) => {
	// 			return {...preview, enterDate : e.target.value}
	// 		})

	// }

	return (
		<form className="form-container" onSubmit={submitHandler} >
			<div className="first-row-container">
				<div className="single-input">
					<label>Title </label>
					<input type="text" className="input title-input"
						onChange={titleEventHandler}
						value={enteredTitle}
					/>
				</div>
				<div className="single-input">
					<label> Amount  </label>
					<input type="number" className="input amount-input"
						onChange={amountEventHandler}
						value={enteredAmount}
					/>
				</div>
			</div>
			<div className="second-row">
				<div className="single-input">
					<label> Date </label>
					<input type="date" className="input date-input"
						min="2019-01-01" max="2022-12-31"
						onChange={dateEventHandler}
						value={enteredDate}
					/>
				</div>
				<div>
					<button type="submit" className='submit-btn'> Add Expenses</button>
				</div>
			</div>
		</form>
	);
};

export default ExpensesForm;