// import * as React from "react";
import darkFields from '../../images/about2/stone-0.png'
import { render } from "react-dom";
import React, { useState, useEffect } from 'react'
import lens from '../../images/ciorcal-glass-light.png';
import empty from '../../images/empty.png';
import tutorial0 from '../../images/tutorials/tutorial0.png';
import tullyChallengeBG from '../../images/about2/01.png'
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

import './tully-nally-style.css';
import {
  CircularInput,
  CircularTrack,
  CircularThumb,
} from "react-circular-input";



export function Rings8(props) {
	let tullyP = document.getElementById('tully-p')

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
		`,
		`seacht
		`,
		`seacht
		`,`seacht
		`,
		`seacht
		`,
		`seacht
		`,
		`seacht
		`,
		`seacht`,
		`seacht`,
		`seacht`,
		`seacht`,
		
		
		`Lorg fáinne?
		`,
		`Lorg fáinne?
		`,`Lorg fáinne?
		`,`Lorg fáinne?
		`,`Lorg fáinne?
		`,`Lorg fáinne?
		`,`Lorg fáinne?
		`,`Lorg fáinne?
		`,`Lorg fáinne?
		`,`Lorg fáinne?
		`,`Lorg fáinne?
		`,`Lorg fáinne?
		`,`Lorg fáinne?
		`,
 
		];
	let tullyPortrait = setPlayerIcon();
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
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6 
	`,`6` 
	
		, `7`,
		`7`	,
		`7`	,
		`7`		,
		`7`		,
		`7`		,
		`7`		,
		`7`		,
		`7`		,
		`7`
		,


`seek ring?`
		,

		`seek ring?`
		,
		`seek ring?`
		,
		`seek ring?`
		,
		`seek ring?`
		,
		`seek ring?`
		,
		`seek ring?`
		,
		`seek ring?`
		,
		`seek ring?`
		,
		`seek ring`
		,


];
	function tullyChallenge() { 
		document.getElementById('dir-pad').style.opacity='1'

		// document.getElementById('ring-dial-5').style.display='none'
		document.getElementById('binary-portrait').style.display='none'
		document.getElementById('tully-challenge-bg').style.display='block'
		document.getElementById('tully-challenge-bg').classList.add('fade-in-champ')	
		document.getElementById('n-id').innerHTML='Curdaigh gort a cúig';
		document.getElementById('e-id').innerHTML='Search field five';

		document.getElementById('bg-container-rings-5').style.opacity='0.5'
		// document.getElementById('bg-container-rings-5').setAttribute.src = {darkFields}
		document.getElementById('mash-5').style.display='none'	}
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
	if (binaryID === 0) {
		
	 }
	// localStorage.setItem('quest-portrait', champID);
	if (binaryID >= 0 && binaryID <= 10) {
	
	}
	if (binaryID >= 11 && binaryID <= 20){
		tullyP.style.top = '10%'
		tullyP.style.left = '60%'
		
		
	}
	if (binaryID >= 21 && binaryID <= 30){
		tullyP.style.transform = 'rotate(0deg)'
		binaryIcon = fromOne;
		tullyP.style.top = '30%'
		tullyP.style.left = '56%'
	}
	if (binaryID >= 31 && binaryID <= 40){
		tullyP.style.transform = 'rotate(90deg)'

		binaryIcon = fromTwo;

		tullyP.style.top = '50%'

		tullyP.style.left = '60%'
		// tullyP.style.transform = 'scaleX(1)';
		// tullyP.style.transform = 'scaleY(-1)';

	}
	if (binaryID >= 41 && binaryID <= 50){
		binaryIcon = fromThree;
		tullyP.style.top = '64%'

		tullyP.style.left = '55%'	
		tullyP.style.transform = 'rotate(118deg)';
		
	}
	if (binaryID >= 51 && binaryID <= 60){
		binaryIcon = fromFour;
tullyP.style.transform = 'rotate(180deg)'


		tullyP.style.top = '70%'
		tullyP.style.left = '43%'	
		tullyP.style.zIndex = '4000'
		

	}
	if (binaryID >= 61 && binaryID <= 70){
		binaryIcon = fromFive;


		tullyP.style.top = '45%'
		tullyP.style.left = '30%'
		tullyP.style.zIndex = '4'
		
		tullyP.style.transform = 'rotate(270deg)';
		
	}
	if (binaryID >= 71 && binaryID <= 80){
		binaryIcon = fromSix;


		tullyP.style.top = '30%'
		tullyP.style.left = '32%'	
		tullyP.style.transform = 'rotate(0deg)';
		
		// document.getElementById('bg-container-rings-5').classList.remove('circle')
	}
	if (binaryID >= 81 && binaryID <= 100){
		binaryIcon = fromSeven;

		tullyP.style.top = '21%'
		tullyP.style.left = '38%'	
		
		// document.getElementById('bg-container-rings-5').classList.add('circle')
		
		
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


} 

	
	return (

		<>
			<div className="tullynally-ring">
		<img id="tullynally-lens" rel="preload" src={outerLocation} className="question-img tullynally-zoom" alt="dark green fields background" />	
			<div id="bg-container-rings-5" className="bg-container tullynally-zoom"><img src={ stoneBG} alt="geometric 8bit forest in a stone ring." /></div>
			<div className="ring-5-binary-container">
			
			<img src={binaryIcon} id='binary-portrait' className="binary-portrait tullynally-zoom" alt="representation of binary numbers in stone" />
	  </div> 


				{/* <div className="ring-5-lens-cap-container"> */}
{/* <img src={lensCap} className="lens-cap" alt="a fantasy landscape a ring of stones, a haunted tree" /> */}
			{/* </div> */}
	 
		
			 
			 <div id="ring-dial-5" className="ring-5-dial-container">
			 <CircularInput value={value} className="dial dial5" onChange={tryValue}>
				<CircularTrack
				stroke="rgba(185,230,5,1)"
						strokeWidth={'3px'}
				/>
				<CircularThumb  fill="rgba(204, 255, 153,1)"
					stroke="rgba(255, 195, 0 ,1)" 	
							strokeWidth={'3px'}/>
			</CircularInput>
			
			


			{/* <img src={ogHero === "9" ? avatar9 :empty} className="og-hero"  alt="hero portrait"/> */}
			
			</div>

			<div className="ring-text-container-5" >
			
			<p x={100} y={100} id="n-id" className="numbers-i" textAnchor="middle" dy="0.3em" fontWeight="bold">
        {  irishNumbers[ Math.floor(value * 100) + round.current * 100]}
				</p>
				
				<p id="e-id" className="numbers-e" >
				{ 
					  arabicNumbers[ Math.floor(value * 100) + round.current * 100]

				}	
				</p>
				<div className="binary-portrait-container">
					

				
							
					</div>
				</div>

				<div className="tut-ring-5-container">
				<img id="tut-5" src={tutorial0} className="tutorial0 tut-ring5 spin tullynally-zoom"alt="spinning arrow" /></div>
	</div>				
	<div className="ring-5-button-mash-container"> 
			 
			 <button  id="mash-5"className={ binaryID >=91? "button-mash-ring-5 circle":"hidden" } onClick={tullyChallenge} ></button>
			</div>
			<div id="ring-5-challenge-container"className="challenge-container">
				<img id="tully-challenge-bg" src={tullyChallengeBG} alt="" />
			</div>
		</>
			);
}


