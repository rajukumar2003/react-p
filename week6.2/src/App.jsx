import { useState, memo, useCallback, useEffect, useReducer } from 'react'

// function App() {
// 	const [button_no, setButton] = useState(2);

// 	return <div>
// 		<button onClick={function () { setButton(1) }} > 1 </button>
// 		<button onClick={function () { setButton(2) }} > 2 </button>
// 		<button onClick={()=> { setButton(3) }}> 3 </button>
// 		<button onClick={ ()=>{ setButton(4) }}> 4 </button>
// 		<Todo id={ button_no } />
// 	</div>
// }

// function Todo({id}) {
// 	const [todo, setTodos] = useState({});

// 	useEffect(() => {
// 		axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
// 			.then(response => {
// 				setTodos(response.data.todo)
// 			})
// 	}, [id])

// 	return <div>
// 		<h1> {todo.title} </h1>
// 		<h4> {todo.description} </h4>
// 	</div>
// };



// ------------------------------------ Sum from 1 to n ----------------------------------------------------------
// function App() {
// 	const [num, setNum] = useState(1)
	
// 	let sum = 0;
// 	for (let i = 0; i <= num; i++) {
// 		sum = sum + i;
// 	}

// 	return <div>
// 		<input id="number" type="text" onChange={function(e){ setNum(e.target.value) }} placeholder='Sum from 1 to n'/>
// 		<br />
// 		Sum from 1 to {num} is {sum}
// 	</div>
// }
// export default App


//  ------------------------------- Use of Memo ------------------
// function App() {
// 	const [count, setCount] = useState(0);
	
// 	return <div>
// 		<ButtonComponent/>
// 		<button onClick={() => { setCount(count + 1) }}> INcrease <br />{ count }</button>
// 	</div>
// }

// const ButtonComponent = memo(() => {
// 	console.log(' button clicked ');
// 	return <div>
// 		<button>Button clicked</button>
// 	</div>
// })
// export default App;



//  ------------------------------- Use of Callback ------------------
// function App() {
// 	const [count, setCount] = useState(0);

// 	const inputFunction = useCallback(() => {
// 		console.log('hi there');
// 	}, [])

// 	return <div>
// 		<ButtonComponent inputFunction={inputFunction} />
// 		<button onClick={() => { setCount(count + 1) }}> Increase button <br />{count}</button>
// 	</div>
// }

// const ButtonComponent = memo((inputFunction) => {
// 	console.log(' button clicked ');
// 	return <div>
// 	</div>
// })
// export default App;




// ---------------------------------- Custom hooks ---------------------
// function useTodo() {
// 	const [todos, setTodos] = useState[null];

// 	useEffect(() => {
// 		axios.get('')
// 			.then((res) => {
// 				setTodos(res.data.todo);
// 			})
// 	}, []);
// 	return todos;
// }
// // here useTodo is a custom hook.
// function App() {
// 	const todos = useTodo();
// 	return <div>
// 		{todos}
// 	</div>
// }




// ---------------------------------- useReducer ---------------------

const initialState = { count:0 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	// const [count, setCount] = useState(0);
	// const countIncrement = () => {
	// 	setCount(count + 1)
	// };

	return <>
		<h1>Count : {state.count}</h1>
		<button onClick={()=>dispatch( {type: 'increment'} )}> + </button>
		<button onClick={() => dispatch({ type: 'decrement' })}> - </button>
		
		{/* <h3>Counter using useState: { count}</h3>
		<button onClick={()=>countIncrement()}>Increase Using useState</button> */}
	</>
};

export default App;
