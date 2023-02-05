import React, { useState } from 'react';
import './rings1.css';
import bigGlass from '../../images/big-glass.png'
import lens from '../../images/ciorcal-glass.png';
import emerald from '../../images/misc_crystal_new.png'
import pearl from '../../images/stone-soup/misc_crystal_old.png';
import ReactAudioPlayer from 'react-audio-player';
import spark0 from '../../audio/ding0.wav';
import spark1 from '../../audio/ding1.wav';
import spark2 from '../../audio/ding2.wav';
import spark3 from '../../audio/ding0.wav';
import spark4 from '../../audio/ding2.wav';
import about0 from './../../images/About1/0.png'
import about1 from './../../images/About1/pc.png'
import about2 from './../../images/you-see.gif'
import wisp from './../../images/color-square.gif'
import about3 from './../../images/blinding-light.jpg'
import about4 from './../../images/About1/ceist2.png'  //frog.gif'
import about5 from './../../images/field.png'
import circuits from './../../images/About1/computing.png'
import binary from './../../images/About1/computing.png'
import about6 from './../../images/field.png'
import fieldCircle from './../../images/ciorcal-field.png'
import passage from './../../images/overworld/passage.png'
import circleBG from './../../images/ciorcal-glass-bg.png'
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb
} from 'react-circular-input'
import { ThemeProvider } from 'react-bootstrap';
let showTheGlass = true; 
export default function Rings2(props) {

	const [value, setValue3] = React.useState(0);
	
	// const [value, setValue] = React.useState(initialValue);
	const stepValue3 = v => Math.round(v * 10) / 10;
	
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

	
	let gottenRings0 = 0;

	let Ring3AnsEng = [
		` And where are you yourself? (pwd)`,`in a little field called home.`,`What's in the field? (ls)`,
`The UNIX code Kernel was written in 1969, in the USA.),`
, `
Unix is protected by copyright, similarly Windows or Apple`, `In 1991 Linus Torvaled, a person, released a kernel of UNIX-like code into the public domain.`, `
As distinct from The Open Group's UNIX, Microsoft's Windows and Macintosh's Apple Software; Linux operating systems are a free public resource.`, `The sourcecode is maintained by a community.`, `s
`, `
...`, `...An Irish version of this here soon. If you want to jump ahead with the English language instructions here: https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview`, `Backup! If there is anything at all on the computer to be kept, save it now.`, `All data and software will be irretrievably lost when you replace Windows or Apple with Linux.`, `Everything should be backed up x3 on storage devices/cloud before proceeding.`,'',
		'Hup!',
		'God be with you',
		'Who are you yourself?',
		'Where am I?',
		'What is this?',
		'En garde!',
		'How is it going?',
		'Which way are you?',
		'Goodbye'
	]

	let RingAnsEng4 = [
		
		`A metaphor, which is useful, is the desktop`, `Imagine a metaphor, more versatile`, `A half-step between a desktop,`, `and an island.`,
		

	]
	let Ring2AnsEng = [

		`In the Otherworld, a princess is disturbed by a vision`, `Behind a door, no sun.`,
			`An iron key, wielded by a knight.`, `She summons her champion.`,
		 ``, ``,
	]


	let Ring4Ans = [
		`Meafar usáideach is éa, desktop.`,
		`Shamhlaigh meafar nios ilfheidhmeach`,
		`leath-chéim idir desktop,`,
		`agus oileán.`, 
		`Turas i dtreo féinléiriú Gaelach is ea Iron-key.online`,
		 `Fáilte roimh chách.`,
		]
	let Ring2Ans = [
	`I dTír na nÓg, tá tromluí ar ban prionsa...`,
'Taobh cúl an doras, ní beidh griann.',	
 	'Eochair íarann, á beartú ag ridire',
		'',

	
			// `T .`


		`\Seo JSON:`,

`scéalaí an gréasán`,
`{	
	"JSON": "Nodaireacht Oibiachtaí JavaScript"
}`,

`
{"userName":"Pádraiġ"}
`,
`Seo sampla eile:`,
`   {
	"youSay":"foighne",
	"ISay":"fáinne"
}`,



		`Scríobhadh eithne UNIX i saotharlann Bell 1969, sna SAM.`,
		`
		I 1991, scaoíl Linus Torvalds cód eithne  ar an dearadh UNIX.`,
		`Murab ionann UNIX, Windows nó Apple, is foinse oscailte poiblí is ea Linux.`,
'Hup',
		`goirtín an baile.`,
	]
	function reportStepValue3 () {
		alert(showTheGlass);
		console.log(showTheGlass);
		console.log("showTheGlass");

	}
	let isOn = props.isOn;
	return (
		<>
			
			<div className="input-elements-container2">
		<img src={circleBG} id="circleBG" alt="a glass lens" />

			
		<div className="input-elements-container">
				<div className="about-pics-container">
					<img className={value*10 === 0 ? 'about-pics':'hidden'} src={about1} alt="illustration placeholder" />
					<img className={value*10 === 2 ? 'about-pics':'hidden'} src={about5} id="about3b"alt="illustration placeholder" />
					<img className={value*10 === 2 ? 'about-pics':'hidden'} src={about2} id="about3b"alt="illustration placeholder" />
					<img className={value*10 === 3 ? 'about-pics':'hidden'} src={about5}  id="about4" alt="illustration placeholder" />
					<img className={value*10 === 7 ? 'about-pics':'hidden'} src={about4}  id="about4" alt="illustration placeholder" />
					<img className={value*10 === 4 ? 'about-pics':'hidden'} src={about6} alt="illustration placeholder" />
					<img className={value*10 === 7 ? 'about-pics':'hidden'} src={about0} alt="illustration placeholder" />
				</div>
				<div className="about-overlay-container">
					<img className={value*10 === 1 ? 'field':'hidden'} src={fieldCircle} alt="fields with stone walls." />
					<img className={value*10 === 7 ? 'passage':'hidden'} src={passage} alt="Serpant dungeon passage enterance" />


						
				</div>
		
		</div>
	
				<div className="input-elements-container3">
				
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
			</div>			

			<p className='rings1' >{Ring2Ans[value * 10]}</p>


			<h1>{isOn}</h1>
			{isOn ? <img className="bg-glass"src={ bigGlass} alt="tinted overlay to dim background"/>:null}
{isOn ? <p className="rings0Eng">{Ring2AnsEng[value * 10]}</p> : null}
{ localStorage.setItem('freagra1', value * 10)
}
<button id="ring-glass-btn" onClick={props.toggleIsOn
}	><img src={isOn ? pearl : emerald} id="blank" alt="a crystal or precious stone toggle on off button" /></button>
		<div className="lens-container">
		<button className={value*10 === 7 ? 'easca-code_0':'hidden'}>pwd</button>
		<button className={value*10 === 7 ? 'easca-code_1':'hidden'}>ls</button>
		<button className={value*10 === 7 ? 'easca-code_2':'hidden'}>cd</button>


<img src={lens} id="lens" alt="a glass lens" />

		</div>

<div className='dial-container'>

<CircularInput className="dial" value={value}  onChange={v => setValue3(stepValue3(v))}>{}
					<CircularTrack />
			{/* <img  src={avatar} className={value === 0 ? 'hidden':'avatar' } alt="Caniuse battus tv charactéir" />		 */}
				
			<CircularProgress />
					<CircularThumb />
				
			</CircularInput>
</div>
			<div className="button-mash-container">
<button className={value * 10 === 7 ? 'button-mash-ring-0' : 'hidden'} onClick={props.buttonMashClick}>
				
						<img className={value * 10 === 7 ? 'wisp' : 'hidden'}src={wisp} alt="A dancing light that can lead people astray" />
	
				</button>

	</div>
						

		</>)
};


