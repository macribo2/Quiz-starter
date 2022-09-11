import React, { useState } from 'react';
import SettingsMenu from './components/settings-menu/settings-menu'
import glass from './images/big-glass.png';
import bg1 from './images/bg4.png';
import fairyRing from './images/question-backgrounds/fairy-ring0.gif';
import hill from './images/rainy-hill0.gif';
import blank from './images/blank.png';
import field from './images/rainy-field0.gif';
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";
 
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




export default function App() {
	let playerGender = "male";
	let dodi = "dó";
	if (playerGender != "male") { 
		dodi = "dí"
	}
	
	const [musicPlay, playMusic] = useState
	("-")
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [showGlass, setShowGlass] = useState(0);
	const [ringFort, ringFortIsOn] = useToggle();
	const [isOn, toggleIsOn] = useToggle();
	const [showSettings, setSettings] = useState(1);
	let hints = [`"Another visitor has arrived my brethren," says a voice that gives you chills`,
		`"He is dead," says another voice`,
		`Is that so. And, what name is upon thee?`, ``, ``, ``]
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
			questionText: '"Tá chuirteoir eile tagtha a bráithre," arsa guth a chuireann drithlíní eagla ort.',
			answerOptions: [
				{ answerText: '>', isCorrect: true, storyPath:'A' }

				],
		},
		{
			questionText: '"Tá sé marabh!" arsa guth eile',
			answerOptions: [
				
				{ answerText: '"Níl mé!"', playerGender:"male", isCorrect: true },
				{ answerText: '...', isCorrect: false },
				{ answerText: '"Níl sí!"', isCorrect: true, playerGender:"female" },
			],
			
		},
		{
			questionText: 'Ab ea. Agus, cad is ainm {dodi}?',
			answerOptions: [ 
			

		]	},
		{
			questionText: '',
			answerOptions: [

				],
		},
		{
			questionText: '',
			answerOptions: [
				{ answerText: '', isCorrect: false },
				{ answerText: '...?', isCorrect: false },
				{ answerText: ' braon sileán', isCorrect: true },
				{ answerText: 'an fharraige', isCorrect: false },
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

const[score, setScore] = useState(0)
	const handleOverlayButtonClick = (showGlass) => {
		if (showGlass === 0) {
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
	
		if (storyPath === "A") {alert(storyPath) }
		if (storyPath === "B") { alert(storyPath)}
		if (storyPath === "C") { alert(storyPath)}
		
		if (isCorrect) { 
		setScore(score+1)		}

		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else { setShowScore(true)}
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

			{/* <img id="question-img" src={blackripple} className = {currentQuestion >= 1?  "special-class":"hidden"  } alt="must have alt" />		 */}
			{/* a small fairy ring on a rainy night. An app menu and point of return. */}
			<img id="question-img"  className = {currentQuestion >= 2 ?  
				"question-img" : "hidden"} src={fairyRing} alt="rainy fields dark and wild" />
		<img id="question-img"  className = 	
			{currentQuestion >= 3 ?  		"question-img":"hidden"  } src={hill} alt="A rainy hilltop loose circle ofFsh stones" />
			<img id="question-img" src={bg3} className={currentQuestion >= 8 ? "question-img" : "hidden"} alt="must have alt" />
		 
			{isOn ? (<div id="glass">
				<p id="hints" >{hints[currentQuestion] }</p>	{ }
< img  src={glass} className="question-img" id="glass-img" alt="glass bg for translucent overlay effect." />		
</div>	) : null}

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
						
					<div className='answer-section'>
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
		</div>
	);
}
