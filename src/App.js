import React, { useState } from 'react';
import Sparkles from 'react-sparkle'

import SettingsMenu from './components/settings-menu/settings-menu'
import glass from './images/big-glass.png';
import lens from './images/ciorcal-glass.png';
import geagaFace from './images/geagaFace.png';
import avatar6 from './images/players/diamhraí0.gif';
import avatar2 from './images/players/douglas.png';
import avatar3 from './images/players/fianna0.png';
import avatar4 from './images/players/gotach0.png';
import avatar5 from './images/players/rógaire0.png'
import avatar8 from './images/players/saoi0.png';
import avatar7 from './images/players/seanchaí0.png';
import avatar1 from './images/players/spéirbhean0.gif';
import emerald from './images/misc_crystal_new.png'
import pearl from './images/stone-soup/misc_crystal_old.png';
import avatar9 from './images/players/bodach0.gif';
import Rings0 from './components/Rings/Rings0'
import avatar10 from './images/prompt-0.png';
import avatar11 from './images/prompt-0.png';
import avatar12 from './images/prompt-0.png';
import avatar13 from './images/prompt-0.png';
import avatar14 from './images/prompt-0.png';
import avatar15 from './images/prompt-0.png';
import bodhran0 from './audio/bodhran0.wav';
import jump from './audio/649725__duskbreaker__8bit-jump.wav';
import chat from './audio/649725__duskbreaker__8bit-jump.wav';
import Easca from './components/easca/easca.jsx'	
import MenuClick from './audio/171697__nenadsimic__menu-selection-click.wav';
import Select from './audio/171697__nenadsimic__menu-selection-click.wav';
import jam from './audio/51241__rutgermuller__8-bit-gabber-piece.wav'
import useScreenOrientation from 'react-hook-screen-orientation';

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
import sky from './images/blinding-light-county.jpg';
import boxes from './images/boxes.gif';
import bg3 from './images/blinding-light-county.jpg';
import blackripple from './images/blackripple.gif'
import black from './images/black.png'
import drone from "./audio/drone.wav"
import tinkle from "./audio/tinkle.wav"
import tinkle1 from "./audio/dink.wav"

import click from "./audio/click.wav"
import stars from './images/stars.gif';
import ReactAudioPlayer from 'react-audio-player';
import settingsBG from './images/fortuna-bg.png';
import './fonts/Urchlo Romhanach.ttf';
import Geaga from './components/geaga/geaga.jsx'; 
import Silken from './components/silken/silken.jsx'; 
import EnterSilken from './components/silken/EnterSilken'; 
import GamePad from './components/game-pad/game-pad.jsx'; 
import AandB from './components/silken/silken.jsx';
import Shadowhill from './images/shadow-hill.png';
import distantFort from './images/distantFort.png';


