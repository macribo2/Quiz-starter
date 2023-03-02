import Overworld from '../../components/overworld/overworld';
import shine from '../../images/a-btn.png'
import React, { useState } from 'react';
import Sparkles from 'react-sparkle'
import ding3 from '../../audio/ding3.wav'
import SettingsMenu from '../../components/settings-menu/settings-menu'
import glass from '../../images/big-glass.png';
import dirpad from '../../images/dirpad.png';
import lens from '../../images/ciorcal-glass.png';
import portrait from '../../images/vert-mode.png'
import gradient from '../../images/gradient2.png';
import darkGreenFields from '../../images/ciorcal-glass4.png';

import avatar1 from '../../images/players/spéirbhean0.gif';
import avatar2 from '../../images/players/douglas.png';
import avatar3 from '../../images/players/fianna0.png';
import avatar4 from '../../images/players/gotach0.png';
import avatar5 from '../../images/players/rógaire0.png'
import avatar6 from '../../images/players/diamhraí0.gif';
import avatar7 from '../../images/players/seanchaí0.png';
import avatar8 from '../../images/players/pooka.png';
import avatar9 from '../../images/players/poet.png';
import emerald from '../../images/misc_crystal_new.png'
import pearl from '../../images/stone-soup/misc_crystal_old.png';
import Rings0 from '../../components/Rings/Rings0'
import bgDark from '../../images/black.png';

import jump from '../../audio/171697__nenadsimic__menu-selection-click.wav';
import chat from '../../audio/171697__nenadsimic__menu-selection-click.wav';
import chatShort from '../../audio/171697__nenadsimic__menu-selection-click.wav';
import theme0 from '../../audio/171697__nenadsimic__menu-selection-click.wav';
import spark0 from '../../audio/ding0.wav';
import spark1 from '../../audio/sparkle-b.wav';
import spark2 from '../../audio/sparkle-c.wav';
import spark3 from '../../audio/sparkle-d.wav';
import spark4 from '../../audio/sparkle-e.wav';
import Select from '../../audio/171697__nenadsimic__menu-selection-click.wav';
// import jam from '../../audio/51241__rutgermuller__8-bit-gabber-piece.wav'
import useScreenOrientation from 'react-hook-screen-orientation';
import hill from '../../images/rainy-hill1.png';
import hills from '../../images/newbg4town.png';
import Stones from '../../images/stones1.png';


import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb
} from 'react-circular-input'
import phone1 from '../../images/phone-0.png';
import black from '../../images/black.png'
import tinkle from "../../audio/tinkle.wav"
import tinkle1 from "../../audio/dink.wav"
import stars from '../../images/stars.gif';
import ReactAudioPlayer from 'react-audio-player';
import '../../fonts/urchlo.ttf';
import Silken from '../../components/silken/silken.jsx'; 
import EnterSilken from '../../components/silken/EnterSilken'; 
import GamePad from '../../components/game-pad/game-pad.jsx'; 
import AandB from '../../components/silken/silken.jsx';
import distantTown from '../../images/newbg2town.png';

import wisp from '../../images/color-square.gif'
window.scrollTo(0, 1);



let domReady = (cb) => {
	document.readyState === 'interactive' || document.readyState === 'complete'
	  ? cb()
	  : document.addEventListener('DOMContentLoaded', cb);
  };
  
  domReady(() => {
	// Display body when DOM is loaded
	document.body.style.visibility = 'visible';
  });
const ComponentWithScreenOrientation = () => {
	const screenOrientation = useScreenOrientation()
	
	return (
		<p>Screen orientation is: {screenOrientation}</p>
	)
}
let heroNames = ['', 'a Níamh', 'a Ḋubhghlas', 'a Oisín', 'a mháistir', 'a rógaire', 'a Thaoiseach', 'Fionn', 'a chara', 'file'];
let heroNamesEng = ['','o Níamh', 'Douglas', 'o Oisín','o master', 'you rogue','o Chieftain','Fionn','o friend','poet'];

