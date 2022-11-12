/* ******************
# useState Hook. 
1. Hooks always start with use. 
2. return a array. 
3. initial argument is the first value.
4. const [state, setState] = useState('initial value');
  {
	after executed setState('new value') the component function execute agin and set the new value on the state that manage from react library. it not means state = 'new value' so like initial state that how use the const key word that means not reassign value in the state.
	*** when a state change the component function execute again. 
  }

## Components 
1. start with capital letter. 
2. Mainly function and return only jsx(html). 
3. component call own declare function whenever it's used. 
4. component function must call same time as much used name of the function. 
5. component are separate from each other that means an event only change the target component not affect other component. 

### Dynamic Styled.
1. Inline dynamic style is style = {{color: isValid ? 'red' : 'blue'}}
2. Dynamic add class like this className = {`firstClass  ${isValid ? secondClass : ''}`}

## conditional rendering 
1.  Add a simple ternary operator  
		
				arrayItems.length == 0 ? <p className='no-found'>No item found using normal ternary operator </p>
					:
				arrayItems.map(item => <ExpensesItem
					title={item.title}
					amount={item.amount}
					date={item.date}
					key = {item.id}
				/>)
2. Using react element
	const element = 
			

************************ */