import React, { useState } from 'react';
import SettingsMenu from './components/settings-menu/settings-menu'
import glass from './images/big-glass.png';
import lens from './images/ciorcal-glass.png';
import geagaFace from './images/geagaFace.png';
import avatar6 from './images/players/diamhraí0.gif';
import avatar2 from './images/players/draoi0.gif';
import avatar3 from './images/players/fianna0.png';
import avatar4 from './images/players/gotach0.png';
import avatar5 from './images/players/rógaire0.png'
import avatar8 from './images/players/saoi0.png';
import avatar7 from './images/players/seanchaí0.png';
import avatar1 from './images/players/spéirbhean0.gif';
import emerald from './images/misc_crystal_new.png'
import avatar9 from './images/players/bodach0.gif';
import avatar10 from './images/prompt-0.png';
import avatar11 from './images/prompt-0.png';
import avatar12 from './images/prompt-0.png';
import avatar13 from './images/prompt-0.png';
import avatar14 from './images/prompt-0.png';
import avatar15 from './images/prompt-0.png';
import Easca from './components/easca/easca.jsx'	


import fairyRing from './images/question-backgrounds/fairy-ring0.gif';
import hill from './images/rainy-hill1.png';
import blank from './images/blank.png';
import Fields from './images/fields-twilight.png';
import ShadowFields from './images/fields-dusk.png';
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";
import geagaShadow from './images/geagaFaceShadow.png';
import distantFortShadow from './images/distantFort-shadow.png';
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb
} from 'react-circular-input'
import sky from './images/bgAnim5.gif';
import boxes from './images/boxes.gif';
import bg3 from './images/blinding-light-county.jpg';
import blackripple from './images/blackripple.gif'
import black from './images/black.png'
import drone from "./audio/drone.wav"
import stars from './images/stars.gif';
import ReactAudioPlayer from 'react-audio-player';
import settingsBG from './images/fortuna-bg.png';
import './fonts/Urchlo Romhanach.ttf';
import Geaga from './components/geaga/geaga.jsx'; 

import Shadowhill from './images/shadow-hill.png';
import distantFort from './images/distantFort.png';



