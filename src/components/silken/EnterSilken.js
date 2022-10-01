// I am going to Doon-na-shee (the fortress of the fairies) to-night, to play music for the good people, and if you come with me you’ll see fine fun.



import React, { useState, useEffect} from 'react';
import silken from '../../images/stone-soup/killer_klown_blue.png';
import hill from '../../images/rainy-hill1.png';
import Shadowhill from '../../images/shadow-hill.png';
import './silken.css';


export default function EnterSilken() { 
	
	
	useEffect(() => { 
		setHasLoaded(false);

	})



	const [hasLoaded, setHasLoaded]  = useState(true)
	if ({hasLoaded}){
		return <>
			

			<div className="enter-silken">
		
				<img src={ silken } id="silken" alt="A character in fine silks" />

			</div>


		</>
	}
}