import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import MenuNav from './MenuNav'
import './App.css'

function App() {
	return (
		<div className='container-fluid wrapper'>
			<header className='row w-100 justify-content-between align-items-center bg-dark'>
				<div className='col-3 logo p-0 m-0'>
					<img className='img img-fluid ' src="../src/assets/wipoutImg3.png" alt="WipeOut Records logo" />
				</div>
				<h1 className='h1 menuTitle display-1 col-6 text-center'>WipeOut Records</h1>


				<div className='col-3 '><MenuNav /></div>
			</header>

			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/wipeoutexpungements/contact" element={<Contact />} />
				</Routes>
			</main>

			{/* <footer><p>This is my footer</p></footer> */}
			{/* <div id="bg-img"></div> */}
		</div>
	)
}

export default App
