/* eslint-disable no-sparse-arrays */
import React from 'react';
import './easca.css'
import $ from 'jquery';
import { Col, Row, Button ,BtnGroup } from 'react-bootstrap'
import { Navigate } from "react-router-dom";



export default class Easca extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect:null
        }
    }
    
        componentDidMount() {
            if (this.state.redirect) {
                return <Navigate to={this.state.redirect} />
              }
        
              const h1 = $('h1')
              console.log(h1)      
              
              
    }


    goCd= () =>{
this.setState({redirect:'cd'})
        
    }
    appendToOutput(char) {
        return <p>hello</p>
     }
	render(){
		return(
            <>

            {this.state.redirect === 'cd'? <Navigate to={this.state.redirect} />:null}
          




            <h2 id="output"></h2>

    
    
    
        <div id="keyboard-container" className="">
            <div className="BtnGroup BtnGroup-lg" id="e-line"role="group" aria-label="...">					
                        <button  onClick={() => console.log("e"+this.value) } type="button" id="e" className="btn btn-right">e</button>
                        <button type="button" id="r" className="btn-left btn ">r</button>
                        <button type="button" id="t" className="btn btn-right ">t</button>
                        <button type="button" id="u" className="btn-left btn ">u</button>
                        <button type="button" id="i" className="btn btn-right ">i</button>
                        <button type="button" id="o" className="btn-left btn ">o</button>
                        <button type="button" id="p" className="btn btn-right ">p</button>
            </div>
            <div className="BtnGroup BtnGroup-lg" id="a-line"role="group" aria-label="...">					
            
            <button type="button" id="a" className="btn-left btn ">a</button>
            <button type="button"id="s"  className="btn btn-right ">s</button>
            <button type="button"id="d"  className="btn-left btn ">d</button>
            <button type="button"id="f"  className="btn-right btn ">f</button>
            <button type="button"id="g"  className="btn-left btn ">g</button>
            <button type="button"id="h"  className="btn-right btn ">h</button>
            <button type="button"id="l"  className="btn-left btn " 
                onMouseUp={this.props.incrementStory} onTouchEnd={ this.goCd}
            >l</button>
    
    </div>
    <div className="BtnGroup BtnGroup-lg" id="c-line"role="group" aria-label="...">					
    
                        <button type="button" id="c" className="btn-right btn ">c</button>
                        <button type="button" id="b" className="btn-left btn ">b</button>
                        <button type="button" id="n" className="btn-right btn ">n</button>
                        <button type="button" id="m" className="btn-left btn ">m</button>
                        <button type="button" id="," className="btn-right btn ">,</button>
                        <button type="button" id="." className="btn-left btn ">.</button>
                        <button type="button" id="?" className="btn-right btn ">?/!</button>
                    </div>

                    <div className="btn-group btn-group-lg" id="shift-line" role="group" aria-label="...">
        
        <button type="button" id="undo" className="btn-right btn btn-outline-dark">
          <i className="fa fa-undo"></i>
        </button>
        <button type="button" id="fada" className="btn-left btn btn-outline-dark">Ᵹ</button>
        <button type="button" className="space btn btn-outline-dark"> </button>
        <button type="button" className="btn-left btn btn-outline-dark caps" id="copy" data-clipboard-target="#output">
          <i className="fa fa-copy"></i>
        </button>
        <button type="button" className=" enter btn-right  btn btn-outline-dark"><i className="fa fa-arrow-right"></i></button>
        
      </div>
                      
        </div>
      








            </>
		)
	}

}