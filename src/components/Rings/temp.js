import React, { useState } from 'react';
import './rings1.css';
import bigGlass from '../../images/big-glass.png'
import lens from '../../images/ciorcal-glass.png';
import lensBG from '../../images/ciorcal-glass3.png';
import emerald from '../../images/misc_crystal_new.png'
import pearl from '../../images/stone-soup/misc_crystal_old.png';
import ironkey from '../../images/stone-soup/lord-iron-key2.png';
import ReactAudioPlayer from 'react-audio-player';
import spark0 from '../../audio/ding0.wav';
import spark1 from '../../audio/ding1.wav';
import blackripple from '../../images/blackripple.gif';
import tutorial0 from '../../images/tutorials/tutorial0.png';

import spark2 from '../../audio/ding2.wav';
import spark3 from '../../audio/ding0.wav';
import spark4 from '../../audio/ding2.wav';
import banba from './../../images/About1/ceist2.png'
import about0 from './../../images/About1/adaptive-icon.png'
import brightland from './../../images/About1/ceist3.png'
import gold from './../../images/gold.png'
import about1 from './../../images/About1/fi.png'
import about2 from './../../images/you-see.gif'
import wisp from './../../images/color-square.gif'
import about3 from './../../images/blinding-light.jpg'
import about4 from './../../images/About1/ceist2.png'  //frog.gif'
import lasta from './../../images/About1/lasta.png'  //frog.gif'
import about5 from './../../images/About1/Daniel-Maclise.png'
import about9 from './../../images/About1/computing.png'
import circuits from './../../images/About1/computing.png'
import binary from './../../images/About1/computing.png'
import about6 from './../../images/field.png'
import fieldCircle from './../../images/ciorcal-field.png'
import passage from './../../images/overworld/passage.png'
import circleBG from './../../images/ciorcal-glass-bg.png'
import linucsLand from './../../images/About1/backgrounds/background_image.png'
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb
} from 'react-circular-input'
import { ThemeProvider } from 'react-bootstrap';
export default function Rings3(props) {
let showTheGlass = true;
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

	const [value3, setValue3] = React.useState(0);
	
	// const [value, setValue] = React.useState(initialValue);
	const stepValue3 = v => Math.round(v * 20) / 20;
	
	localStorage.setItem('ring0', value * 10);


	
// 	“And what is the wages you’ll be looking for?”

// “The place of a house and garden.”

// “You’ll get that if my journey succeeds with me.”
	
	
	/*
	
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

	
	let Ring3AnsEng = [


		`Long long ago...`,
		`
		According to legend,
		Gaelic people descend
		from an Iberian tribe
		called the Milesians. 
		`,
		`Breogán son of Brath
		son of Bile Galamh Míl Espáine
		had seven sons 
		`,
		`    One of whom
		  was named
		<br/>Amergin <br/>
		of the Bright Knees<span ">*</span><br/>
		Soldier of Spain <br/>
		<br/>
	<h5 >    *Birth of Song  </h5>
		
		`,
		`Amergin 
	   and the Milesians
	   voyaged to the island of
		the Dé Dannan tribe.`,
		`The druids of Dé Danann 
		raised a magical storm
		to keep Amergín’s 
		expedition from reaching land. 
		`,
		`But Amergín had powers of poetry`,
	
		`I am the wind which breaths upon the sea<br/>
	  I am the wave of the ocean<br/>
	  I am the murmur of the billows`,
	
		`I am Stag of Seven Tines<br/>
	  I am a Hawk on a Cliff<br/>
	  I am a beam of the sun<br/>
	  I am the fairest of plants`,
	
		`I am a word of science<br/>
	   I am the point of the lance of battle`,
		`...(I am) a Song on a Spear<br/>
	   an Enchantment of Winds.`
		,
		`The kings of Dé Danann 
	were killed in single combat
	 by the sons of Míl Espáine.`
	
		,
	
		`The Dé Danann 
	retreated into the Earth,
	and for thousands of years 
	Gaelic civilization 
	flourished in Ireland.`
		,
	
		`In <span style="color:white">1169 CE</span>, deposed King Diarmait Mac Murchada solicited Norman Mercenaries to quell rebellion in Leinster.`
		,
		`King Henry II of England used this to declare the conquered cities 
	crown-land. So began 800 years of English rule in Ireland.`
		,
	
		`By 1500 AD, despite centuries of military campaigning,
	English law existed only around Dublin Castle.`
		,
	
		`
	Beseiged Gaelic Italian and Spanish forces were slaughtered at Ard na Caithne in Corca Dhuibhne, by lord Grey de Wilton.`
		,
		`After the 'Grey faith' massacre, Edmund Spencer wrote to Queen Elizebeth, and explained why the Irish kept resisting English rule:`
		,
	
	
		`"Soe that the speach being Irish, 
	the hart must needes be Irishe; 
	for out of the aboundance of the hart, 
	the tonge speaketh"<br/>
	<h6>A Veue of The Present State of Ireland</h6>`
		,
		`Gaelic Ireland's final strongholds fell and as the last Ulster chieftains were forced into exile, So ended the Gaelic order.`,
	
	
		`Spencer was wrong. One's heart can be Irish, though the tongue speaks English. 
	
		`,
		`But when the tongue is Gaelic, what sayeth the heart ?
		
	   
		</p> </span>`,
	
	
	
	
	]


	let Ring3Ans = [


		`Fadó fado...`,
		`Ón treabh Ibírach 'Míl Espáine'
		 a dtagann na Gael,
		 de réir na finscéalíochta. 
		`,
		`Bhí seachtar ag Galamh mac Bile mac Brath Míl Espáine,`,
	
		`File agus draoí dunne den seachtar,<br/> 
		Amergin Glúingel Míl Espáine.`,
	
		`Thóg Amergín ar aistear mara go hOileann na Tuaithe Dé Danann a muintir.`,
	
		`Chas draoithe Dé Danann na Mílaoisigh síar le stoirm dríochta`,
	
		`Ach bhí bua na filíochta ag Amergin...`,
		`<span style="font-family:aonchlo;font-weight: 900;">Am gaeth i m-muir <br/>
	Am tond trethan<br/>
	Am fuaim mara...</span>
	`,
		`<span style="font-family:aonchlo;font-weight: 900;">Am dam seċt ndirend <br/>
	Am séig i n-aill<br/>
	Am dér gréne<br/>
	Am cain lubai...</span>
	`,
	
		`<span style=" font-family:aonchlo;font-weight: 900;">Am bri danae<br/>
	Am bri i fodb fras feoċtu<br/>
	Am dé delbas do ċind codnu...</span>
	`,
		`<span style=" font-family:aonchlo;font-weight: 900;">...Cáinte im gai<br/> 
	cainte gaiṫe.</span>
	`,
	
	`
	Chiúnaigh an stoirm.
	Bris na Míl Espáinaigh 
	ar forsaí Dé Dannan.
	`,
		`Cúlaigh na Túithe 
	agus lonnaigh na Mílaoisigh in Éireann.
	Bin tús cíannta Gaelach, de réir an finscéalíocht.`,
	
		`I <span style="color:palegoldenrod">1169 AD</span>, Lorg Rí theistithe Diarmait Mac Murchada cabhair galamhas Normánach chun éirí amach Laighean a chuir faoi chois.`
		,
		`Tapaidh Anraí II an deis úinéireacht a maíomh ar na ionnaíthe treascartha. Sin mar a thosnaigh 800 blíain Sasannachas in Éireann.`
		,
	
		`In aineoinn fachtasíocht mílata na cheadta blíana,
	Faoí 1500AD, Ní raibh ríal Sassana ach  i bheidhm tímpeal  caisleán Átha Cliath.`
		,
	
		`
	<span style="color:palegoldenrod">1580AD</span> <br/>
	Slad Tiarna Grey de Wilton forsaí Gaelach Idálach agus Spánach i Ard na Caithne in Corca Dhuibhne.`
		,
		`Bhí an file Edmund Spencer i finné an slad. Mínigh sé dá Bhanríonn  :`
		,
	
		`"Soe that the speach being Irish, 
	the hart must needes be Irishe; 
	for out of the aboundance of the hart, 
	the tonge speaketh"<br/>
	<h6>A Veue of The Present State of Ireland</h6>`
		,
		`Briseadh ar daingeannacha na Gael i <span style="color:goldenrod">1607AD</span>.
		Díbríodh na Taoisaigh, 
		agus bin an ord ársa Gaelach 
	   briste ar deireadh.`,
	
		`In aineoin Spencer, bualainn croithe Gaelach fós.`,
		`Nuair is í Gaeilge an teanga, cad a deir do croí?`
	
	
			// `T .`


	
	]
	function reportStepValue3 () {
		alert(showTheGlass);
		console.log(showTheGlass);
		console.log("showTheGlass");

	}

	function openHeroSelect() { 
		alert();

	}
	let isOn = props.isOn;

	function endAnimation() {
		setTimeout(function () {
			
		 },200)
	document.getElementById('pearl').style.animation="none"
	}


	return (
		<>
			
		<div className="linux-land-container">
					<img className={value * 10 === 4 ? 'about-pics' : 'hidden'} src={linucsLand} id="linux-land" alt="illustration placeholder" />
				</div>

					<div className="linux-land-container">

					<img className={value*10 === 5 ? 'about-pics':'hidden'} src={linucsLand}  id="linux-land-down" alt="illustration placeholder" />
				</div>



			 <div className="input-elements-container0">

			
		<div className="input-elements-container3">
				
				{/* <img className={value * 10 === 2 ? 'about-pics' : 'hidden'} src={about5} id="about3c" alt="illustration placeholder" /> */}
			</div>

				<div className="input-elements-container">
{/* 
					<div className="about-gold-container"> 
					<img className={value*10 === 0 ? 'about-pics':'hidden'} src={gold} alt="desktop folder and cursor" />
					<img className={value*10 === 1 ? 'about-pics-spin':'hidden'} src={gold} alt="desktop folder and cursor" />
					<img className={value*10 === 2 ? 'about-pics':'hidden'} src={gold} alt="desktop folder and cursor" />
					<img className={value*10 === 3 ? 'about-pics':'hidden'} src={gold} alt="desktop folder and cursor" />
				</div> */}
					
					<div className="about-pics-container">

				<img className={value*10 === 5 ? 'fade-in-slow':'hidden'} src={banba} alt="a digital peninsula" />
				<img className={value*10 === 6 ? '':'hidden'} src={banba} alt="a digital peninsula" />
				<img className={value*10 === 7 ? '':'hidden'} src={banba} alt="a digital peninsula" />
				<img className={value*10 === 8 ? '':'hidden'} src={banba} alt="a digital peninsula" />
				<img className={value*10 === 9 ? '':'hidden'} src={banba} alt="a digital peninsula" />
						
					{/* <img className={value*10 === 1 ? 'about-pics':'hidden'} src={about1} alt="desktop folder and cursor" /> */}
						
						{/* <img className={value * 10 === 2 ? 'about-pics' : 'hidden'} src={fieldCircle} id="about3b" alt="illustration placeholder" />
						
					 */}
					 {/* <img className={value*10 === 2 ? 'about-pics':'hidden'} src={about1} alt="desktop folder and cursor" /> */}
						
						
					{/* <img className={value*10 === 2 ? 'about-pics':'hidden'} src={about5} id="about3b"alt="illustration placeholder" /> */}
			
						{/* <img className={value * 10 === 3 ? 'about-pics' : 'hidden'} src={about9} id="about4" alt="illustration placeholder" /> */}
						
					{/* <img className={value*10 === 7 ? 'about-pics':'hidden'} src={about4}  id="about4" alt="illustration placeholder" /> */}
					{/* <img className={value*10 === 4 ? 'about-pics':'hidden'} src={about6} alt="illustration placeholder" /> */}
					{/* <img className={value*10 === 7 ? 'about-pics':'hidden'} src={about0} alt="illustration placeholder" /> */}
				
					<div className='fader'>
			<img rel="preload" src={tutorial0} className={value*10 === 0 ? 'avatar':'hidden' } id="tutorial0" alt="a spinning arrow circle inviing user input" />
			</div>
					</div>
				<div className="about-overlay-container">
			

						{/* <img className={value * 10 === 7 ? 'passage' : 'hidden'} src={passage} alt="Serpant dungeon passage enterance" /> */}


						<img className={value * 10 === 8 ? 'about-pics' : 'hidden'} src={ironkey} id="iron-key-linux" alt="A figure entirely clad in armour." />
						
				</div>
		
		</div>
	

				<div className={value * 10 === 4 ? "linux-lens-container" : "hidden"}>
					<img rel="preload" className={value * 10 === 4 ? "map-lens" : "hidden"} src={lensBG} alt="" />
					
				</div>
				
				
				<div className={value * 10 === 3 ? "linux-lens-container-fade-in" : "hidden"}>
					<img rel="preload" className={value * 10 === 3? "map-lens" : "hidden"} src={lensBG} alt="" />
					
				</div>
				
				
				<div className={value * 10 === 5 ? "linux-lens-container" : "hidden"}>
				<img rel="preload" className={value * 10 === 5 ? "map-lens" : "hidden"} src={lensBG} alt="" />
				</div>

				<div className={value * 10 === 6 ? "linux-lens-container-fade" : "hidden"}>
				<img rel="preload" className={value * 10 === 6 ? "map-lens" : "hidden"} src={lensBG} alt="" />
				</div>
					
			<ReactAudioPlayer src={value*10 === 1 ? spark0: null} autoPlay />
			{/* <ReactAudioPlayer src={value*10 === 2 ? spark1: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 3 ? spark2: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 4 ? spark3: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 5 ? spark2: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 6 ? spark1: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 7 ? spark4: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 8 ? spark0: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 9 ? spark0: null} autoPlay /> */}




