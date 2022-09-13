import React, { useState } from 'react';
import SettingsMenu from './components/settings-menu/settings-menu'
import glass from './images/big-glass.png';
import bg1 from './images/bg4.png';
import fairyRing from './images/question-backgrounds/fairy-ring0.gif';
import hill from './images/rainy-hill0.gif';
import blank from './images/blank.png';
import field from './images/rainy-field0.gif';
import ShadowFields from './images/fields-dusk.png';
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";
import geagaShadow from './images/geagaFaceShadow.png';
import distantFortShadow from './images/distantFort-shadow.png';
 
import bg2 from './images/bgAnim5.gif';
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
	const [gender, setGender] = useState('male');
	const [musicPlay, playMusic] = useState
	("-")
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [showGlass, setShowGlass] = useState(0);
	const [ringFort, ringFortIsOn] = useToggle();
	const [isOn, toggleIsOn] = useToggle();
	const [showSettings, setSettings] = useState(0);
	let hints = [`""`,
		`"It is so. And, weren't you often told, never set foot within the fairy fort therein?"`,
		`You were told. And where did you go a wandering last night?`, `To the Witch's Field! And here you remain. Because...?`, `Trapped. In.The Otherworld. And spotted by her goblins, by Crom.`, ``]
	let hintsAnswersA=[`that is what I was told`,`I was told`,`To the Witch's Field`,``,``];
	let hintsAnswersB=[`I was not told`,`I was not told`,``,``,``];
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
			questionText: 'las solas',
			answerOptions: [
				{ answerText: 'ls', isCorrect: true, storyPath: 'A' },


				],
		},
		{
			questionText: '',
			answerOptions: [
				
				{ answerText: '_',  isCorrect: true },
				{ answerText: '_', isCorrect: true },
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

	// { currentQuestion===0? position answers}

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

//setup init appearance:
	
	

	return (

		<div className='app' >
		<Greeting isRaining={ currentQuestion >=2?true:false} />

			<ReactAudioPlayer src={currentQuestion === 1 ? drone : null}  autoPlay />
			<img id="app-bg" src={black} className="question-img app-bg-blackripple" alt="gray 3d cubes transition animation." />		
			
			<img id="stars" src={stars} className={currentQuestion === 0 ? "question-img" : "hidden"} alt="wheeling starfield" />		
			<img src={distantFortShadow} className="index-distant-fort" alt="distant fort on peninsula " />
			<img src={ShadowFields} className="index-shadow-fields" alt="distant fort on peninsula " />

			<img src={ Shadowhill} className="index-shadow-hill"alt="rainy hill shadow-overlay " />
			<img src={ geagaShadow} className="index-geaga-shadow"alt="rainy hill shadow-overlay " />
			

			{/* <img id="question-img" src={blackripple} className = {currentQuestion >= 1?  "special-class":"hidden"  } alt="must have alt" />		 */}
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

			
		</div>
	);
}
