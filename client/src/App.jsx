import React from 'react'
import Home from './Home'
import './App.css'

function App() {
	return (
		<div className='container-fluid wrapper'>
			<header></header>
			<main>
				<Home />
			</main>
			{/* <footer><p>This is my footer</p></footer> */}
			<div id="bg-img"></div>
		</div>
	)
}

export default App
