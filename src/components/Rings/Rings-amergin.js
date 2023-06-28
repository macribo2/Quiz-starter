// import * as React from "react";
import darkFields from '../../images/about2/stone-0.png'
import { render } from "react-dom";
import './gael-ring.css';
import seas1 from '../../images/gael-ring/seas.gif'
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
import fromOne from '../../images/about2/stone-1.png'
import fromTwo from '../../images/about2/stone-2.png'
import fromThree from '../../images/about2/stone-3.png'
import fromFour from '../../images/about2/stone-4.png'
import fromFive from '../../images/about2/stone-5.png'
import fromSix from '../../images/about2/stone-6.png'
import fromSeven from '../../images/about2/stone-7.png'
import boat from '../../images/gael-ring/boat.png'
import glass from '../../images/big-glass.png';

import champion99 from '../../images/champions/99.png'






import slide0 from '../../images/gael-ring/fado.png'
import slide1 from '../../images/gael-ring/tonnta3.gif'
import slide2 from '../../images/gael-ring/queens.png'
import slide3 from '../../images/gael-ring/storm.png'
import slide4 from '../../images/gael-ring/storm.png'
import slide5 from '../../images/gael-ring/storm.png'
import slide6 from '../../images/gael-ring/ceist2.png'
import slide7 from '../../images/About1/aisling-agus-aoife.png'
import slide8 from '../../images/About1/4.gif'
import slide9 from '../../images/About1/ceist2.png'
import slide10 from '../../images/about2/stone-0.png'

import './tully-nally-style.css';
import './gael-ring.css';
import {
  CircularInput,
  CircularTrack,
  CircularThumb,
} from "react-circular-input";



export default function Rings3(props) {

	const stepValue = v => Math.round(v * 10) / 10

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
		`<span style="font-family:aonchlo;animation:fade-in 0.5s forwards;" >&nbsp; &nbsp;Fadó fadó...</span>`,
	

		`<span style="font-family:aonchlo;">d'Aistir Amergín Glúingel Míl Espáine go hOileann na Tuaithe Dé Danann.</span>`,
	
		`<span style="font-family:aonchlo;">Trí banríonn a bhí in árd-fhlaitheas ánn<br/>
		Éirú, Banba, Fóladh.</span>`,
			
			`<span style="font-family:aonchlo;">Chas a draoithe stoirm i gcoinne naimhead fad taingaire. </span>`,

		
		`D'freagair Amergín dríocht na hóileánn le filíocht na nGael</span>`,
	
`<br/><span style="font-family:aonchlo;font-family:aonchlo;animation:fade-in 0.5s forwards;"> &nbsp; &nbsp;Am gaeth i m-muir <br/>
 &nbsp; &nbsp;Am tond trethan<br/>
 &nbsp; &nbsp;Am fuaim mara...</span>
`,	

	`<br/><span style="font-family:aonchlo;font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp;Am dam seċt ndirend <br/>
 &nbsp; &nbsp;Am séig i n-aill<br/>
&nbsp; &nbsp;Am dér gréne<br/>
&nbsp; &nbsp;Am cain lubai...</span>
`,
			


`<br/><span style="font-family:aonchlo;">&nbsp; &nbsp;Am bri danae<br/>
&nbsp; &nbsp;Am bri i fodb fras feoċtu<br/>
&nbsp; &nbsp;Am dé delbas <br/>
&nbsp; &nbsp;do ċind codnu...</span>
<span style="font-family:aonchlo;animation:fade-in 1.5s forwards;"><br/><span style=" font-family:aonchlo;animation:fade-in 0.5s forwards;">&nbsp; &nbsp; &nbsp; &nbsp;...Cáinte im gai<br/> 
&nbsp; &nbsp; &nbsp; &nbsp;	cainte gaiṫe.</span>
`,	
		`<span style="font-family:aonchlo;">Bhriseadh ar Ríthe na Tuaithe Dé Dannan.</span>`,

		`<span style="font-family:aonchlo; ">
		Bin tús na cíannta Gaelach, de réir an finscéalíocht.</span>`,
		
		];
	// let tullyPortrait = setPlayerIcon();
	let engText = [
		
		`&nbsp; Long long ago...`,

		
		 `Amergin of the Bright Knees <br/> Birth of Song,
		 Soldier of Spain <br/>
		 adventured to the island of Dé Dannan.`, 
		 `Three queens were worshiped there<br/>
		 Éiru, Banba, Fóladh.`,

	
		`Their Druids hurled a tempest against a long prophesized enemy.`,`
		Amergín responded to island magic with Gaelic verse`,
				
		` I am the wind which breaths upon the sea<br/>
		  I am the wave of the ocean<br/>
		  I am the murmur of the billows</div>`,
		

	  `I am Stag of Seven Tines<br/>
	  I am a Hawk on a Cliff<br/>
	  I am a beam of the sun<br/>
	  I am the fairest of plants`,
	  

		`I am a word of science<br/>
	   I am the point of the lance of battle<br/>
	   ...(I am) a Song on a Spear<br/>
	   an Enchantment of Winds.`
		,  
					`The kings of Dé Danann 
			fell in battle.`
				,

		`So began centuries of Gaelic civilization<br/>
		So the legend goes.`

];
	function gaelChallenge() { 
		document.getElementById('dir-pad').style.opacity='1'

		document.getElementById('ring-gael').style.display='none'
		document.getElementById('binary-portrait').style.display='none'
		document.getElementById('gael-challenge-bg').style.display='block'
		document.getElementById('gael-challenge-bg').classList.add('fade-in-champ')	
		document.getElementById('n-id').innerHTML='Curdaigh gort a cúig';
		document.getElementById('e-id').innerHTML='Search field five';

		document.getElementById('bg-container-gael').style.opacity='0.5'
		// document.getElementById('bg-container-rings-5').setAttribute.src = {darkFields}
		document.getElementById('mash-5').style.display='none'	}
	const [value, setValue] = React.useState(0);
  const prevValue = React.useRef(0);
  const diff = React.useRef(0);
  const dir = React.useRef(0);
  const round = React.useRef(0);

  const max = 0.99;
  const min = 0;
