// import * as React from "react";
import darkFields from '../../images/about2/stone-0.png'
import { render } from "react-dom";
import './gael-ring.css';
import React, { useState, useEffect } from 'react'
import lens from '../../images/ciorcal-glass-light.png';
import empty from '../../images/empty.png';
import tutorial0 from '../../images/tutorials/tutorial0.png';
import gaelChallengeBG from '../../images/about2/01.png'
import lensCap from '../../images/About1/feicimthu.png'
import outerLocation from '../../images/ciorcal-glass7.png';
import emerald from '../../images/misc_crystal_new.png'
import pearl from '../../images/stone-soup/misc_crystal_old.png';
import stoneBG from '../../images/About1/ceist.png'
import folamh from '../../images/about2/stone-0.png'
import fromZero from '../../images/about2/stone-0.png'
import fromOne from '../../images/about2/stone-1.png'
import fromTwo from '../../images/about2/stone-2.png'
import fromThree from '../../images/about2/stone-3.png'
import fromFour from '../../images/about2/stone-4.png'
import fromFive from '../../images/about2/stone-5.png'
import fromSix from '../../images/about2/stone-6.png'
import fromSeven from '../../images/about2/stone-7.png'
import glass from '../../images/big-glass.png';

import champion99 from '../../images/champions/99.png'


import './tully-nally-style.css';
import './gael-ring.css';
import {
  CircularInput,
  CircularTrack,
  CircularThumb,
} from "react-circular-input";



export default function Rings3(props) {

	const [isOn, toggleIsOn] = useToggle();
	function useToggle(initialValue = false) {
		
		const [value, setValue] = React.useState(initialValue);
		const toggle = React.useCallback(() => {
		  setValue(v => !v);
		}, []);
		localStorage.setItem("isOn", isOn)
		console.log(localStorage.getItem('isOn'))
		return [value, toggle];
	  }

	// let tullyP = document.getElementById('tully-p')

	// document.getElementByClassName('names-i').style.opacity ="1";
	// document.getElementsByClassName('names-e').style.opacity="1";
  // Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {

	 })


	function hideText() { 
		alert();
	}
