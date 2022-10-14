import './settings-menu.css';

import bg0 from '../../images/zone-off.png';
import React, { useState } from 'react';
import settingsBtnGamepad from '../../images/settings/gamepad.png';
import settingsBtnTouchscreen from '../../images/settings/smartphone.png';


import settingsBtnKeyboard from '../../images/settings/keyboard.png';



 export default function SettingsMenu(props){
	


return <>
<img src={ bg0} className="settings-bg" alt="low intensity background image graphic, expect this to change sometimes."/>	
				
					<div className='setting-menu'>
						{/* <button className="settings-button">.<img src={settingsBtnGamepad}/></button>
						<button className="settings-button">.<img src={settingsBtnTouchscreen}/></button>
						<button className="settings-button">.<img src={settingsBtnKeyboard} /></button> */}
						<div className="settings-button" id="sb0" 	onClick={() => props.handleInputSelect('gamepad')}><img src={settingsBtnGamepad} alt="button "onClick={() => props.handleInputSelect('gamepad')} /></div>
					<div className="settings-button" id="sb1"
						onClick={() => props.handleInputSelect('keyboard')}
					> <img src={settingsBtnKeyboard} onClick={() => props.handleInputSelect('keyboard')} /></div>
					<div className="settings-button" id="sb2"  onClick={() => props.handleInputSelect('touchscreen')}><img src={settingsBtnTouchscreen} onClick={() => props.handleInputSelect('touchscreen')}/></div>
	</div>
	
	<div id="prototype"><h2></h2> <p></p><p></p><br/><br/><br/><br/></div>
					</>	

}