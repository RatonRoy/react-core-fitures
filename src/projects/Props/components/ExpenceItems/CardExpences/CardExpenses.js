import React from 'react';
// import './Cardexpenses.css';
import './CardExpenses.css';

const Cardexpenses = (props) => {
	const classes = 'expenses-card-container ' + props.className;
	return (
		<div className={classes}>
			{props.children}
		</div>
	);
};

export default Cardexpenses;