export default function App() {
	//for rotary dial values:
	
	const stepValue = v => Math.round(v * 10) / 10
	const stepValue2 = v => Math.round(v * 10) / 10
	
	const [value, setValue] = useState(0)
	let chosenPortrait = 0;	
	let gotten = 0;
	let gottenRing0 = 0;
	
	
	const [gender, setGender] = useState('male');
	const [musicPlay, playMusic] = useState("-")
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [showScore, setShowScore] = useState(false);
	const [showGlass, setShowGlass] = useState(0);
	const [isOn, toggleIsOn] = useToggle();
	const [showSettings, setSettings] = useState(1);
	let hints = [``,
		``, `It is you!`, ``, ``, ``, ``, `I am going to Doon-na-shee (the fortress of the fairies) to-night, to play music for the good people. If you come with me `
		+ heroNamesEng[gotten] + `, you’ll see fine fun.`, `I am going to Doon-na-shee (the fortress of the fairies) to-night, to play music for the good people. If you come with me ` + heroNamesEng[localStorage.getItem('portrait')] + `, you’ll see fine fun.`, ``, ``, ``,]
	let hintsAnswersA = [``,``,``,``,``,``,``,``];
	let hintsAnswersB = [``,``,``,``,``,``,``,``,``];
	let hintsAnswersC = [``,``,``,``,``,``,``];
	let hintsAnswersD = [``, ``, ``, ``, ``];
	
	
	

	const handleInputSelect = (UI) => { 
		
		console.log(UI);
		setSettings(0)


	}
	function useToggle(initialValue = false) {
		
		const [value, setValue] = React.useState(initialValue);
		const toggle = React.useCallback(() => {
		  setValue(v => !v);
		}, []);
		localStorage.setItem("isOn", isOn)
		console.log(localStorage.getItem('isOn'))
		return [value, toggle];
	  }

	const questions = [
	
		{
			questionText: '',
			answerOptions: [
				// { answerText: 'muachta', isCorrect: true, storyPath: 'A' },


			],
		},
		{
			questionText: '',
			answerOptions: [
				
			],
			
		},
		{
			questionText: '',
			answerOptions: [
				
			],
			
		},
		{
			questionText: '',
			answerOptions: [
				
			],
			
		},		{
			questionText: '',
			answerOptions: [
				
			],
			
		},		{
			questionText: '',
			answerOptions: [
				
			],
			
		},
		{
			questionText: 'Roghnaigh Tánaiste, ' + heroNames[localStorage.getItem('portrait')]+'. ',
			answerOptions: [
				
			],
			quesionTextEng:'//?, '+ heroNames[localStorage.getItem('portrait')]+'.'
		},
		{
			questionText: 'Fáilte, ' + heroNames[localStorage.getItem('portrait')]+'.',
			answerOptions: [
				{ answerText: 'cá bhfuil mé?', isCorrect: false },
				{ answerText: 'Cad é seo?', isCorrect: false },
				{ answerText: '...', isCorrect: true },
			],		
				
			
		},
		{
			// tosníonn an scéal anseo. 
			questionText: 'I dtearmaí ríomharachta, bíonn rud fíor, nó bréagach.',
			answerOptions: [
				
			],
			
		},
		{
			questionText: 'Oscailte, nó dúnta.',
			questionText: '',
			answerOptions: [
				
			],
			
		},
			{
			questionText: 'Lán, nó folamh',
			answerOptions: [
				
			],
			
		},
		{
			questionText: 'Dearfach, nó diúltach',
			answerOptions: [
				
			],
			
		},


		{
			questionText: 'Sin é, an comhéad dénartha.',
			answerOptions: [	
			],
		},
		{
			questionText:'Cé mhaith dom é, ní bheidh mé ann.',
			answerOptions: [
			]
		},
		{
			questionText: '',
			answerOptions: [
			
			],
		},
		{
			questionText: 'Lorem Ach tá tír mhór chumasach i gcóngaracht di agus tá fhios ag na	',
			answerOptions: [
				// { answerText: 'Clé', isCorrect: false },
				// { answerText: 'Deas', isCorrect: false },
				// { answerText: 'Soir', isCorrect: false },
				// { answerText: 'Síos', isCorrect: true },
			],
		},
		{
			questionText: ', tá sí bocht agus ní féidir léi postanna go leor a sholáthar dá muintir ar fad',
			answerOptions: [
				{ answerText: 'Clé', isCorrect: false },
				{ answerText: 'Deas', isCorrect: false },
				{ answerText: 'Soir', isCorrect: false },
				{ answerText: 'Síos', isCorrect: true },
			],
		},
		{
			questionText: 'Lorem Seo chugaibh scéal faoi oileán iathghlas taithneamhach a chuireann?',
			answerOptions: [ 
				{ answerText: ' cumha agus croí trom', isCorrect: false },
				{ answerText: ' ar a chlanna más gá dóibh ', isCorrect: false },
				{ answerText: 'imeacht thar lear. ', isCorrect: false },
				{ answerText: 'Cé gur breá álainn an tír í', isCorrect: true },
			],
		},
		{
			questionText: '',
			answerOptions: [
				
			],
			
		},
		{
			questionText: '',
			answerOptions: [
				
			],
			
		},
		{
			questionText: '',
			answerOptions: [
				
			],
			
		},
		{
			questionText: '',
			answerOptions: [
				
			],
			
		},
		{
			questionText: '',
			answerOptions: [
				
			],
			
		},
		{
			questionText: '',
			answerOptions: [
				
			],
			
		},
		{
			questionText: '',
			answerOptions: [
				
			],
			
		},
		
		{
			questionText: '',
			answerOptions: ['cá bhfuil mé?','cad é seo?','"..."'
			]	},
			{
				questionText: '',
				answerOptions: [
				]	},
			
		{
			questionText: '',
			answerOptions: [
			]	},
		{
			questionText: '',
			answerOptions: [ 	]	
		},
		{
			questionText: '',
			answerOptions: [
				
			],
		},
		{
			questionText: 'Beidh aonach amárach i gContae an Chláir.',
			answerOptions: [
				

			],
		},
		{
			questionText: 'Beidh aonach amárach i gContae an Chláir.',
			answerOptions: [
				
			],
		},
	];
	const[isFadedOut, setIsFadedOut] = useState(true)
	const[isHintFadedOut, setIsHintFadedOut] = useState(true)

const[score, setScore] = useState(0)
	const handleOverlayButtonClick = (showGlass) => {
		if (showGlass === 0) {
		
			setIsHintFadedOut(false)
			setTimeout(function () {
				setIsHintFadedOut(true)
			setTimeout( ()=> { setShowGlass(0) },6000)
				
		},1000)
	
			setShowGlass(1);
			console.log("hello" + {showGlass});
		}
		else {
			setShowGlass(0);
			console.log("hello" + showGlass);
		}
	}


	const handleMenuButtonClick = (showSettings) => {
		if (showSettings === 0) {
			setSettings(1);
			console.log("hello" + {showGlass});
		}
		else {
			setSettings(0);
			console.log("hello" + showGlass);
		}
	}
	const runEndPart1 = () => { 
		return (
	
			{/* <ReactAudioPlayer src={currentQuestion === 4 ? theme0 : null} autoPlay /> */}
			
)

	}
		const runOnName = (waitTime) => {

		setTimeout(function () {
		
			
		
		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
		}, waitTime);
	} 
	

	
	const runOnStart = () => { 
		localStorage.setItem("pucaEng", '');
		setTimeout(function () {
			setScore(score+1)	

		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else { setShowScore(true)}
	}, 100)
	}
	const incrementScore = () => { 
		// setScore(score++)
		setScore(score+1)
		console.log(score)
	}
	const storyTimer = () => {
		
		setInterval(function () {
			// alert(score)
if (score === 1){
			
		}
		}, 3000)
	}
	const handleAnswerButtonClick = (isCorrect, storyPath) => {
		setIsFadedOut(false)
		// alert('handleAnswer')
		setTimeout(function () {
			setIsFadedOut(true)
			
			if (isCorrect) {
				setScore(score + 1)
			}
			localStorage.setItem('portrait', value * 10);

			const nextQuestion = currentQuestion + 1;
			setCurrentQuestion(nextQuestion);
			
		}, 50)
		console.log("currentQuestion" + currentQuestion)
		console.log("value:" + value)
		return (

			<ReactAudioPlayer src= {ding3}  autoPlay />
			
		)
	}
	const buttonMashClick = (isCorrect, someVal) => { 
		
		function myMove() {
			var id = null;
			var elem = document.getElementById("holder");   
			var pos = 0;
			clearInterval(id);
			id = setInterval(frame, 800);
			function frame() {
			  if (pos == 350) {
				clearInterval(id);
			  } else {
				pos = pos+32; 
				elem.style.top = pos + 'px'; 
				// elem.style.left = pos + 'px'; 
			  }
			}
		  }
		myMove();  
if(value!=0){
		setIsFadedOut(false)
		setIsFadedOut(true)

		
		localStorage.setItem('portrait', value * 10);
		gotten = localStorage.getItem('portrait');

		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else { setShowScore(true)}
		console.log("currentQuestion" + currentQuestion)
		console.log("value:" + value)
	}
	}

	const buttonMash2Click= (isCorrect, someVal) => { 
		setIsFadedOut(false)
		setIsFadedOut(true)

			console.log(someVal)
		
	
		gottenRing0 = localStorage.getItem('ring0');

		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else { setShowScore(true)}
		console.log("currentQuestion" + currentQuestion)
		console.log("value:" + value)
	
	}

	const handleRingfortButtonClick = (isCorrect) => { 
	
		if (isCorrect) { 
		setScore(score+1)		}

		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else { setShowScore(true)}
	}

	const handleFieldButtonClick = (isCorrect) => { 
	
	
		
		if (isCorrect) { 
		setScore(score+1)		}

		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else { setShowScore(true)}
	}
	let callIt = () => { }
//setup init appearance:
	
	let getFlatValue = (val) => { 
		return val*10
	}


	let choiceRing2Eng = [`Go immediatly North`,`Wait a minute`,`Walk East/right`, `Run West/back`, `Leave South`,`Leap to Dalky in a single bound`,'',`Go immediatly North`,`Wait a minute`,`Walk East/right`, `Run West/back`, `Leave South`,`Leap to Dalky in a single bound`,'',`Go immediatly North`,`Wait a minute`,`Walk East/right`, `Run West/back`, `Leave South`,`Leap to Dalky in a single bound`,'',`Go immediatly North`,`Wait a minute`,`Walk East/right`, `Run West/back`, `Leave South`,`Leap to Dalky in a single bound`,'',]
	let choiceRing2 = [``,`Fan nóméad`,`Las Solas`,`Iniúchadh féin`,`"Cá bhfuil mé?"`,`Siúl soir`, ,``,`Rith síar`,`Léim go Deilg Inis in aon preab amháin`,'rogha',`Las Solas`,`Imigh láithreach ó thuaidh`]
	let choiceRingEng = [
	``,
		`Golden-headed Niamh`,
		`
		 The Pleasant Little Branch`,
		`"Young Deer", greatest poet of Ireland, warrior of the Fianna`,
		`The Dark One`,
		`Billy the Kid`,
		`The Vampire Chieftain`,
		`Legendary warrior, a seer and a poet`,
		`A "pooka," a fairy, a sprite, a hobgoblin`,
		`Fedelm the poet`,
		``
	]

	

let thePucaOf = localStorage.getItem('pucaEng')
	
	let choiceRing = [
		`	`,
		`Niamh Cinn-Óir`,
		`An Craoibhín Aoibhinn`,
		`Oisín`,
		`Donn Fírinne`,
		`Liam Mac Cárthaigh`,
		`Abhartach`,
		`Fionn Mac Cumhail`,
		`Púca`,
		`Fedelm an File`
		
		
	]
	let costume;
	let costumes = [
		'silken', 'elf', 'ogre', 'faun'];
	function randCostume() { 
		let randCostId = Math.floor(Math.random() * costumes.length);
		costume = costumes[randCostId]
		localStorage.setItem('costume',costume)
		
	}


	let dirpadHandler = () => {
		toggleShowOverworld(true)
	}
	

	let checkFerna = () => {
		alert(localStorage.getItem('visitedFerna'))
		if (localStorage.getItem('visitedFerna') === "true") { alert() }
		const [showOverworld, toggleShowOverworld] = useState(false)
	}
	const [showOverworld, toggleShowOverworld] = useState(false)

	return (<>
		{ checkFerna}
		
		<img src={bgDark} className="black-bg" alt="black"/>
		<div className="hesitate">
			<img rel="preload" src={distantTown} className="distant-town" alt="distant town large gif" />
		

		<img id="portrait" rel="preload" src={ portrait}></img>
		<button id={currentQuestion === 7 || currentQuestion === 0 ? "hidden" : "toggle-glass-btn"} onClick={toggleIsOn} ><img src={ isOn ?pearl:emerald} id="blank" alt="a crystal or precious stone toggle on off button" /></button>


			{currentQuestion === 1 ? <>
				
				<div className="input-elements-container">
				
					<img rel="preload"src={lens} id="lens" alt="a glass 	" />
				</div>
				<div className="input-elements-container">

				<CircularInput className="dial" value={value} onChange={v => setValue(stepValue(v))} >{ }
						<CircularTrack 
						stroke="rgba(150,200,0)"
						strokeWidth={'3px'}
						/>
						<CircularProgress
							border="rgba(255,250,5,0)"
							stroke="rgba(195,150,5,0.8)"
						strokeWidth={'3px'}/>
						<CircularThumb fill="rgba(135,5,2)"
							
						strokeWidth={'3px'}
					stroke="rgba(180,180,180,1)" 
							
						>
						
						</CircularThumb>
					</CircularInput>
			</div>
			
				<img rel="preload" src = {gradient}className="gradient" alt="gradiate to black" />

					<p className='dial-text' x={100} y={100} textAnchor="middle" dy="0.3em" fontWeight="bold"> {choiceRing[value * 10]}{ value === 0 || value === 10? null:  <Sparkles className="sparkles"
      color="yellow"
      count={28}
      minSize={5}
      maxSize={14}
      overflowPx={35}
      fadeOutSpeed={10}
					flicker={true}
					
				/>}</p>

				<div className="input-elements-container">
			
				<div id="buttonmash" value={value} onClick={(value) => buttonMashClick(true, value)}>
				
					
					</div>
					
				</div>
				<div className="input-elements-container">
{/* 					show wheel of fortune when puca selected
				{value * 10 === 8 ? <Fortuna currentQuestion={ currentQuestion} handleAnswerButtonClick={handleAnswerButtonClick} /> : null}
				 */}
				</div>
			</> : null}

			<img id="stars" rel="preload" src={stars} className="question-img" alt="wheeling starfield" />		

				
			{showSettings ? <SettingsMenu 
				incrementScore={incrementScore} tallyX={0} avatar={localStorage.getItem('portrait')} whereAmI="geaga" isOn={isOn} heroName={heroNames[localStorage.getItem('portrait')]} heroNameEng={ heroNamesEng[localStorage.getItem('portrait')]}
				toggleIsOn={toggleIsOn}  showSettings={showSettings} handleInputSelect={handleInputSelect} />
						
						: null}
			{showOverworld === true ? <>
				<Overworld toggleIsOn={toggleIsOn} storyTimer={storyTimer} incrementScore={incrementScore} tallyX={0} avatar={localStorage.getItem('portrait')} whereAmI="geaga" isOn={isOn} heroName={heroNames[localStorage.getItem('portrait')]} heroNameEng={heroNamesEng[localStorage.getItem('portrait')]} />
			
			{showScore ? (
				<div className='score-section'>scór: { score } as {questions.length}</div>
			) : (
				<>
						<div className='question-section'>
					
						<div className='question-count'> 		
							</div>
							{/* <img src={ gradient} className="gradient"/> */}
							<div className='question-text'>{ questions[currentQuestion].questionText}</div>

						</div>
						
						<div className={isFadedOut ? 'answer-section slow-fade-in' : 'answer-section fadedOut'} >
							{questions[currentQuestion].answerOptions.map((answerOption, index) => (<button key={index}
								onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
								
							>{answerOption.answerText}</button>))}
					</div>
					<ReactAudioPlayer src={currentQuestion === 8 ? chatShort: null} autoPlay />
				</>
			)}
			</> : null}
			{showOverworld===false? <div className='app' >

		
			{/* <ReactAudioPlayer src={currentQuestion === 0 ? theme0 : null} autoPlay /> */}
			

			<ReactAudioPlayer src={value*10 === 1 ? spark0: null} autoPlay />
			{/* <ReactAudioPlayer src={value*10 === 2 ? spark1: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 3 ? spark2: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 4 ? spark3: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 5 ? spark4: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 6 ? spark1: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 7 ? spark2: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 8 ? spark3: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 9 ? spark0: null} autoPlay /> */}
			{/* <ReactAudioPlayer src={currentQuestion === 2 ? Select: null} autoPlay />
			<ReactAudioPlayer src={currentQuestion === 4 ? jump : null} autoPlay />
			<ReactAudioPlayer src={currentQuestion === 5 ? chat : null} autoPlay />
			 */}
			{/* <ReactAudioPlayer src={isOn === false ? tinkle : null} autoPlay /> */}
			<ReactAudioPlayer src={isOn === true ? tinkle1: null} autoPlay />
			<img id="app-bg" src={black} className="question-img app-bg-blackripple" alt="black bg." />		
				
			


			{/* <img src={door} className="door" alt="closed stronghold door." /> */}
			{/* <div className="fog" alt="fog"></div> */}
			
			{/* <img src={distantFortShadow} className={currentQuestion < 1 ? "index-distant-fort" : "index-distant-fort slow-fade"} alt="distant fort on peninsula " /> */}
			<div className='field-container'>
				<img src={hills} rel="preload" className="hill-fields" alt="a rough circle of stones where fadó fadó was a moment ago" />
			
				
			<ReactAudioPlayer src={currentQuestion === 9? theme0 : null} autoPlay />
				</div>
			{currentQuestion === 9 ? () => {setTimeout(() => {
				
			runOnName(1000)}, 1000); }:null}
			 {/* <img src={ShadowFields} className={currentQuestion < 1 ? "index-shadow-fields" : "index-shadow-fields slow-fade"} alt="distant fort on peninsula " /> */}
			{/* <img src={ hill} className="hill"alt="rainy hill shadow-overlay " /> */}

			{/* <img src={ Shadowhill}  className={currentQuestion < 1 ? "index-shadow-hill" : "index-shadow-hill slow-fade"}alt="rainy hill shadow-overlay " /> */}
			{/* <img src={ geagaFace} className="geaga-face" alt="skull bedecked fairy tree" />
			<img src={ geagaShadow} className={currentQuestion < 1 ? "index-geaga-shadow" : "geaga-face geaga-fade"}alt="rainy hill shadow-overlay " />
			 */}
			{/* a small fairy ring on a rainy night. An app menu and point of return. */}

		<img id="question-img"  rel="preload" className = 	
			{currentQuestion >= 101 ?  		"question-img":"hidden"  } src={hill} alt="A rainy hilltop loose circle of stones" />
			{/* <img id="question-img" src={bg3} className={currentQuestion >= 8 ? "question-img" : "hidden"} alt="must have alt" /> */}
		 
			
			{/* HINT: replace "false" with logic to display the
      score when the user has answered all the questions */}
			

			{/* <div className= "field-ringfort-menu">
			<button id={currentQuestion === 2 ? "field" : "hidden"}onClick={() => handleFieldButtonClick()} > <img src={field} alt="a small grassy field"/></button >
			<button className={currentQuestion === 2 ? "ringfort" : "hidden" } onClick={() => handleRingfortButtonClick()} > <img src={hill} alt="image of a circle of stones on top of a hill." /></button >
			</div> */}
			{/* { currentQuestion >= 9 ? <Geaga/>:null} */}

			{ currentQuestion === 4? randCostume():null}
			{currentQuestion === 4 ? < EnterSilken /> : null}
			{currentQuestion === 5 ? < Silken /> : null}
			{currentQuestion === 6 ? < Silken /> : null}
			{currentQuestion === 7 ? < GamePad handleAnswerButtonClick={handleAnswerButtonClick} /> : null}
			{value * 10 === 8 && currentQuestion===1	? <div id='button-container'>
					<button id="btn-a2" onClick={handleAnswerButtonClick}><h2 id="btn-txt">A</h2></button></div>:null}
					
			{currentQuestion === 8 ? < GamePad handleAnswerButtonClick={handleAnswerButtonClick} /> : null}

			{ currentQuestion === 7 ? < AandB />:null }
			{currentQuestion === 7? < Silken /> : null}
			{currentQuestion === 8? < Silken currentQuestion={currentQuestion} /> : null}
			{currentQuestion === 9? < Silken currentQuestion={currentQuestion} /> : null}
			{currentQuestion === 10 ? < Silken currentQuestion={currentQuestion} /> : null}
			
		  
			

			{currentQuestion === 6 ? < Rings0 toggleIsOn={toggleIsOn} isOn={ isOn} isFadedOut={ isFadedOut}  buttonMashClick={buttonMash2Click} /> : null}

			{/* <button id="toggle-settings-btn" onClick={setSettings}	><img src={blank} id="blank" alt="transparent square" /></button> */}

			
			{/* <div className="linux-lens-container" >
					<img rel="preload" className="map-lens" src={darkGreenFields} alt="" />
					
				</div> */}
			<img id="fields-lens" rel="preload" src={darkGreenFields} className="question-img" alt="dark green fields lens" />		

			
			 
				{isOn ? (<div id="glass">

				<p className={currentQuestion === 1 ? "choice-ring-0-hint" : "hidden"}>{choiceRingEng[value * 10]}</p>
				<p id="hints" className={isFadedOut ? 'fadedIn' : ' fadedOut'} >{hints[currentQuestion] }</p>
				<p className={isFadedOut ? 'fadedIn hints' : ' fadedOut hints'}  id="hintsA">{hintsAnswersA[currentQuestion] }</p>
				<p className={isFadedOut ? 'fadedIn hints' : ' fadedOut hints'}id="hintsB" >{hintsAnswersB[currentQuestion] }</p>
				{/* <p className="hints" id="hintsC">{hintsAnswersC[currentQuestion]}</p>
				 */}
				{/* <p className="hints" id="hintsD">{hintsAnswersD[currentQuestion] }</p> */}
				{/* <h2 id="pOf"> {thePucaOf}</h2>  */}


< img  src={glass} className="question-img" rel="preload" id="glass-img" alt="glass bg for translucent overlay effect." />	


		
				</div>) : null}
			
				<div id="holder" className="avatar-holder" >
					
						
			<img rel="preload" src={avatar1} className={value*10 === 1 ? 'avatar':'hidden' } id={currentQuestion ===10? "avatar":null } alt="a  an rpg style playable character" style={currentQuestion ===9?{ animation: "lower-fields 3s forwards" }:null}/>		
			<img rel="preload" src={avatar2} className={value*10 === 2 ? 'avatar':'hidden' } id={currentQuestion ===10? "avatar":null } alt="a  an rpg style playable character" style={currentQuestion ===9?{ animation: "lower-fields 3s forwards" }:null}/>		
			<img rel="preload" src={avatar3} id={currentQuestion ===10? "leap-me":null } className={value * 10 === 3 ? 'avatar' : 'hidden'} alt="a of an rpg style playable character" style={currentQuestion ===9?{ animation: "lower-fields 3s forwards" }:null}/>
			<img rel="preload" src={avatar4}id={currentQuestion ===10? "leap-me":null } className={value *10=== 4 ? 'avatar':'hidden' } alt="a  of an rpg style playable character" style={currentQuestion ===9?{ animation: "lower-fields 3s forwards" }:null}/>
			<img rel="preload" src={avatar5}id={currentQuestion ===10? "leap-me":null } className={value *10=== 5 ? 'avatar':'hidden' } alt="a of an rpg style playable character" style={currentQuestion ===9?{ animation: "lower-fields 3s forwards" }:null}/>
			<img rel="preload" src={avatar6}id={currentQuestion ===10? "leap-me":null } className={value *10=== 6 ? 'avatar':'hidden' } alt="a of an rpg style playable character" style={currentQuestion ===9?{ animation: "lower-fields 3s forwards" }:null}/>
			<img rel="preload" src={avatar7}id={currentQuestion ===10? "leap-me":null } className={value *10=== 7 ? 'avatar':'hidden' } alt="a an rpg style playable character" />
			
			<img rel="preload"src={avatar8} id={currentQuestion === 10 ? "leap-me" : null} className={value * 10 === 8 ? 'avatar' : 'hidden'} alt="a  of an rpg style playable character" />
			<img rel="preload" src={avatar9}id={currentQuestion ===10? "leap-me":null } className={value * 10 === 9 ? 'avatar' : 'hidden'} alt="a  of an rpg style playable character" />
			</div>
			



			{currentQuestion === 0 ? < GamePad handleAnswerButtonClick={runOnStart} /> : null}

{ currentQuestion === 2 ? runOnName(1):null}
{ currentQuestion === 3 ? runOnName(1500):null}
{ currentQuestion === 4 ? runOnName(1000):null}
{ currentQuestion === 5 ? runOnName(1000):null}
			

			
			
			
			
			<div className={ currentQuestion ===2? "avatar":"faded-out"} >
			<img src={avatar1} rel="preload"className={gotten === 1 ? 'avatar-land' : 'hidden'} alt="an avatar" />		
			
			<img rel="preload" src={avatar2} className={gotten === 2 ? 'avatar-land':'hidden' } alt="the selected character " />		
			<img rel="preload"src={avatar3} className={gotten === 3 ? 'avatar-land' : 'hidden'} alt="the selected character " />
			<img rel="preload" src={avatar4} className={gotten=== 4 ? 'avatar-land':'hidden' } alt="the selected character " />
			<img rel="preload" src={avatar5} className={gotten=== 5 ? 'avatar-land':'hidden' } alt="the selected character " />
			<img rel="preload" src={avatar6} className={gotten=== 6 ? 'avatar-land':'hidden' } alt="the selected character " />
			<img rel="preload" src={avatar7} className={gotten=== 7 ? 'avatar-land':'hidden' } alt="the selected character " />
			<img rel="preload" src={avatar8} className={gotten === 8 ? 'avatar-land':'hidden' } alt="the selected character " />
			<img rel="preload"src={avatar9} className={gotten === 9 ?
			'avatar-land' : 'hidden'} alt="the selected character " />
			</div>
			
			{/* {currentQuestion === 12 ?  <Easca className="faded-in"/>  : null} */}
			
			{/* <img rel="preload"id="mob-effect2" className="phonebg"src={phone2} alt="" /> */}

				{/* <img id="mob-effect1" className="phonebg1"src={phone1} alt="" />
				<img id="mob-effect2" className="phonebg"src={phone2} alt="" /> */}
				{currentQuestion === 5 ? dirpadHandler(): null}

			{currentQuestion === 6? <img rel="preload"src={dirpad} onClick={ dirpadHandler} className="dirpad"alt="" />:null}
			{currentQuestion === 9 ? <img rel="preload"src={wisp} className="rave" alt="flashing lights in the castle window." /> : null}
			
			<div className='stones-container'>
			
				<img rel="preload"src={Stones} className="hill-stones" id="hill-stones" alt="a rough circle of stones and some fields" />
				
			</div>
		</div>:null}
						
	</div>
	
	<div id="suggest-mobile">
				
				<img id="mob-effect"rel="preload" className="phonebg2"src={phone1} alt="" />
			
		</div>
		{currentQuestion>=8?setIsFadedOut(true):null}
	
	</>
	
	);
	
}