export default function App() {
//for rotary dial values:
	
const stepValue = v => Math.round(v * 10) / 10
const stepValue2 = v => Math.round(v * 10) / 10

	const [value, setValue] = useState(0)
	let chosenPortrait = 0;	
	

	
	const [gender, setGender] = useState('male');
	const [musicPlay, playMusic] = useState
	("-")
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [showGlass, setShowGlass] = useState(0);
	const [ringFort, ringFortIsOn] = useToggle();
	const [isOn, toggleIsOn] = useToggle();
	const [showSettings, setSettings] = useState(0);
	let hints = [``,
		`Linux Cycle`,
		`Who sits in the fort at Dalkey ?`, ``, ``, ``]
	let hintsAnswersA=[``,``,``,``];
	let hintsAnswersB=[``,``,``,``,``];
	let hintsAnswersC=[``,``,``,``];
	let hintsAnswersD=[``,``,``,``,``];
	function Greeting(props) { 
		const isRaining = props.isRaining;
		if (isRaining) {
			return <ReactRain className="react-rain" numDrops="200" />
		}
		else {
			
			return null
		}
	}

	const handleInputSelect = (UI) => { 
		
		console.log(UI);
		setSettings(0)

	}
	function useToggle(initialValue = false) {
		const [value, setValue] = React.useState(initialValue);
		const toggle = React.useCallback(() => {
		  setValue(v => !v);
		}, []);
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
			questionText: 'Ciogal Linucs',
			answerOptions: [
				
			],
			
		},
		{
			questionText: 'Cé atá i lios an Deilg Inis?',
			answerOptions: [ 


		]	},
		{
			questionText: 'Fior nó bréagach. Oscailte nó dúnta. Lasta nó múachta. sin is brí leis an Gaeilge Dénartha.',
			answerOptions: [ 
				{ answerText: 'Is fior sin.', isCorrect: true },
				{ answerText: 'Ní fíor sin.', isCorrect: true },
			]	
		},
		{
			questionText: 'a náid, a haon, a dó, a trí.',
			answerOptions: [
				{ answerText: 'rogha a 00', isCorrect: false },
				{ answerText: 'rogha a 01', isCorrect: false },
				{ answerText: 'rogha a 10', isCorrect: true },
				{ answerText: 'rogha a 11', isCorrect: true },
			],
		},
		{
			questionText: 'Lasta!',
			answerOptions: [
				{ answerText: 'Níl', isCorrect: false },
				{ answerText: 'Tá', isCorrect: true },
				
			],
		},
		{
			questionText: 'Cé ṫú féin?',
			answerOptions: [
				{ answerText: 'Is damh seacht mbeann mé', isCorrect: true, qid:'tabhair' },
				{ answerText: 'Is seabhac mé ar aill', isCorrect: true, qid:'falsehood' },
				{ answerText: 'Is mé deor na gréine', isCorrect: true, qid:'listen' },
				{ answerText: 's damh seacht mbeann mé', isCorrect: true, qid:'leave' }
			],
		},

		{
			questionText: 'Súas',
			answerOptions: [
				{ answerText: 'Clé', isCorrect: false },
				{ answerText: 'Deas', isCorrect: false },
				{ answerText: 'Soir', isCorrect: false },
				{ answerText: 'Síos', isCorrect: true },
			],
		},
		{
			questionText: 'Súas',
			answerOptions: [
				{ answerText: 'Clé', isCorrect: false },
				{ answerText: 'Deas', isCorrect: false },
				{ answerText: 'Soir', isCorrect: false },
				{ answerText: 'Síos', isCorrect: true },
			],
		},
		{
			questionText: 'Súas',
			answerOptions: [
				{ answerText: 'Clé', isCorrect: false },
				{ answerText: 'Deas', isCorrect: false },
				{ answerText: 'Soir', isCorrect: false },
				{ answerText: 'Síos', isCorrect: true },
			],
		},
		{
			questionText: 'Súas',
			answerOptions: [
				{ answerText: 'Clé', isCorrect: false },
				{ answerText: 'Deas', isCorrect: false },
				{ answerText: 'Soir', isCorrect: false },
				{ answerText: 'Síos', isCorrect: true },
			],
		},
		{
			questionText: 'Súas',
			answerOptions: [
				{ answerText: 'Clé', isCorrect: false },
				{ answerText: 'Deas', isCorrect: false },
				{ answerText: 'Soir', isCorrect: false },
				{ answerText: 'Síos', isCorrect: true },
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
		},1000)
	
			setShowGlass(1);
			console.log("hello" + {showGlass});
		}
		else {
			setShowGlass(0);
			console.log("hello" + showGlass);
		}
	}


	// const handleMenuButtonClick = (showSettings) => {
	// 	if (showSettings === 0) {
	// 		setSettings(1);
	// 		console.log("hello" + {showGlass});
	// 	}
	// 	else {
	// 		setSettings(0);
	// 		console.log("hello" + showGlass);
	// 	}
	// }
	const runOnStart = () => { 
		setTimeout(function () {
			setScore(score+1)	
		
		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else { setShowScore(true)}
	}, 5000)
	}
	const handleAnswerButtonClick = (isCorrect, storyPath) => { 
		setIsFadedOut(false)
		setTimeout(function () {
		setIsFadedOut(true)
			
		if (isCorrect) { 
		setScore(score+1)		}

		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else { setShowScore(true)}
		}, 1000)
		console.log("currentQuestion" + currentQuestion)
		console.log("value:" + value)
		
	}

	let gotten = 0;
	const buttonMashClick= (isCorrect, someVal) => { 
		setIsFadedOut(false)
		setIsFadedOut(true)
			
		if (isCorrect) { 
			setScore(score + 1)
		}
		

		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else { setShowScore(true)}
		console.log("currentQuestion" + currentQuestion)
		console.log("value:" + value)
		localStorage.setItem('portrait', value * 10);
		gotten = localStorage.getItem('portrait')
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
		`onwards as 1`,
		`onwards as 2`,
		`onwards as 3`,
		`onwards as 4`,
		`onwards as 5`,
		`onwards as 6`,
		`onwards as 7`,
		`onwards as 8`,
		`onwards as 9`,
		`onwards as 0`
]
	let choiceRing = [
	
//
		`		`,
		`ar aghaidh mar 1`,
		`ar aghaidh mar 2`,
		`ar aghaidh mar 3`,
		`ar aghaidh mar 4`,
		`ar aghaidh mar 5`,
		`ar aghaidh mar 6`,
		`ar aghaidh mar 7`,
		`ar aghaidh mar 8`,
		`ar aghaidh mar 9`,
		`ar aghaidh mar 0`
		
]
	return (
		<div className='app' >
		<Greeting isRaining={ currentQuestion >=9?true:false} />

			<ReactAudioPlayer src={currentQuestion === 2 ? drone : null} autoPlay />
			
			<img id="app-bg" src={black} className="question-img app-bg-blackripple" alt="black bg." />		
			<img id="sky" src={sky} className="question-img" alt="the sky" />		
			
			<img id="stars" src={stars} className={currentQuestion <= 1 ? "question-img" : "fade-out"} alt="wheeling starfield" />		
			<img src={distantFort} className="index-distant-fort" alt="distant fort on peninsula " />
			
			<img src={distantFortShadow} className={currentQuestion < 1 ? "index-distant-fort" : "index-distant-fort slow-fade"} alt="distant fort on peninsula " />
			<img src={Fields} className="hill-fields" alt="distant fort on peninsula " />
			<img src={ShadowFields} className={currentQuestion < 1 ? "index-shadow-fields" : "index-shadow-fields slow-fade"} alt="distant fort on peninsula " />
			{/* <img src={ hill} className="hill"alt="rainy hill shadow-overlay " /> */}

			{/* <img src={ Shadowhill}  className={currentQuestion < 1 ? "index-shadow-hill" : "index-shadow-hill slow-fade"}alt="rainy hill shadow-overlay " /> */}
			{/* <img src={ geagaFace} className="geaga-face" alt="skull bedecked fairy tree" />
			<img src={ geagaShadow} className={currentQuestion < 1 ? "index-geaga-shadow" : "geaga-face geaga-fade"}alt="rainy hill shadow-overlay " />
			 */}
			{/* a small fairy ring on a rainy night. An app menu and point of return. */}
			<img id="question-img"  className = {currentQuestion >= 2 ?  
				"question-img" : "hidden"} src={fairyRing} alt="rainy fields dark and wild" />
		<img id="question-img"  className = 	
			{currentQuestion >= 3 ?  		"question-img":"hidden"  } src={hill} alt="A rainy hilltop loose circle ofFsh stones" />
			<img id="question-img" src={bg3} className={currentQuestion >= 8 ? "question-img" : "hidden"} alt="must have alt" />
		 
			
			{/* HINT: replace "false" with logic to display the
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>Tá muid ar comhintinn { score } as {questions.length}</div>
			) : (
				<>
						<div className='question-section'>
					
						<div className='question-count'> 		
						</div>
							<div className='question-text'>{ questions[currentQuestion].questionText}</div>

						</div>
						
						<div className={isFadedOut ? 'answer-section fadedIn' : 'answer-section fadedOut'} >
							{questions[currentQuestion].answerOptions.map((answerOption, index) => (<button key={index}
								onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
								
							>{answerOption.answerText}</button>))}
					</div>

				</>
			)}

			{/* <div className= "field-ringfort-menu">
			<button id={currentQuestion === 2 ? "field" : "hidden"}onClick={() => handleFieldButtonClick()} > <img src={field} alt="a small grassy field"/></button >
			<button className={currentQuestion === 2 ? "ringfort" : "hidden" } onClick={() => handleRingfortButtonClick()} > <img src={hill} alt="image of a circle of stones on top of a hill." /></button >
			</div> */}
			{ currentQuestion >= 3 ? <Geaga/>:null}

			<button id="toggle-glass-btn" onClick={toggleIsOn}	><img src={emerald} id="blank" alt="emerald ring" /></button>

			{/* {currentQuestion === 3 ? < Geaga /> : null} */}
			{/* <button id="toggle-settings-btn" onClick={setSettings}	><img src={blank} id="blank" alt="transparent square" /></button> */}



			
			{showSettings ? <SettingsMenu showSettings={showSettings} handleInputSelect={ handleInputSelect} />
						
				: null} 
			{isOn ? (<div id="glass">
				<p className={currentQuestion === 1 ? "choice-ring-0-hint" : "hidden"}>{choiceRingEng[value * 10]}</p>
				<p id="hints" className={isFadedOut ? 'fadedIn' : ' fadedOut'} >{hints[currentQuestion] }</p>
				<p className={isFadedOut ? 'fadedIn hints' : ' fadedOut hints'}  id="hintsA">{hintsAnswersA[currentQuestion] }</p>
				<p className={isFadedOut ? 'fadedIn hints' : ' fadedOut hints'}id="hintsB" >{hintsAnswersB[currentQuestion] }</p>
				{/* <p className="hints" id="hintsC">{hintsAnswersC[currentQuestion]}</p>
				 */}
				{/* <p className="hints" id="hintsD">{hintsAnswersD[currentQuestion] }</p> */}
< img  src={glass} className="question-img" id="glass-img" alt="glass bg for translucent overlay effect." />	
			</div>) : null}
			
			<div className={ currentQuestion ===2? "avatar-land":"avatarholder"} >
			
			<img src={avatar1} className={value * 10 === 1 ? 'avatar' : 'hidden'} alt="the sky" />		
			
			<img  src={avatar2} className={value*10 === 2 ? 'avatar':'hidden' } alt="the sky" />		
			<img src={avatar3} className={value * 10 === 3 ? 'avatar' : 'hidden'} alt="the sky" />
			<img  src={avatar4} className={value *10=== 4 ? 'avatar':'hidden' } alt="the sky" />
			<img  src={avatar5} className={value *10=== 5 ? 'avatar':'hidden' } alt="the sky" />
			<img  src={avatar6} className={value *10=== 6 ? 'avatar':'hidden' } alt="the sky" />
			<img  src={avatar7} className={value *10=== 7 ? 'avatar':'hidden' } alt="the sky" />
			<img  src={avatar8} className={value *10=== 8 ? 'avatar':'hidden' } alt="the sky" />
				<img src={avatar9} className={value * 10 === 9 ? 'avatar' : 'hidden'} alt="the sky" />
			</div>
			





{ currentQuestion===0? runOnStart():null}
			
			{currentQuestion === 1 ? <>
				<CircularInput className="dial" value={value}  onChange={v => setValue(stepValue(v))}>{}
					<CircularTrack />
			{/* <img  src={avatar} className={value === 0 ? 'hidden':'avatar' } alt="Caniuse battus tv charactéir" />		 */}
				
			<CircularProgress />
					<CircularThumb />
				
		</CircularInput>
			
		
			</> : null}


			{currentQuestion === 1 ? <>
				<div id="buttonmash" value={value} onClick={(value) => buttonMashClick(true, value)}>
					<img src={lens} id="lens" alt="a glass lens" />
				</div>
				<p className='dial-text' x={100} y={100} textAnchor="middle" dy="0.3em" fontWeight="bold"> {choiceRing[value * 10]}</p>
			
				
			</> : null}
		
			{currentQuestion === 2 ? <>
			
			
				<div className={ currentQuestion ===2? "avatar-land":"avatarholder"} >
			
			<img src={avatar1} className={gotten === 1 ? 'avatar' : 'hidden'} alt="the sky" />		
			
			<img  src={avatar2} className={gotten === 2 ? 'avatar':'hidden' } alt="the sky" />		
			<img src={avatar3} className={gotten === 3 ? 'avatar' : 'hidden'} alt="the sky" />
			<img  src={avatar4} className={gotten=== 4 ? 'avatar':'hidden' } alt="the sky" />
			<img  src={avatar5} className={gotten=== 5 ? 'avatar':'hidden' } alt="the sky" />
			<img  src={avatar6} className={gotten=== 6 ? 'avatar':'hidden' } alt="the sky" />
			<img  src={avatar7} className={gotten=== 7 ? 'avatar':'hidden' } alt="the sky" />
			<img  src={avatar8} className={value *10=== 8 ? 'avatar':'hidden' } alt="the sky" />
				<img src={avatar9} className={value * 10 === 9 ? 'avatar' : 'hidden'} alt="the sky" />
			</div>
			

			
			</> : null}		
		</div>
	);
}
