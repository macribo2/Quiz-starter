// I am going to Doon-na-shee (the fortress of the fairies) to-night, to play music for the good people, and if you come with me you’ll see fine fun.



import React, { useState, useEffect} from 'react';
import silken from '../../images/stone-soup/killer_klown_blue.png';
import hill from '../../images/rainy-hill1.png';
import Shadowhill from '../../images/shadow-hill.png';
import './silken.css';


export default function Silken(props) { 
	let answer1 = localStorage.getItem('freagra1')

	let freagra1 = ['','asdfsd', 'Agus cad é an tuarastal atá tu ’g iarraidh? Áit tigínn agus gairdín? Gheobhaidh tú sin, má éirigheann mo turas liom.', 'asdfsadc', 'dasdfasd', 'easdfas', 'asdfasdf', 'asdfdasg', 'hasdfasd',]	
	useEffect(() => { 
		setHasLoaded(false);

	})



	const [hasLoaded, setHasLoaded]  = useState(true)
	if ({hasLoaded}){
		return <>
			

			<div className="silken-holder">
		
				<img src={ silken }  id={ props.currentQuestion === 9? 'depart-silk':"silken"} alt="A character in fine silks" />


{ props.currentQuestion === 8? 	<p className="rings0"id="freagra0">{freagra1[answer1]}</p>:null}
			</div>


		</>
	}
}