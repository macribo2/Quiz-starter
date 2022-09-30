import React, { useState } from 'react';
import './rings0.css';
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb
} from 'react-circular-input'
export default function Rings0() {
	
	const stepValue3 = v => Math.round(v * 10) / 10;
	
	localStorage.setItem('ring0', value * 10);
	//	'I feel the smell of a melodious lying Irishman under my sod of country.'
	// Moṫuiġim bolaḋ an Éireannaiġ ḃinn ḃreugaiġ faoi m’ḟóidín dúṫaiġ
	
	// Ní Eireannaċ binn breugaċ mise,
// 	// /No melodious lying Irishman am I,
	
// 	“And what is the wages you’ll be looking for?”

// “The place of a house and garden.”

// “You’ll get that if my journey succeeds with me.”
	
	
	/*
	
	“I’ll bring you away from her side without her knowing it, when you are both asleep together, and I’ll bring you back to her the same way,” said the little man.
	
	*/
	const [value, setValue3] = useState(0)
	let gottenRings0 = 0;
	let Ring2AnsEng = ['',
		'I’ll go with you, and welcome,','I will, if I get my wages','Not till I get a drink',' I’ll give you the price of your joking!'
	]
	let Ring2Ans = ['','Rachfaidh agus fáilte','Rachfaidh, má ḃfáġ mé mo ṫuarastal.','Níl go ḃfágh mé deoch',' Béarfaiḋ mé luaċ do mhagaidh ḋuit!”','rogha5','rogha6','rogha7','rogha8','rogha9']
	const reportStepValue3 = () => {
		alert();
	}
	return (
		 <>
				<CircularInput className="dial" value={value}  onChange={v => setValue3(stepValue3(v))}>{}
					<CircularTrack />
			{/* <img  src={avatar} className={value === 0 ? 'hidden':'avatar' } alt="Caniuse battus tv charactéir" />		 */}
				
			<CircularProgress />
					<CircularThumb />
				
		</CircularInput>
			
		<p className='rings0' x={100} y={100} textAnchor="middle" dy="0.3em" fontWeight="bold">{Ring2Ans[value * 10]}</p>
			
		
		</>)
};