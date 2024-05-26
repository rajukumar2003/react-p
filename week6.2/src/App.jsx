import { useState } from 'react'

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
