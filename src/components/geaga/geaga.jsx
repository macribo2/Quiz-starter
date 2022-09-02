import React, { useState } from 'react';
import leftEye from '../../images/suile0.gif';
import face from '../../images/geagaFace.png';

export default function Geaga() { 
		return <><div className="geagaHolder">
		<img src={ leftEye} alt="glowing blinking left eye" />
		<img src={ leftEye} id= "rightEye"alt="glowing blinking left eye" />
		<img src={ face} id= "rightEye"alt="glowing blinking left eye" />
		
		</div>
		</>
}