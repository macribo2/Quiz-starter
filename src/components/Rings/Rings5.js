// import * as React from "react";
import { render } from "react-dom";
import React, { useState, useEffect } from 'react'
import lens from '../../images/ciorcal-glass-light.png';
import lensCap from '../../images/About1/ring2.png';
import empty from '../../images/empty.png';

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

  // Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {

	 })


	function hideText() { 
		alert();
	}
let ogHero = localStorage.getItem('portrait') 
	var namesInIrish = [
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
		
	let	namesInEnglish = [
		
		
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
	
			document.querySelector(".champion-portrait").classList.add('fade-in-champ');
			document.querySelector(".names-e").classList.add('fade-in-champ');document.querySelector(".names-i").classList.add('fade-in-champ');document.querySelector(".question-text").classList.add('fade-out-champ');
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
	localStorage.setItem('quest-portrait', champID);

	if (champID === 0) {
		return <img src= {fromZero} alt="binary bars and hup the yin-yan "/>
	}
	if (champID === 1){
	}
	if (champID === 2){
	}
	if (champID === 3){
	}
	
  const tryValue = v => {
    updateValue(valueWithinLimits(v));
  };
	let hname;
	let hnameE;
	// let fadeOutNoOne = this.props.fadeOutNoOne;
	// let isOn = this.props.isOn

	return (

<>
		
<div className="input-elements-container-7">
<img src={lensCap} className="lens-cap" alt="a fantasy landscape a ring of stones, a haunted tree" />
			</div>
	  <div className="input-elements-container-8">
	  <img src={lens} id="lens" className="lens-ring4" alt="a glass lens" />
			<CircularInput value={value} className="dial dial4" onChange={tryValue}>
				<CircularTrack
				stroke="rgba(185,230,5,1)"
						strokeWidth={'3px'}
				/>
				<CircularThumb  fill="rgba(135,5,2)"
					stroke="rgba(180,180,180,1)" 	
							strokeWidth={'3px'}/>
			</CircularInput>
			

        <p x={100} y={100} className="names-i" textAnchor="middle" dy="0.3em" fontWeight="bold">
        {  hname =  namesInIrish[ Math.floor(value * 100) + round.current * 100]}
				</p>
				
			{<p className="names-e">
				{ 
					hname =  namesInEnglish[ Math.floor(value * 100) + round.current * 100]

				}	
			</p>}

			<img src={ogHero === "1" ?  avatar1  : empty} className="og-hero"  alt="hero portrait"/>
			

			{/* <img src={ogHero === "9" ? avatar9 :empty} className="og-hero"  alt="hero portrait"/> */}
			
			</div>
			
			
			 <div className="input-elements-container-5">
					
				<button className="button-mash-ring-4" onClick={props.fadeOutNoOne}>
					
			<img src={champIcon} className="champion-portrait" alt="champion portrait" />
			
				</button>
				
			
		

		
	  </div>

</>
			);
}