{ localStorage.setItem('freagra1', value * 10)
}

		<div className="lens-container">
		{/* <button className={value*10 === 99 ? 'easca-code_0':'hidden'}>pwd</button>
		<button className={value*10 ===99 ? 'easca-code_1':'hidden'}>ls</button>
		<button className={value*10 ===99 ? 'easca-code_2':'hidden'}>cd</button> */}

		</div>			 

<img src={lens} id="lens" alt="a glass lens" />

		</div>

		
			<div className="input-elements-container2">
						
					
					<img className={value * 10 === 2 ? 'bright' : 'hidden'} src={lasta}
					alt="a circle of bright light." />
					<img className={value * 10 === 3 ? 'banba2' : 'hidden'} src={brightland} alt="a bright land." />
			</div>
			<div className="input-elements-container4">
			
					<img className={value * 10 === 3 ? 'bright-out' : 'hidden'} src={lasta} alt="a circle of bright light."/>
			</div>
			
				
				<div className="input-elements-container4">

				{/* <img className={value*10 === 4 ? 'ripple':'hidden'} src={blackripple} alt="a digital peninsula" /> */}
</div>		
{isOn ? <img className="bg-glass"src={ bigGlass} alt="tinted overlay to dim background"/>:null}
{isOn ? <div className="rings0Eng" dangerouslySetInnerHTML= {{__html:Ring3AnsEng[value * 10]}}></div> : null}
<div className='dial-container'>

