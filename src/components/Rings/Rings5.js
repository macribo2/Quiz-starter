// import * as React from "react";
import { render } from "react-dom";
import React, { useState, useEffect } from 'react'
import lens from '../../images/ciorcal-glass-light.png';
import empty from '../../images/empty.png';
import lensCap from '../../images/About1/feicimthu.png'
import outerLocation from '../../images/ciorcal-glass6.png';
import emerald from '../../images/misc_crystal_new.png'
import pearl from '../../images/stone-soup/misc_crystal_old.png';
import stoneBG from '../../images/about2/folamh.png'
import folamh from '../../images/about2/stone-0.png'
import fromZero from '../../images/about2/stone-0.png'
import fromOne from '../../images/about2/stone-1.png'
import fromTwo from '../../images/about2/stone-2.png'
import fromThree from '../../images/about2/stone-3.png'
import fromFour from '../../images/about2/stone-4.png'
import fromFive from '../../images/about2/stone-5.png'
import fromSix from '../../images/about2/stone-6.png'
import fromSeven from '../../images/about2/stone-7.png'


import {
  CircularInput,
  CircularTrack,
  CircularThumb,
} from "react-circular-input";



export function Rings5(props) {

	// document.getElementByClassName('names-i').style.opacity ="1";
	// document.getElementsByClassName('names-e').style.opacity="1";
  // Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {

	 })


	function hideText() { 
		alert();
	}
let ogHero = localStorage.getItem('portrait') 
	var irishNumbers = [
		`
		`,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		`náid
		`,`náid
		`,`náid
		`,`náid
		`,`náid
		`,`náid
		`,`náid
		`,`náid
		`,`náid
		`,`náid
		`,`aon
		`,`aon
		`,`aon
		`,`aon
		`,`aon
		`,`aon
		`,`aon
		`,`aon
		`,`aon
		`,`aon
		`,`dó
		`,`dó
		`,`dó
		`,`dó
		`,`dó
		`,`dó
		`,`dó
		`,`dó
		`,`dó
		`,`dó
		`,`trí
		`,`trí
		`,`trí
		`,`trí
		`,`trí
		`,`trí
		`,`trí
		`,`trí
		`,`trí
		`,`trí
		`,`ceathair
		`,`ceathair
		`,`ceathair
		`,`ceathair
		`,`ceathair
		`,`ceathair
		`,`ceathair
		`,`ceathair
		`,`ceathair
		`,`ceathair
		`,`cúig 
		`,`cúig 
		`,`cúig 
		`,`cúig 
		`,`cúig 
		`,`cúig 
		`,`cúig 
		`,`cúig 
		`,`cúig 
		`,`cúig 
		`,`sé 
		`,`sé 
		`,`sé 
		`,`sé 
		`,`sé 
		`,`sé 
		`,`sé 
		`,`sé 
		`,`sé 
		`,`sé 
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`, `seacht
		`



		];
		
	let arabicNumbers = [
		
		
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		`0`,
		`0`,
		`0`,
		`0`,
		`0`,
		`0`,
		`0`,
		`0`,
		`0`,
		`0`,
	`1
	`,`1
	`,`1
	`,`1
	`,`1
	`,`1
	`,`1
	`,`1
	`,`1
	`,`1
	`,`2
	`,`2
	`,`2
	`,`2
	`,`2
	`,`2
	`,`2
	`,`2
	`,`2
	`,`2
	`,`3
	`,`3
	`,`3
	`,`3
	`,`3
	`,`3
	`,`3
	`,`3
	`,`3
	`,`3
	`,`3
	`,`4
	`,`4
	`,`4
	`,`4
	`,`4
	`,`4
	`,`4
	`,`4
	`,`4
	`,`4
	`,`4
	`,`5 
	`,`5 
	`,`5 
	`,`5 
	`,`5 
	`,`5 
	`,`5 
	`,`5 
	`,`5 
	`,`5 
	`,`5 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`, `7
	`
		, ``
	,

];
		
	const [value, setValue] = React.useState(0.1);
  const prevValue = React.useRef(0);
  const diff = React.useRef(0);
  const dir = React.useRef(0);
  const round = React.useRef(0);

  const max = 0.99;
  const min = 0;

  const valueWithinLimits = rv => {
    const v = Math.floor(rv * 100) / 100;
    console.log("v", v);

    const diff = v - value;
    let vRound = round.current;
    if (diff > 0.8) vRound--;
    if (diff < -0.8) vRound++;

    const currentValue = value + round.current;
    const requestedValue = v + vRound;
    const minValue = 0.77;
    const maxValue = 0.99;
    console.log("current | requested", currentValue + "|" + requestedValue);
    console.log(" round.current", round.current);

    // //if (requestedValue > 1) return value;
    if (requestedValue > max) return maxValue;
    else if (requestedValue < min) return minValue;
    else return v;
};
let champPortrait = document.getElementsByClassName('champion-portrait')

	//when player turns dial to select champion:  show avatar in fairy ring; fade in eng and irish names, fade out question text.
	if (value > 0 ||value < 0 ) { 
	
	}

	function buttonMashClick() { 
		



		
	}
  const updateValue = v => {
    diff.current = v - prevValue.current;
    if (diff.current > 0.8) round.current--;
    if (diff.current < -0.8) round.current++;
    prevValue.current = v;
    setValue(v);
  };
	let binaryIcon = folamh;
	let binaryID = Math.floor(value * 100);
	// localStorage.setItem('quest-portrait', champID);
	if (binaryID >= 0 && binaryID <= 10){
	}
	if (binaryID >= 11 && binaryID <= 20){
		binaryIcon = folamh;

	}
	if (binaryID >= 21 && binaryID <= 30){
		binaryIcon = fromOne;
		
	}
	if (binaryID >= 31 && binaryID <= 40){
		
		binaryIcon = fromTwo;
	}
	if (binaryID >= 41 && binaryID <= 50){
		binaryIcon = fromThree;
		
	}
	if (binaryID >= 51 && binaryID <= 60){
		binaryIcon = fromFour;

	}
	if (binaryID >= 61 && binaryID <= 70){
		binaryIcon = fromFive;

	}
	if (binaryID >= 71 && binaryID <= 80){
		binaryIcon = fromSix;

	}
	if (binaryID >= 81 && binaryID <= 100){
		binaryIcon = fromSeven;
		
	}
	if (binaryID === 100) {
//show buttonmash with colors.gif.
	}
	

	const tryValue = v => {
	  updateValue(valueWithinLimits(v));
	  thumbStart()
  };
	let hname;
	let hnameE;
	// let fadeOutNoOne = this.props.fadeOutNoOne;