// if (stepValue > 10) { stepValue = 10 }
// 		if (stepValue< 0 ){stepValue= 0}
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
		
		
		document.getElementById('tut-g').classList.add('fade-out-champ')
	}
	if (binaryID >= 21 && binaryID <= 30){
		// tullyP.style.transform = 'rotate(0deg)'
		binaryIcon = fromOne;
		// tullyP.style.top = '30%'
		// tullyP.style.left = '56%'
		document.getElementById('tut-g').classList.add('fade-out-champ')
	}
	if (binaryID >= 31 && binaryID <= 40){
		// tullyP.style.transform = 'rotate(90deg)'
		document.getElementById('tut-g').classList.add('fade-out-champ')

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
			

		<div className={value * 10 === 5 ? "gael-bg" : "hidden"}>
					<img rel="preload" className={value * 10 === 5 ? "sea-wave" : "hidden"} src={seas1} alt="" />
					
				</div>

		<div className={value * 10 === 4 || value * 10 === 5 || value * 10 === 6 || value * 10 === 7  ? "gael-bg" : "hidden"}>
					<img rel="preload" className= "sea-wave"  src={seas1} alt="" />
					
				</div>
			<div className="gael-ring-0">
		{/* <img id="gael-ring-lens" rel="preload" src={outerLocation} className="question-img tullynally-zoom" alt="dark green fields background" />	 */}
		
		
		
		{/* <div className={value * 10 === 4 ? "linux-lens-container" : "hidden"}>
					<img rel="preload" className={value * 10 === 4 ? "map-lens" : "hidden"} src={storm1} alt="" />
					
				</div> */}
				
				
		
				<div id="bg-container-gael" className="bg-container tullynally-zoom"><img src={stoneBG} alt="geometric 8bit forest in a stone ring." /></div>
			<div className="ring-5-binary-container">
			
			{/* <img src={binaryIcon} id='binary-portrait' className="binary-portrait tullynally-zoom" alt="representation of binary numbers in stone" /> */}
	  </div> 
{/* 
<img src={tullyPortrait} id="tully-p" className="champion-portrait tully-portrait tullynally-zoom" alt="champion portrait" /> */}
				{/* <div className="ring-5-lens-cap-container"> */}
{/* <img src={lensCap} className="lens-cap" alt="a fantasy landscape a ring of stones, a haunted tree" /> */}
			{/* </div> */}
	 
			<div className="tut-ring-g-container">
				<img id="tut-g" src={tutorial0} className="tutorial0 tut-ring5" alt="spinning arrow" />
				</div>


				<div  dangerouslySetInnerHTML= {{__html:irishText[ Math.floor(value* 10) + round.current * 100]}} x={100} y={100} id="n-id" className="history-i" textAnchor="middle" dy="0.3em" fontWeight="bold" ></div>


				{isOn ? (<div id="glass">
< img  src={glass} className="question-img" rel="preload" id="glass-img" alt="glass bg for translucent overlay effect." />	
			<div dangerouslySetInnerHTML={{ __html: engText[Math.floor(value * 10) + round.current * 100] }} x={100} y={100} id="e-id" className="history-e" style={{ opacity: isOn ? 1: 0}}></div>
			
			<div className="about-hist">{value*10 === 0 ? <img src={slide0} className="slide"alt="enegized stonet" /> : null}
                    </div>
                    <div className="about-hist">{value*10=== 1 ? <img className="slide slide1"src={slide1} alt="waves" /> : null}
					</div>
					<div className="about-hist">{value*10=== 1 ? <img className="slide slide1b"src={boat} alt="waves" /> : null}
                    </div>
                    <div className="about-hist">{value*10=== 2 ? <img className="slide" src={slide2} alt="linux logo" /> : null}
                    </div>
                    <div className="about-hist">{value*10 === 3 ? <img src={slide3} className="slide"alt="linux logo" /> : null}
                    </div>
                    <div className="about-hist">{value*10=== 4 ? <img src={slide4} className="slide" alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about-hist">{value*10 === 5 ? <img src={slide5} className="slide"alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about-hist">{value*10 === 6 ? <img src={slide6} className="slide" alt="slide illustritative of text." /> : null}
                    </div>

                    <div className="about-hist">{value*10 === 7? <img src={slide7} className="slide"alt="" /> : null}
					</div>
					<div className="about-hist">{stepValue*10 === 8? <img src={slide8} alt="" /> : null}
                    </div>                    <div className="about-hist">{stepValue*10 === 9? <img src={slide9} alt="" /> : null}
                    </div>

{/* <p className={currentQuestion === 1 ? "choice-ring-0-hint" : "hidden"}>{choiceRingEng[value * 10]}</p> */}


</div>) : null}

				
					
			 
			 <div id="ring-gael" className="ring-gael-dial-container">			 <CircularInput value={stepValue(value)}
		onChange={v => setValue(stepValue(v))}  className="dial dial-gael" >
				<CircularTrack
				stroke="#523f0d"
						strokeWidth={'3px'}
				/>
				<CircularThumb  fill="#58511b"
				/>
			</CircularInput>
	
			
					<div className='toggle-glass-btn-container'>
						{/* className={ value>=0.68 && value<= 1 || value>=0 && value<= 0.02 ?'tog-glass':'hidden'} */}
						<button id="toggle-glass-btn-history"  onClick={toggleIsOn} ><img src={ isOn ?pearl:emerald} id="blank" alt="a crystal or precious stone toggle on off button" /></button></div>
			
				
				</div>		


			{/* <img src={ogHero === "9" ? avatar9 :empty} className="og-hero"  alt="hero portrait"/> */}
			

			</div>

			<div className="ring-text-container-gael" >
			
					
			
			</div>
			

					
{/* 	 */}

				
	
			
			<div id="ring-5-challenge-container"className="challenge-container">
				<img id="gael-challenge-bg" src={gaelChallengeBG} alt="" />
			</div>
	
		</>
			);
}


