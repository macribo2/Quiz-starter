import React, { useState } from 'react';
import './rings0.css';
import lens from '../../images/ciorcal-glass.png';
import emerald from '../../images/misc_crystal_new.png'
import pearl from '../../images/stone-soup/misc_crystal_old.png';
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb
} from 'react-circular-input'
let showTheGlass = true; 
export default function Rings0(props) {

	const [value, setValue3] = React.useState(0);
	
	// const [value, setValue] = React.useState(initialValue);
	const stepValue3 = v => Math.round(v * 10) / 10;
	
	localStorage.setItem('ring0', value * 10);
	//	'I feel the smell of a melodious lying Irishman under my sod of country.'
	//
	
	// Ní Eireannaċ binn breugaċ mise,
// 	// /No melodious lying Irishman am I,
	
// 	“And what is the wages you’ll be looking for?”

// “The place of a house and garden.”

// “You’ll get that if my journey succeeds with me.”
	
	
	/*
	
	“I’ll bring you away from her side without her knowing it, when you are both asleep together, and I’ll bring you back to her the same way,” said the little man.
	
	*/
	function showHints() { 
		console.log("showTheGlass")

		if(showTheGlass === false){
		showTheGlass = true;
			console.log(showTheGlass)
		}
		else if (showTheGlass === true) { 
			showTheGlass = false;
			console.log(showTheGlass)
		}
	}

	
	let gottenRings0 = 0;
	let Ring2AnsEng = ['',
		'I’ll go, certainly',
		'No thank you',
		'I will, on a wage', 'Not till I get a drink', 'I’ll give you the price, if you\'re joking!',
		'Alchemical Symbol for Hour',
		'choice9',
		'I feel the smell of a melodious lying Irishman under my sod of country.',
		'⚔',
	]


	
	let Ring2Ans = ['',
		'Rachfaidh cinnte',
		'Ní go raibh maith agat',
		'Rachfaidh, ar thuarastal',
		'Ní go bhfaighidh mé deoch',
		'Béarfaidh mé luach, más ag mhagaidh atá tú”',
		'🝮',
		'rogha9',
		'Mothaím boladh an Éireannaigh bhinn bhréagach faoi m’ḟóidín dúṫaiġ',
		'⚔',
	
	]
	function reportStepValue3 () {
		alert(showTheGlass);
		console.log(showTheGlass);
		console.log("showTheGlass");

	}
	return (
		 <>
				<CircularInput className="dial" value={value}  onChange={v => setValue3(stepValue3(v))}>{}
					<CircularTrack />
			{/* <img  src={avatar} className={value === 0 ? 'hidden':'avatar' } alt="Caniuse battus tv charactéir" />		 */}
				
			<CircularProgress />
					<CircularThumb />
				
		</CircularInput>
		<img src={lens} id="lens" alt="a glass lens" />
			
		<p className='rings0' >{Ring2Ans[value * 10]}</p>


			<h1>{ props.isOn}</h1>
			{props.isOn ? <p className="rings0Eng">{Ring2AnsEng[value * 10]}</p> : null}
			{ localStorage.setItem('freagra1', value * 10)
}
			<button id="ring-glass-btn" onClick={props.toggleIsOn}	><img src={props.isOn? pearl:emerald} id="blank" alt="a crystal or precious stone toggle on off button" /></button>
			


			<buton className="button-mash-ring-0" onClick={props.buttonMashClick}></buton>
			
		</>)
};


