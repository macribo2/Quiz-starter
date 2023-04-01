
/* eslint-disable no-sparse-arrays */
import React from 'react';
import './easca.css'

import $ from 'jquery';
import { Col, Row, Button ,BtnGroup } from 'react-bootstrap'


import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';



export default class Easca extends React.Component {

    onChange = (input) => {
        console.log("Input changed", input);
      }
    
      onKeyPress = (button) => {
        console.log("Button pressed", button);
      }
    constructor() {
        super();
        this.state = {
    layoutName:'easca'
        }
    }
    
    // componentDidMount() {
     
    // }

	render(){


        return (
            
            
            <>

            <Keyboard
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        
          layoutName={this.state.layoutName}
          layout={{
            easca: [
              "e r t u i o p",
              "a s d f g h l",
              "c b n m . ? {shift}",
              "{alt} {space} {enter}"
            ],
            shift: [
              "! @ # $ % ^ & * ( ) _ + {bksp}",
              "é E R T ú U í I ó O P",
              "á A S D F G H L",
              "{shift}",
              "{alt} {space} {enter}"
            ]
          }}
          buttonTheme={[
            {
              class: "hg-red",
              buttons: "Q W E R T Y q w e r t y"
            },
            {
              class: "hg-highlight",
              buttons: "Q q"
            }
          ]}
        
                />                



      </>)
		}
	}