import React, { useState } from 'react';
import SettingsMenu from './components/settings-menu/settings-menu'
import glass from './images/big-glass.png';
import geagaFace from './images/geagaFace.png';
import avatar from './images/wren0.gif';
import avatar1 from './images/data-sea.gif';
import avatar2 from './images/draoi0.gif';
import avatar3 from './images/diamhraí0.gif';
import avatar4 from './images/spéirbhean0.gif';
import avatar5 from './images/player-init.gif'
import avatar6 from './images/prompt-0.png';
import avatar7 from './images/aisling.gif';
import avatar8 from './images/prompt-0.png';
import avatar9 from './images/prompt-0.png';
import avatar10 from './images/prompt-0.png';
import avatar11 from './images/prompt-0.png';
import avatar12 from './images/prompt-0.png';
import avatar13 from './images/prompt-0.png';
import avatar14 from './images/prompt-0.png';
import avatar15 from './images/prompt-0.png';
	

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

	const [value, setValue] = useState(0)
	
	

	
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
		`Wake up and smell the druids`,
		``, ``, `Trapped. In.The Otherworld. And spotted by her goblins, by Crom.`, ``]
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
			questionText: '',
			answerOptions: [
				
			],
			
		},
		{
			questionText: 'Dúradh. Agus ndeachaigh tú ar seachrán aréir?',
			answerOptions: [ 
				{ answerText: 'Go Gort an Ceallach.', isCorrect: true }			

		]	},
		{
			questionText: 'Go Gort an Ceallach! Agus tá tú ann fós. Mar...?',
			answerOptions: [ 
				{ answerText: 'Mar go bfhuil mé gramaithe san alltar', isCorrect: true },
				{ answerText: '', isCorrect: true },
			

		]	
		},
		{
			questionText: 'Gramaithe. San. Alltar. Agus aird na fiothal ort, in ainm Chroim.',
			answerOptions: [
				{ answerText: 'fan', isCorrect: false },
				{ answerText: 'éist', isCorrect: false },
				{ answerText: 'teith!', isCorrect: true },
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
		},1000)
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

	let choiceRing = [
	
//
		`
		`,`		
		`,`		Dean rince
		`,`		Lig béic
		`,`		Bí doimhin ach bí éadrom
		`,`		Abair dán
		`,`	    Luí síos 
		`,`		Samhlaigh na féidearthachta
		`,`		Dean gáire
		`,`		Loraigh cabhair`
		
]
	return (
		<div className='app' >
		<Greeting isRaining={ currentQuestion >=9?true:false} />

			<ReactAudioPlayer src={currentQuestion === 1 ? drone : null}  autoPlay />
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
			{ currentQuestion >= 2 ? <Geaga/>:null}

			<button id="toggle-glass-btn" onClick={toggleIsOn}	><img src={blank} id="blank" alt="transparent square" /></button>

			{/* {currentQuestion === 3 ? < Geaga /> : null} */}
			{/* <button id="toggle-settings-btn" onClick={setSettings}	><img src={blank} id="blank" alt="transparent square" /></button> */}



			
			{showSettings ? <SettingsMenu showSettings={showSettings} handleInputSelect={ handleInputSelect} />
						
				: null} 
			{isOn ? (<div id="glass">
				<p id="hints" className={isFadedOut ? 'fadedIn' : ' fadedOut'} >{hints[currentQuestion] }</p>
				<p className={isFadedOut ? 'fadedIn hints' : ' fadedOut hints'}  id="hintsA">{hintsAnswersA[currentQuestion] }</p>
				<p className={isFadedOut ? 'fadedIn hints' : ' fadedOut hints'}id="hintsB" >{hintsAnswersB[currentQuestion] }</p>
				{/* <p className="hints" id="hintsC">{hintsAnswersC[currentQuestion]}</p>
				 */}
				{/* <p className="hints" id="hintsD">{hintsAnswersD[currentQuestion] }</p> */}
< img  src={glass} className="question-img" id="glass-img" alt="glass bg for translucent overlay effect." />		
</div>	) : null}
<h1>{ value * 10}</h1>
		<img src={avatar2} className={value * 10 === 0 ? 'avatar' : 'hidden'} alt="the sky" />		
			<img  src={avatar2} className={value * 10 === 2 ? 'avatar':'hidden' } alt="the sky" />		
			<img  src={avatar3} className={value * 10 === 3 ? 'avatar':'hidden' } alt="the sky" />
{ currentQuestion===0? runOnStart():null}
			
			{currentQuestion === 1 ? <>
				<CircularInput className="dial" value={value}  onChange={v =>setValue(stepValue(v))}>
					<CircularTrack />
			{/* <img  src={avatar} className={value === 0 ? 'hidden':'avatar' } alt="Caniuse battus tv charactéir" />		 */}
				
			<CircularProgress />
					<CircularThumb />
				
		</CircularInput>
					
			</> : null}
				
			

					{/* <img src="avatar"   alt="" /> */}
			<h2 className='dial-text' x={100} y={100} textAnchor="middle" dy="0.3em" fontWeight="bold"> {choiceRing[value * 10]} value</h2>
			<h1 className='dial-text' >{ value}</h1>
		<img src={avatar2} className={value === 0 ? 'avatar' : 'hidden'} alt="the sky" />		
			<img  src={avatar2} className={value === 2 ? 'avatar':'hidden' } alt="the sky" />		
			<img  src={avatar3} className={value === 3 ? 'avatar':'hidden' } alt="the sky" />
			
		</div>
	);
}
