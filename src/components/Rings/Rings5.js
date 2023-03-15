// import * as React from "react";
import { render } from "react-dom";
import React, { useState, useEffect } from 'react'
import lens from '../../images/ciorcal-glass-light.png';
import empty from '../../images/empty.png';
import lensCap from '../../images/About1/feicimthu.png'

import emerald from '../../images/misc_crystal_new.png'
import pearl from '../../images/stone-soup/misc_crystal_old.png';
import fromZero from '../../images/about2/0.png'
import fromOne from '../../images/about2/1.png'
import fromTwo from '../../images/about2/1.png'
import fromThree from '../../images/about2/1.png'
import fromFour from '../../images/about2/1.png'
import fromFive from '../../images/about2/1.png'
import fromSix from '../../images/about2/1.png'
import fromSeven from '../../images/about2/1.png'
import fromEight from '../../images/about2/1.png'
import fromNine from '../../images/about2/1.png'
import fromTen from '../../images/about2/1.png'
import fromEleven from '../../images/about2/1.png'
import from from '../../images/about2/1.png'
import from10 from '../../images/about2/1.png'
import from11 from '../../images/about2/1.png'
import from12 from '../../images/about2/1.png'
import from13 from '../../images/about2/1.png'
import from14 from '../../images/about2/1.png'
import from15 from '../../images/about2/1.png'
import from16 from '../../images/about2/1.png'
import from17 from '../../images/about2/1.png'
import from18 from '../../images/about2/1.png'
import from19 from '../../images/about2/1.png'
import from20 from '../../images/about2/1.png'
import from21 from '../../images/about2/1.png'
import from22 from '../../images/about2/1.png'
import from23 from '../../images/about2/1.png'
import from24 from '../../images/about2/1.png'
import from25 from '../../images/about2/1.png'
import from26 from '../../images/about2/1.png'
import from27 from '../../images/about2/1.png'
import from28 from '../../images/about2/1.png'
import from29 from '../../images/about2/1.png'
import from30 from '../../images/about2/1.png'
import from31 from '../../images/about2/1.png'
import avatar1 from '../../images/players/spéirbhean0.gif';

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
		``,
		`náid         `,
		`aon         `,
		`dó       `,
		`trí       `,
		`ceathair     `,
		`cúaig      `,
		`sé         `,
		`seacht           `,
		`ocht         `,
		`naoí         `
		];
		
	let	arabicNumbers = [
		
		``,
		`0
		`,` 1
		`,`2`,
		`3
		`,` 4
		`,`5
		`,`6
		`,`7
		`,`8	
		`,` 9`
		 
		];
		
	const [value, setValue] = React.useState(0);
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
	let champIcon = pearl;
	let champID = Math.floor(value * 100);
	// localStorage.setItem('quest-portrait', champID);


  const tryValue = v => {
	  updateValue(valueWithinLimits(v));
	  thumbStart()
  };
	let hname;
	let hnameE;
	// let fadeOutNoOne = this.props.fadeOutNoOne;
	// let isOn = this.props.isOn

//thumbStart is a hack to prevent side effect of making question text fade out when player is at location 'geaga'.
function thumbStart() { 
	// alert();
	document.querySelector(".champion-portrait").classList.add('fade-in-champ');
	document.querySelector(".numbers-e").classList.add('fade-in-champ'); document.querySelector(".numbers-i").classList.add('fade-in-champ');
	document.querySelector(".question-text").classList.add('fade-out-champ');

} 

	return (

<>
		
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
				<CircularThumb  fill="rgba(135,5,2)"
					stroke="rgba(180,180,180,1)" 	
							strokeWidth={'3px'}/>
			</CircularInput>
			



			{/* <img src={champIcon} className="champion-portrait" alt="champion portrait" /> */}
			{/* <img src={ogHero === "9" ? avatar9 :empty} className="og-hero"  alt="hero portrait"/> */}
			
			</div>

			<div className="ring-text-container-5" >
			
			<p x={100} y={100} className="numbers-i" textAnchor="middle" dy="0.3em" fontWeight="bold">
        {  irishNumbers[ Math.floor(value * 100) + round.current * 100]}
				</p>
				
			{<p className="numbers-e">
				{ 
					  arabicNumbers[ Math.floor(value * 100) + round.current * 100]

				}	
				</p>}
			</div>
				
</>
			);
}


