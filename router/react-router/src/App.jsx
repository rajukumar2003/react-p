import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import React, { Suspense } from 'react'
const Dashboard = React.lazy(() => import('./Components/Dashboard'))
const Landing = React.lazy(() => import('./Components/Landing'))

function App() {

	return <div>
			<BrowserRouter>
				<Appbar/>
				<Routes>
					<Route path='/dashboard' element={
						<Suspense fallback='...loading '>
							<Dashboard/>
						</Suspense>} />
				<Route path='/' element={
					<Suspense fallback="...loading">
						<Landing/>
					</Suspense>}/>
				</Routes>
			</BrowserRouter>
		</div>
}

function Appbar() {
	const navigate = useNavigate();
	return <div>
			<div style={{ background: "black", color: "#ff4000" }}>
				This is navbar
			</div>

			<button onClick={()=> {
				navigate('/')
			}}>Landing Page</button>

			<button onClick={function () {
				navigate('/dashboard')
			}}>Dashboard</button>
		</div>
}

export default App