let ogHero = localStorage.getItem('portrait') 
	var irishText = [
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
		``,

		`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;" >Fadó fado...</span>`,
		`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;" >Fadó fado...</span>`,
		`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;" >Fadó fado...</span>`,


		`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;" >Fadó fado...</span>`,
		`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;" >Fadó fado...</span>`,


		`<span style="font-family:aonchlo;">d'Aistir Amergín Glúingel Míl Espáine go hOileann na Tuaithe Dé Danann.</span>`,
		`<span style="font-family:aonchlo;">d'Aistir Amergín Glúingel Míl Espáine go hOileann na Tuaithe Dé Danann.</span>`,
		`<span style="font-family:aonchlo;">d'Aistir Amergín Glúingel Míl Espáine go hOileann na Tuaithe Dé Danann.</span>`,
		`<span style="font-family:aonchlo;">d'Aistir Amergín Glúingel Míl Espáine go hOileann na Tuaithe Dé Danann.</span>`,
		`<span style="font-family:aonchlo;">d'Aistir Amergín Glúingel Míl Espáine go hOileann na Tuaithe Dé Danann.</span>`,
		
		`<span style="font-family:aonchlo;">Bhí trí banríonn ann in árd-fhlaitheas:`,
		`<span style="font-family:aonchlo;">Bhí trí banríonn ann in árd-fhlaitheas:`,
		`<span style="font-family:aonchlo;">Bhí trí banríonn ann in árd-fhlaitheas:`,

		`<span style="font-family:aonchlo;">Bhí trí banríonn ann in árd-fhlaitheas:`,
		`<span style="font-family:aonchlo;">Bhí trí banríonn ann in árd-fhlaitheas:`,

			`Éirú, Banba, Fóladh.</span>`,
			`Éirú, Banba, Fóladh.</span>`,
			`Éirú, Banba, Fóladh.</span>`,
			`Éirú, Banba, Fóladh.</span>`,
			`Éirú, Banba, Fóladh.</span>`,
		
			`<span style="font-family:aonchlo;">Chas a draoithe stoirm i gcoinne naimhead fad taingaire. </span>`,
		`<span style="font-family:aonchlo;">Chas a draoithe stoirm i gcoinne naimhead fad taingaire. </span>`,
		`<span style="font-family:aonchlo;">Chas a draoithe stoirm i gcoinne naimhead fad taingaire. </span>`,
		`<span style="font-family:aonchlo;">Chas a draoithe stoirm i gcoinne naimhead fad taingaire. </span>`,
		`<span style="font-family:aonchlo;">Chas a draoithe stoirm i gcoinne naimhead fad taingaire. </span>`,
		
		
		`D'freagair Amergín dríocht na hóileánn le filíocht na nGael</span>`,
		`D'freagair Amergín dríocht na hóileánn le filíocht na nGael</span>`,
		`D'freagair Amergín dríocht na hóileánn le filíocht na nGael</span>`,
		`D'freagair Amergín dríocht na hóileánn le filíocht na nGael</span>`,
		`D'freagair Amergín dríocht na hóileánn le filíocht na nGael</span>`,
		
`<br/><span style="font-family:aonchlo;font-family:aonchlo;animation:fade-in 0.5s forwards;"> &nbsp; &nbsp;Am gaeth i m-muir <br/>
 &nbsp; &nbsp;Am tond trethan<br/>
 &nbsp; &nbsp;Am fuaim mara...</span>
`,	
`<br/><span style="font-family:aonchlo;font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;Am gaeth i m-muir <br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am tond trethan<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am fuaim mara...</span>
`,
	`<br/><span style="font-family:aonchlo;font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;Am gaeth i m-muir <br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am tond trethan<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am fuaim mara...</span>
`,
	
`<br/><span style="font-family:aonchlo;font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;Am gaeth i m-muir <br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am tond trethan<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am fuaim mara...</span>`
,`<br/><span style="font-family:aonchlo;font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;Am gaeth i m-muir <br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am tond trethan<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am fuaim mara...</span>
`,

			
`<br/><span style="font-family:aonchlo;font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;Am dam seċt ndirend <br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am séig i n-aill<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am dér gréne<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am cain lubai...</span>
`,
			

			
`<br/><span style="font-family:aonchlo;font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;Am dam seċt ndirend <br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am séig i n-aill<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am dér gréne<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am cain lubai...</span>
`,
			

			
`<br/><span style="font-family:aonchlo;font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;Am dam seċt ndirend <br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am séig i n-aill<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am dér gréne<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am cain lubai...</span>
`,
		
`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;"><br/><span style=" animation:fade-in 0.5s forwards;font-family:aonchlo;">&nbsp; &nbsp; &nbsp; &nbsp;Am bri danae<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am bri i fodb fras feoċtu<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am dé delbas <br/>
&nbsp; &nbsp; &nbsp; &nbsp;do ċind codnu...</span>
`,			
`<br/><span style="font-family:aonchlo;font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;Am dam seċt ndirend <br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am séig i n-aill<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am dér gréne<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am cain lubai...</span>
`,
		
`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;"><br/><span style=" animation:fade-in 0.5s forwards;font-family:aonchlo;">&nbsp; &nbsp; &nbsp; &nbsp;Am bri danae<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am bri i fodb fras feoċtu<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am dé delbas <br/>
&nbsp; &nbsp; &nbsp; &nbsp;do ċind codnu...</span>
`,	


`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;"><br/><span style=" animation:fade-in 0.5s forwards;font-family:aonchlo;">&nbsp; &nbsp; &nbsp; &nbsp;Am bri danae<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am bri i fodb fras feoċtu<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am dé delbas <br/>
&nbsp; &nbsp; &nbsp; &nbsp;do ċind codnu...</span>
`,		
`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;"><br/><span style=" animation:fade-in 0.5s forwards;font-family:aonchlo;">&nbsp; &nbsp; &nbsp; &nbsp;Am bri danae<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am bri i fodb fras feoċtu<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am dé delbas <br/>
&nbsp; &nbsp; &nbsp; &nbsp;do ċind codnu...</span>

`,		

`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;"><br/><span style=" animation:fade-in 0.5s forwards;font-family:aonchlo;">&nbsp; &nbsp; &nbsp; &nbsp;Am bri danae<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am bri i fodb fras feoċtu<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am dé delbas <br/>
&nbsp; &nbsp; &nbsp; &nbsp;do ċind codnu...</span>
`,		
`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;"><br/><span style=" animation:fade-in 0.5s forwards;font-family:aonchlo;">&nbsp; &nbsp; &nbsp; &nbsp;Am bri danae<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am bri i fodb fras feoċtu<br/>
&nbsp; &nbsp; &nbsp; &nbsp;Am dé delbas <br/>
&nbsp; &nbsp; &nbsp; &nbsp;do ċind codnu...</span>

`,	
`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;"><br/><span style=" font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;...Cáinte im gai<br/> 
&nbsp; &nbsp; &nbsp; &nbsp;	cainte gaiṫe.</span>
`,			`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;"><br/><span style=" font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;...Cáinte im gai<br/> 
&nbsp; &nbsp; &nbsp; &nbsp;	cainte gaiṫe.</span>
`,			`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;"><br/><span style=" font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;...Cáinte im gai<br/> 
&nbsp; &nbsp; &nbsp; &nbsp;	cainte gaiṫe.</span>
`,
`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;"><br/><span style=" font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;...Cáinte im gai<br/> 
&nbsp; &nbsp; &nbsp; &nbsp;	cainte gaiṫe.</span>
`,			`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;"><br/><span style=" font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;...Cáinte im gai<br/> 
&nbsp; &nbsp; &nbsp; &nbsp;	cainte gaiṫe.</span>
`,
		`<span style="font-family:aonchlo;">Bhriseadh ar Ríthe na Tuaithe Dé Dannan.</span>`,
		`
		<span style="font-family:aonchlo;">Bhriseadh ar Ríthe na Tuaithe Dé Dannan.</span>`,
		`
		<span style="font-family:aonchlo;">Bhriseadh ar Ríthe na Tuaithe Dé Dannan.</span>`,

		`
		<span style="font-family:aonchlo;">Bhriseadh ar Ríthe na Tuaithe Dé Dannan.</span>`,
		`
		<span style="font-family:aonchlo;">Bhriseadh ar Ríthe na Tuaithe Dé Dannan.</span>`,


		`<span style="font-family:aonchlo; ">
		Bin tús na cíannta Gaelach, de réir an finscéalíocht.</span>`,

		`<span style="font-family:aonchlo; ">
		Bin tús na cíannta Gaelach, de réir an finscéalíocht.</span>`,

		`<span style="font-family:aonchlo; ">
		Bin tús na cíannta Gaelach, de réir an finscéalíocht.</span>`,

		`<span style="font-family:aonchlo; ">
		Bin tús na cíannta Gaelach, de réir an finscéalíocht.</span>`,

		`<span style="font-family:aonchlo; ">
		Bin tús na cíannta Gaelach, de réir an finscéalíocht.</span>`,
		
			``,``,``,``,``,``,``,``,``,
		];
	// let tullyPortrait = setPlayerIcon();
	let engText = [
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
		``,

		`Long long ago...`,
		`Long long ago...`,
		`Long long ago...`,

		` Amergin of the Bright Knees | Birth of Song <br/>
		 Soldier of Spain <br/>
		 adventured to a forest island`, 
		 ` Amergin of the Bright Knees | Birth of Song <br/>
		 Soldier of Spain <br/>
		 adventured to a forest island`, 
		 ` Amergin of the Bright Knees | Birth of Song <br/>
		 Soldier of Spain <br/>
		 adventured to a forest island`, 
		 
		`Three queens ruled there`,		
		`Three queens ruled there`,		
		`Three queens ruled there`,		
		`Éiru, Banba, Fóladh.`,
		 
		`Éiru, Banba, Fóladh.`,
		 
		`Éiru, Banba, Fóladh.`,

		`Their Druids hurled a tempest against their long prophesized enemy.`, `Their Druids hurled a tempest against their long prophesized enemy.`,
		`Their Druids hurled a tempest against their long prophesized enemy.`,`
		Amergín responded to island magic with Gaelic verse`,
		`
		Amergín responded to island magic with Gaelic verse`,
		`
		Amergín responded to island magic with Gaelic verse`,
		` I am the wind which breaths upon the sea<br/>
		  I am the wave of the ocean<br/>
		  I am the murmur of the billows</div>`,
		
		  ` I am the wind which breaths upon the sea<br/>
		  I am the wave of the ocean<br/>
		  I am the murmur of the billows</div>`,
		
		  ` I am the wind which breaths upon the sea<br/>
		  I am the wave of the ocean<br/>
		  I am the murmur of the billows</div>`,
		
	
		`I am Stag of Seven Tines<br/>
	  I am a Hawk on a Cliff<br/>
	  I am a beam of the sun<br/>
	  I am the fairest of plants`,
	  
	  `I am Stag of Seven Tines<br/>
	  I am a Hawk on a Cliff<br/>
	  I am a beam of the sun<br/>
	  I am the fairest of plants`,
	 
	  `I am Stag of Seven Tines<br/>
	  I am a Hawk on a Cliff<br/>
	  I am a beam of the sun<br/>
	  I am the fairest of plants`,
	  
	  
		`I am a word of science<br/>
	   I am the point of the lance of battle`,
		`...(I am) a Song on a Spear<br/>
	   an Enchantment of Winds.`
		,
		  
		`I am a word of science<br/>
	   I am the point of the lance of battle`,
		`...(I am) a Song on a Spear<br/>
	   an Enchantment of Winds.`
		,  
		`I am a word of science<br/>
	   I am the point of the lance of battle`,
		`...(I am) a Song on a Spear<br/>
	   an Enchantment of Winds.`
		,  
		
		`The kings of Dé Danann 
	fell with their forces
	to the Milesians.`
		,
		`The kings of Dé Danann 
		fell with their forces
		to the Milesians.`
			,
			`The kings of Dé Danann 
			fell with their forces
			to the Milesians.`
				,
																					
		`So began centuries of Gaelic civilization<br/>
		So the legend goes.`,
		`So began centuries of Gaelic civilization<br/>
		So the legend goes.`,
		`So began centuries of Gaelic civilization<br/>
		So the legend goes.`,


		``,``,``,``,``,``,``,``,``,

];
	function gaelChallenge() { 
		document.getElementById('dir-pad').style.opacity='1'

		document.getElementById('ring-dial-5').style.display='none'
		document.getElementById('binary-portrait').style.display='none'
		document.getElementById('gael-challenge-bg').style.display='block'
		document.getElementById('gael-challenge-bg').classList.add('fade-in-champ')	
		document.getElementById('n-id').innerHTML='Curdaigh gort a cúig';
		document.getElementById('e-id').innerHTML='Search field five';

		document.getElementById('bg-container-rings-5').style.opacity='0.5'
		// document.getElementById('bg-container-rings-5').setAttribute.src = {darkFields}
		document.getElementById('mash-5').style.display='none'	}
	const [value, setValue] = React.useState(0.68);
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
    // if (requestedValue > max) return maxValue;
    if (requestedValue < min) return minValue;
    else return v;
};
let champPortrait = document.getElementsByClassName('champion-portrait')

	//when player turns dial to select champion:  show avatar in fairy ring; fade in eng and irish names, fade out question text.
	if (value > 0 ||value < 0 ) { 
	
	}

	function buttonMashClick() { 
		



		
	}

	function setPlayerIcon() {
		
		// { localStorage.setItem('portrait',"")}
		
	
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
		// tullyP.style.top = '10%'
		// tullyP.style.left = '60%'
		
		
		document.getElementById('tut-5').classList.add('fade-out-champ')
	}
	if (binaryID >= 21 && binaryID <= 30){
		// tullyP.style.transform = 'rotate(0deg)'
		binaryIcon = fromOne;
		// tullyP.style.top = '30%'
		// tullyP.style.left = '56%'
		document.getElementById('tut-5').classList.add('fade-out-champ')
	}
	if (binaryID >= 31 && binaryID <= 40){
		// tullyP.style.transform = 'rotate(90deg)'
		document.getElementById('tut-5').classList.add('fade-out-champ')

		binaryIcon = fromTwo;

		// tullyP.style.top = '50%'

		// tullyP.style.left = '60%'
		// tullyP.style.transform = 'scaleX(1)';
		// tullyP.style.transform = 'scaleY(-1)';

	}
	if (binaryID >= 41 && binaryID <= 50){
		binaryIcon = fromThree;
		// tullyP.style.top = '64%'

		// tullyP.style.left = '55%'	
		// tullyP.style.transform = 'rotate(118deg)';
		
	}
	if (binaryID >= 51 && binaryID <= 60){
		binaryIcon = fromFour;
// tullyP.style.transform = 'rotate(180deg)'


		// tullyP.style.top = '70%'
		// tullyP.style.left = '43%'	
		// tullyP.style.zIndex = '4000'
		

	}
	if (binaryID >= 61 && binaryID <= 70){
		binaryIcon = fromFive;


		// tullyP.style.top = '45%'
		// tullyP.style.left = '30%'
		// tullyP.style.zIndex = '4'
		
		// tullyP.style.transform = 'rotate(270deg)';
		
	}
	if (binaryID >= 71 && binaryID <= 80){
		binaryIcon = fromSix;


		// tullyP.style.top = '30%'
		// tullyP.style.left = '32%'	
		// tullyP.style.transform = 'rotate(0deg)';
		
		// document.getElementById('bg-container-rings-5').classList.remove('circle')
	}
	if (binaryID >= 81 && binaryID <= 100){
		binaryIcon = fromSeven;

		// tullyP.style.top = '21%'
		// tullyP.style.left = '38%'	
		
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
	// document.querySelector(".champion-portrait").classList.add('fade-in-champ');
	// document.querySelector(".history-e").classList.add('fade-in-champ'); document.querySelector(".history-i").classList.add('fade-in-champ');
	// document.querySelector(".question-text").classList.add('fade-out-champ');

} 

	
	return (

		<>
			<div className="gael-ring-0">
		{/* <img id="gael-ring-lens" rel="preload" src={outerLocation} className="question-img tullynally-zoom" alt="dark green fields background" />	 */}
			<div id="bg-container-rings-5" className="bg-container tullynally-zoom"><img src={ stoneBG} alt="geometric 8bit forest in a stone ring." /></div>
			<div className="ring-5-binary-container">
			
			{/* <img src={binaryIcon} id='binary-portrait' className="binary-portrait tullynally-zoom" alt="representation of binary numbers in stone" /> */}
	  </div> 
{/* 
<img src={tullyPortrait} id="tully-p" className="champion-portrait tully-portrait tullynally-zoom" alt="champion portrait" /> */}
				{/* <div className="ring-5-lens-cap-container"> */}
{/* <img src={lensCap} className="lens-cap" alt="a fantasy landscape a ring of stones, a haunted tree" /> */}
			{/* </div> */}
	 
			<div className="tut-ring-5-container">
				<img id="tut-5" src={tutorial0} className="tutorial0 tut-ring5" alt="spinning arrow" />
				</div>
				{isOn ? (<div id="glass">
< img  src={glass} className="question-img" rel="preload" id="glass-img" alt="glass bg for translucent overlay effect." />	
			<div dangerouslySetInnerHTML={{ __html: engText[Math.floor(value * 100) + round.current * 100] }} x={100} y={100} id="e-id" className="history-e" style={{ opacity: isOn ? 1: 0}}></div>
			




{/* <p className={currentQuestion === 1 ? "choice-ring-0-hint" : "hidden"}>{choiceRingEng[value * 10]}</p> */}


</div>) : null}

				
					
			 
			 <div id="ring-dial-5" className="ring-5-dial-container">
			 <CircularInput value={value} className="dial dial5" onChange={tryValue}>
				<CircularTrack
				stroke="#523f0d"
						strokeWidth={'3px'}
				/>
				<CircularThumb  fill="#58511b"
				/>
			</CircularInput>
			
			
			<div className='toggle-glass-btn-container'>
						<button id="toggle-glass-btn-history" className={ value>=0.68 && value<= 1 || value>=0 && value<= 0.02 ?'tog-glass':'hidden'} onClick={toggleIsOn} ><img src={ isOn ?pearl:emerald} id="blank" alt="a crystal or precious stone toggle on off button" /></button></div>
			
				
				</div>		


			{/* <img src={ogHero === "9" ? avatar9 :empty} className="og-hero"  alt="hero portrait"/> */}
			

			</div>

			<div className="ring-text-container-5" >
			
					

<div  dangerouslySetInnerHTML= {{__html:irishText[ Math.floor(value * 100) + round.current * 100]}} x={100} y={100} id="n-id" className="history-i" textAnchor="middle" dy="0.3em" fontWeight="bold" ></div>

			
			</div>
			

					
{/* 	 */}

				
	
			
			<div id="ring-5-challenge-container"className="challenge-container">
				<img id="gael-challenge-bg" src={gaelChallengeBG} alt="" />
			</div>
	
		</>
			);
}