const ComponentWithScreenOrientation = () => {
	const screenOrientation = useScreenOrientation()
	
	return (
		<p>Screen orientation is: {screenOrientation}</p>
	)
}
let heroNames = ['','a Níamh', 'a Ḋubhghlas ', 'a Oisín', 'a mháistir', 'a rógaire', 'a Thaoiseach', 'Fionn', 'a Mhórgacht', 'a Mhurúch'];
let heroNamesEng = ['','o Níamh', 'Douglas', 'o Oisín','o master', 'you rogue','o Chieftain','Fionn','your Magnificence','o Sea Maid'];
export default function App() {
	//for rotary dial values:
	
	const stepValue = v => Math.round(v * 10) / 10
	const stepValue2 = v => Math.round(v * 10) / 10
	
	const [value, setValue] = useState(0)
	let chosenPortrait = 0;	
	let gotten = 0;
	let gottenRing0 = 0;
	
	
	const [gender, setGender] = useState('male');
	const [musicPlay, playMusic] = useState
	("-")
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [showGlass, setShowGlass] = useState(0);
	const [isOn, toggleIsOn] = useToggle();
	const [showSettings, setSettings] = useState(0);
	let hints = [``,
		``, `yourself!`, ``, ``,`I am going to Doon-na-shee (the fortress of the fairies) to-night, to play music for the good people. If you come with me `+heroNamesEng[gotten]+`, you’ll see fine fun.`,`I am going to Doon-na-shee (the fortress of the fairies) to-night, to play music for the good people. If you come with me `+heroNamesEng[localStorage.getItem('portrait')]+`, you’ll see fine fun.`,``,``,``,]
	let hintsAnswersA = [``,``,``,``,``,``,``,``];
	let hintsAnswersB = [``,``,``,``,``,``,``,``,``];
	let hintsAnswersC = [``,``,``,``,``,``,``];
	let hintsAnswersD = [``, ``, ``, ``, ``];
	
	
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
			questionText: 'Is tú!',
			answerOptions: [
			]	},
		{
			questionText: '',
			answerOptions: [ 
			]	
		},
		{
			questionText: '',
			answerOptions: [
				
			],
		},
		{
			questionText: 'Táim ag dul go Dún-na-sídh anocht, le ceól a sheinm do na daoine maithe. Má ṫagann tu liom '+heroNames[localStorage.getItem('portrait')]+', feicfidh tu greann breá.',
			answerOptions: [	
			],
		},
		{
			questionText: 'Táim ag dul go Dún-na-sídh anocht, le ceól a sheinm do na daoine maithe. Má ṫagann tu liom '+heroNames[localStorage.getItem('portrait')]+', feicfidh tu greann breá.',
			answerOptions: [
								],
		},
		{
			questionText:'',
			answerOptions: [
			]
		},
		{
			questionText: '',
			answerOptions: [
			
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
	const runEndPart1 = () => { 
		return (
	
			<ReactAudioPlayer src={currentQuestion === 4 ? jam : null} autoPlay />
			
)

	}
		const runOnName = (waitTime) => {

		setTimeout(function () {
		
			
		
		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
		}, waitTime);
	} 
	

	
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
		}, 500)
		console.log("currentQuestion" + currentQuestion)
		console.log("value:" + value)
		
	}

	const buttonMashClick= (isCorrect, someVal) => { 
		setIsFadedOut(false)
		setIsFadedOut(true)
			
		if (isCorrect) { 
			setScore(score + 1)
		}
		localStorage.setItem('portrait', value * 10);
		gotten = localStorage.getItem('portrait');
		console.log(gotten+"Gotten")

		gottenRing0 = localStorage.getItem('ring0');
		console.log(gottenRing0+"Gottenr0")

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
		`Brigid the Healer, the Smith, the Goddess whom Poets adore`,
		`The Sea Maid`,
		``
	]
	
	let choiceRing = [
		`		`,
		`Niamh Cinn-Óir`,
		`An Craoibhín Aoibhinn`,
		`Oisín`,
		`Donn Fírinne`,
		`Liam Mac Cárthaigh`,
		`Abhartach`,
		`Fionn mac Cumhail`,
		`Bríd`,
		`An Murúch`,
		``
		
	]

	

	return (
		<div className='app' >
		<Greeting isRaining={ currentQuestion >=9?true:false} />

			<ReactAudioPlayer src={value*10 === 1 ? MenuClick: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 2 ? MenuClick: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 3 ? MenuClick: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 4 ? MenuClick: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 5 ? MenuClick: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 6 ? MenuClick: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 7 ? MenuClick: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 8 ? MenuClick: null} autoPlay />
			<ReactAudioPlayer src={value*10 === 9 ? MenuClick: null} autoPlay />
			<ReactAudioPlayer src={currentQuestion === 2 ? Select: null} autoPlay />
			<ReactAudioPlayer src={currentQuestion === 4 ? jump : null} autoPlay />
			{/* <ReactAudioPlayer src={currentQuestion === 6 ? chat: null} autoPlay /> */}
			<ReactAudioPlayer src={isOn === false ? tinkle : null} autoPlay />
			<ReactAudioPlayer src={isOn === true ? tinkle1: null} autoPlay />
			<img id="app-bg" src={black} className="question-img app-bg-blackripple" alt="black bg." />		
			<img id="sky" src={sky} className="question-img" alt="the sky" />		
			
			<img id="stars" src={stars} className={currentQuestion >= 3 ? "question-img" : "hidden"} alt="wheeling starfield" />		
			<img src={distantFort} className="index-distant-fort" alt="distant fort on peninsula " />
			
			<img src={distantFortShadow} className={currentQuestion < 1 ? "index-distant-fort" : "index-distant-fort slow-fade"} alt="distant fort on peninsula " />
			<img src={Fields} className={currentQuestion===8?"lower-fields":"hill-fields"} alt="distant fort on peninsula " />
			<img src={ShadowFields} className={currentQuestion < 1 ? "index-shadow-fields" : "index-shadow-fields slow-fade"} alt="distant fort on peninsula " />
			{/* <img src={ hill} className="hill"alt="rainy hill shadow-overlay " /> */}

			{/* <img src={ Shadowhill}  className={currentQuestion < 1 ? "index-shadow-hill" : "index-shadow-hill slow-fade"}alt="rainy hill shadow-overlay " /> */}
			{/* <img src={ geagaFace} className="geaga-face" alt="skull bedecked fairy tree" />
			<img src={ geagaShadow} className={currentQuestion < 1 ? "index-geaga-shadow" : "geaga-face geaga-fade"}alt="rainy hill shadow-overlay " />
			 */}
			{/* a small fairy ring on a rainy night. An app menu and point of return. */}

		<img id="question-img"  className = 	
			{currentQuestion >= 101 ?  		"question-img":"hidden"  } src={hill} alt="A rainy hilltop loose circle of stones" />
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
						
						<div className={isFadedOut ? 'answer-section slow-fade-in' : 'answer-section fadedOut'} >
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
			{/* { currentQuestion >= 9 ? <Geaga/>:null} */}

			<button id={currentQuestion===7? "hidden":"toggle-glass-btn" } onClick={toggleIsOn}	><img src={ isOn ?pearl:emerald} id="blank" alt="a crystal or precious stone toggle on off button" /></button>

			{currentQuestion === 4 ? < EnterSilken /> : null}
			{currentQuestion === 5 ? < Silken /> : null}
			{currentQuestion === 6 ? < Silken /> : null}
			{currentQuestion === 6 ? < GamePad handleAnswerButtonClick={handleAnswerButtonClick} /> : null}
			{ currentQuestion === 6 ? < AandB />:null }
			{currentQuestion === 7? < Silken /> : null}
			{currentQuestion === 8? < Silken currentQuestion={currentQuestion} /> : null}
		
			

			{currentQuestion === 7 ? < Rings0 toggleIsOn={toggleIsOn} isOn={ isOn} isFadedOut={ isFadedOut} buttonMashClick={buttonMashClick} /> : null}

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
			
			<div className={ currentQuestion ===2? "avatar-land":"avatarholder" }     style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }} >
			
				<img src={avatar1} className={value * 10 === 1 ? 'avatar' : 'hidden'} id={currentQuestion ===8? "hero-leap":null } alt="a portrait of an rpg style playable character" />		
			
			<img  src={avatar2} className={value*10 === 2 ? 'avatar':'hidden' } id={currentQuestion ===8? "hero-leap":null } alt="a portrait of an rpg style playable character" />		
			<img src={avatar3} id={currentQuestion ===8? "hero-leap":null } className={value * 10 === 3 ? 'avatar' : 'hidden'} alt="a portrait of an rpg style playable character" />
			<img  src={avatar4}id={currentQuestion ===8? "hero-leap":null } className={value *10=== 4 ? 'avatar':'hidden' } alt="a portrait of an rpg style playable character" />
			<img  src={avatar5}id={currentQuestion ===8? "hero-leap":null } className={value *10=== 5 ? 'avatar':'hidden' } alt="a portrait of an rpg style playable character" />
			<img  src={avatar6}id={currentQuestion ===8? "hero-leap":null } className={value *10=== 6 ? 'avatar':'hidden' } alt="a portrait of an rpg style playable character" />
			<img  src={avatar7}id={currentQuestion ===8? "hero-leap":null } className={value *10=== 7 ? 'avatar':'hidden' } alt="a portrait of an rpg style playable character" />
			<img  src={avatar8}id={currentQuestion ===8? "hero-leap":null } className={value *10=== 8 ? 'avatar':'hidden' } alt="a portrait of an rpg style playable character" />
				<img src={avatar9}id={currentQuestion ===8? "hero-leap":null } className={value * 10 === 9 ? 'avatar' : 'hidden'} alt="a portrait of an rpg style playable character" />
			</div>
			





