import React, { useState } from 'react';
// import ExpenceItems from './components/ExpenceItems/ExpenceItems';
import Newexpenses from './components/NewExpences/NewExpences';
import ExpenceItems from './components/ExpenceItems/ExpenceItems';

const initialExpenses = [
	{
		id: 'a1',
		title: 'Books',
		amount: 3000,
		date: new Date(2022, 3, 28)
	},
	{
		id: 'a2',
		title: 'Clocks',
		amount: 3000,
		date: new Date(2022, 5, 20)
	},
	{
		id: 'a3',
		title: 'Laptops',
		amount: 3000,
		date: new Date(2022, 7, 10)
	},
]

const Props = () => {
const [allExpenses, setAllExpenses] = useState(initialExpenses)
	const addExpenseHandler = (expense) => {
		// console.log('In App.js');
		// console.log(allExpenses);
		// setAllExpenses([expense, ...allExpenses])
		// this is the standard from of code when a state depends on another state.
		
		setAllExpenses((preExpenses) => {
			return ([expense, ...preExpenses])
		})
	}
	console.log(allExpenses);
	return (
		<div>
			

			<Newexpenses onAddExpense={addExpenseHandler} />
			
			<ExpenceItems
				items = {allExpenses}
			/>
			

		</div>
	);
};

export default Props;