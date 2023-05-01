import ringFound from '../../images/cut-scenes/found-ring.png'

import { render } from "react-dom";
import React, { useState, useEffect } from 'react'
import './score.css'

export default class Score extends React.Component  {

	render() { 
		var { returnToCounty } = this.props

return (
	
	<>
		<div className='score-container'>
		<div className="score-bg-container">
		<img src={ ringFound} alt="" />
	</div>

		<div className="score-text-container" onClick={ returnToCounty} >
			<h1 className="storyteller">
				Tá fáinne búite ag {localStorage.getItem('hname')+'!'}
			</h1>
			<table className='player-stats-table'>
				<tr>
					<th className="storyteller">fáinní</th>
					<th></th>
				</tr>
				<tr>
					<th className="storyteller">1</th>
					<th></th>

					<th></th>
					
				</tr>
			</table>
		</div>
			

			<div className="circle round-btn" ></div>
				
	</div>
			<div className="score">
	</div>			</>
			);



		}
	}