{ currentQuestion === 0 ? runOnStart():null}
{ currentQuestion === 2 ? runOnName(2000):null}
{ currentQuestion === 3 ? runOnName(2000):null}
{ currentQuestion === 4 ? runOnName(2000):null}
{ currentQuestion === 5 ? runOnName(2000):null}
			
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
					<img src={lens} id="lens" alt="a glass 	" />
				</div>
					<p className='dial-text' x={100} y={100} textAnchor="middle" dy="0.3em" fontWeight="bold"> {choiceRing[value * 10]}{ value === 0 || value === 10? null:  <Sparkles
      color="goldenrod"
      count={8}
      minSize={5}
      maxSize={14}
      overflowPx={35}
      fadeOutSpeed={20}
      flicker={false}
    />}</p>
			
				
			</> : null}
		
			
			
			<img src={avatar1} className={gotten === 1 ? 'avatar-land' : 'hidden'} alt="the sky" />		
			
			<div className={ currentQuestion ===2? "avatar":"faded-out"} >
			
			<img  src={avatar2} className={gotten === 2 ? 'avatar-land':'hidden' } alt="the selected character portrait" />		
			<img src={avatar3} className={gotten === 3 ? 'avatar-land' : 'hidden'} alt="the selected character portrait" />
			<img  src={avatar4} className={gotten=== 4 ? 'avatar-land':'hidden' } alt="the selected character portrait" />
			<img  src={avatar5} className={gotten=== 5 ? 'avatar-land':'hidden' } alt="the selected character portrait" />
			<img  src={avatar6} className={gotten=== 6 ? 'avatar-land':'hidden' } alt="the selected character portrait" />
			<img  src={avatar7} className={gotten=== 7 ? 'avatar-land':'hidden' } alt="the selected character portrait" />
			<img  src={avatar8} className={gotten === 8 ? 'avatar-land':'hidden' } alt="the selected character portrait" />
				<img src={avatar9} className={value * 10 === 9 ? 'avatar' : 'hidden'} alt="the selected character portrait" />
			</div>
			
			{currentQuestion === 9 ?  <Easca className="faded-in"/>  : null}
			<div id="suggest-mobile">
				
				<p className="mob-text">don fónpóca i dtús báire. (brú f12)
				</p>
			
				<img id="mob-effect"src={blackripple} alt="" />
			</div>
			</div>
	);
}