//thumbStart is a hack to prevent side effect of making question text fade out when player is at location 'geaga'.
function thumbStart() { 
	// alert();
	document.querySelector(".champion-portrait").classList.add('fade-in-champ');
	document.querySelector(".numbers-e").classList.add('fade-in-champ'); document.querySelector(".numbers-i").classList.add('fade-in-champ');
	document.querySelector(".question-text").classList.add('fade-out-champ');

} 

	return (

		<>
			
		<img id="tullynally-lens" rel="preload" src={outerLocation} className="question-img" alt="dark green fields background" />	
			<div className="bg-container"><img src={ stoneBG} alt="yin yan in gold and black circle" /></div>
		<div className="ring-5-binary-container">
			
<img src={binaryIcon} className="binary-portrait" alt="representation of binary numbers" />
			  </div> 

				{/* <div className="ring-5-lens-cap-container"> */}
{/* <img src={lensCap} className="lens-cap" alt="a fantasy landscape a ring of stones, a haunted tree" /> */}
			{/* </div> */}
	 
			
			 {/* <div className="ring-5-button-mash-container"> */}
			 
				{/* <button className="button-mash-ring-5" onClick={props.fadeOutNoOne}></button>
				 */}
			 {/* </div> */}
			 <div className="ring-5-dial-container">
			 <CircularInput value={value} className="dial dial5" onChange={tryValue}>
				<CircularTrack
				stroke="rgba(185,230,5,1)"
						strokeWidth={'3px'}
				/>
				<CircularThumb  fill="rgba(204, 255, 153,1)"
					stroke="rgba(255, 195, 0 ,1)" 	
							strokeWidth={'3px'}/>
			</CircularInput>
			
			


			{/* <img src={champIcon} className="champion-portrait" alt="champion portrait" /> */}
			{/* <img src={ogHero === "9" ? avatar9 :empty} className="og-hero"  alt="hero portrait"/> */}
			
			</div>

			<div className="ring-text-container-5" >
			
			<p x={100} y={100} className="numbers-i" textAnchor="middle" dy="0.3em" fontWeight="bold">
        {  irishNumbers[ Math.floor(value * 100) + round.current * 100]}
				</p>
				
				<p className="numbers-e" >
				{ 
					  arabicNumbers[ Math.floor(value * 100) + round.current * 100]

				}	
				</p>
				<div className="binary-portrait-container">
					

				
							
</div>
			</div>
				
</>
			);
}