<CircularInput className="dial" value={value}  onChange={v => setValue3(stepValue3(v))}>{}
					<CircularTrack stroke="rgb(130,110,0)"
					strokeWidth={'3px'}
					/>
			{/* <img  src={avatar} className={value === 0 ? 'hidden':'avatar' } alt="Caniuse battus tv charactéir" />		 */}
				
					<CircularProgress
					border="rgba(255,250,5,0)"
						stroke="rgba(195,150,5,0.8)"
						
						strokeWidth={'3px'}/>
					<CircularThumb  fill="rgba(255,255,255,1)"

					stroke="rgba(180,180,180,1)" 	
							strokeWidth={'3px'}/>
				
			</CircularInput>
			</div>	
			
			<button id="pearl"  onClick={props.toggleIsOn
			} onTouchEnd={ endAnimation}	><img src={isOn ? pearl : emerald} id="blank" alt="a crystal or precious stone toggle on off button" /></button>
			
<div className="button-mash-container">
				<button className={value * 10 === 9 ? 'button-mash-ring-0 circle' : 'hidden'}onClick={() => props.handleInputSelect('gamepad')} >
				
						{/* <img className={value * 10 === 9 ? 'wisp' : 'hidden'}src={wisp} alt="A dancing light that can lead people astray" />
	 */}
				</button>

				<button className={value * 10 === 8 ? 'button-mash-ring-0 circle' : 'hidden'}onClick={() => props.handleInputSelect('gamepad')} >
				
				{/* <img className={value * 10 === 8 ? 'wisp' : 'hidden'}src={wisp} alt="A dancing light that can lead people astray" /> */}

				</button>
				<button className={value * 10 === 7 ? 'button-mash-ring-0 circle' : 'hidden'}onClick={() => props.handleInputSelect('gamepad')} >
				
						{/* <img className={value * 10 === 7 ? 'wisp' : 'hidden'}srcn={wisp} alt="A dancing light that can lead people astray" /> */}
	
				</button>
				<button className={value * 10 === 6 ? 'button-mash-ring-0 circle' : 'hidden'}onClick={() => props.handleInputSelect('gamepad')} >
				
						{/* <img className={value * 10 === 6 ? 'wisp' : 'hidden'}src={wisp} alt="A dancing light that can lead people astray" /> */}
	
				</button>





			</div>
			
<div className='rings1' dangerouslySetInnerHTML= {{__html:Ring3Ans[value * 10]}}  ></div>
			
			</>)
};


