import React from 'react'
import MainView from './components/main-view/main-view';
import Overworld from './components/overworld/overworld';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




const App = () => {
	return (
	  <Router>
		  <Routes>
			<Route exact path="/" element={<MainView/>}/>
			<Route exact path="/overworld" element={<Overworld/>}/>
		  </Routes>
	  </Router>
	);
  }
  
  export default App;

// function App() { 

// 	return (

		
// 		<div className="App">

// 		<Overworld/>

// 		<MainView />

// 		</div>
		
// 	)
// }

// export default App;