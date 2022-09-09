import React, { useState } from 'react';
import leftEye from '../../images/suile0.gif';
import rightEye from '../../images/suile1.gif';
import face from '../../images/geagaFace.png';
import './geaga.css';
export default function Geaga() { 
	return <><div className="geaga-holder">
		<div className="eyes-holder">
			
		<img src={ leftEye} className="left-eye"alt="glowing blinking left eye" />
		<img src={ rightEye} className= "right-eye"alt="glowing blinking right eye" />
			</div>
		<img src={ face} id= "face" alt="Face of the tree creature" />
		
		</div>
		</>
}