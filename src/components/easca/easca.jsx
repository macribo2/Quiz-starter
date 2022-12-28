/* eslint-disable no-sparse-arrays */
import React from 'react';
import './easca.css'
import $ from 'jquery';
import pearl from '../../images/stone-soup/misc_crystal_old.png'
// import { Navigate } from "react-router-dom";



export default class Easca extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect:null
        }
    }
    
    jQueryCode = () => { 
let myVar
        let showWhatKeys;

        // new ClipboardJS('#copy');

	let keyPressed;

	let keysToShow = [];
	showWhatKeys=(keyPressed)=>{
		switch(keyPressed){
			case 'a': keysToShow.push('a');
					keysToShow.push('á');
					keysToShow.push('A');
					break;
			

					case 'b': keysToShow.push('b');
					keysToShow.push('ḃ');
					keysToShow.push('B');
					keysToShow.push('v');

					break;
			
					case 'c': keysToShow.push('c');
					keysToShow.push('ċ');
					keysToShow.push('C');
					keysToShow.push('k');
					keysToShow.push('q');
					break;
			
					case 'd': keysToShow.push('d');
					keysToShow.push('ḋ');
					keysToShow.push('D');
					keysToShow.push('j');
					break;
			
					case 'e': keysToShow.push('e');
					keysToShow.push('é');
					keysToShow.push('E');
					break;
			
					case 'f': keysToShow.push('f');
					keysToShow.push('ḟ');
					keysToShow.push('F');
					break;
			
					case 'g': keysToShow.push('g');
					keysToShow.push('ġ');
					keysToShow.push('G');
					break;
			
					case 'h': keysToShow.push('h');
					keysToShow.push('H');
					break;
			
					case 'i': keysToShow.push('i');
					keysToShow.push('í');
					keysToShow.push('y');
					break;
			
					case 'l': keysToShow.push('l');
					keysToShow.push('L');
					break;
			
					case 'm': keysToShow.push('m');
					keysToShow.push('ṁ');
					keysToShow.push('M');
					break;
			
					case 'n': keysToShow.push('n');
					keysToShow.push('N');
					break;
			
					case 'o': keysToShow.push('o');
					keysToShow.push('ó');
					keysToShow.push('O');
					break;
			
					case 'p': keysToShow.push('p');
					keysToShow.push('ṗ');
					keysToShow.push('P');
					break;
			
					case 'r': keysToShow.push('r');
					keysToShow.push('ꞃ');
					keysToShow.push('R');
					break;
			
					case 's': keysToShow.push('s');
					keysToShow.push('ṡ');
					keysToShow.push('S');
					keysToShow.push('z');


					break;
			
					case 't': keysToShow.push('t');
					keysToShow.push('ṫ');
					keysToShow.push('T');
					break;
			
					case 'u': keysToShow.push('u');
					keysToShow.push('ú');
					keysToShow.push('U');
					keysToShow.push('w');

					break;
			
			

			default: break;
		}
	
	}


	$('#fada-mode').hide();
	$('#caps-keyboard-container').hide();
let capsMode=false;


function toggleCapsMode (){
if (capsMode===true){
	$('#keyboard-container').show();
	$('#caps-keyboard-container').hide();
	capsMode=false;
}
else{
		$('#keyboard-container').hide();
		$('#alt-keyboard-container').hide();
	$('#caps-keyboard-container').show();

	capsMode=true;

}
;

}
function	fadaMode (){

		$('#keyboard-container').hide();
		$('#fada-mode').show();

		$('.btn').on( 'touchend' , function(e) {
			if (keyPressed != "Ᵹ"){
			$('#keyboard-container').show();
			$('#fada-mode').hide();}
		})
}
// 	else{
// 		$('#keyboard-container').show();
// 	$('#alt-keyboard-container').hide();
// 	fadaMode=false;
// 	}
// }


function holdKeyDown() {
	// alert(keyPressed);
	
	// alert(keysToShow)
	for (let i = 0; i<keysToShow.length; i++){
		let newButton = `<button id=`+keysToShow[i]+` onclick = "				$('#output').append(this.id);
		" type="button" class="btn btn-right-logo btn-outline-dark">`+keysToShow[i]+`</button>`
		
		$('#j-line').append(newButton)	
	}

	$('#j-line').fadeIn();
	let newLeft = $('#'+keyPressed).offset().left;
	let newTop = $('#'+keyPressed).offset().top -50;
	$('#j-line').css({"left": newLeft});
	$('#j-line').css({"top": newTop});
	setTimeout(function(){
		$('#j-line').fadeOut();
		// alert("removed");
},3000
)
}
	$('.btn').on('touchstart', function(){
	
		$('#j-line').empty();
		keyPressed = (this.innerHTML);
        keysToShow=[];
$('#output').append(keyPressed)
		showWhatKeys(keyPressed);

		myVar = setTimeout(holdKeyDown, 600);
	
	})
		$('.btn').on( 'touchend' , function(e) {

$(this).addClass('hl');
// alert()

			clearTimeout(myVar)
				var id = this.id
				if (id=== "fada"){
					fadaMode();
					// alert('alt')
				}
				else if(
					
					(this.id === "copy")
				){
					// toggleCapsMode()

					
				}
				else
				if (id ==='undo'){
					var temp = $('#output').text();
					temp.toString();
					// alert(temp)
			let	str=	temp.substring(0, temp.length - 1);
				// alert(str)
				$('#output').text(str) ;
				}
				else if( $('#j-line').is(':hidden')){
					// alert("hidden")
				$('#output').append(keyPressed);
		keysToShow= [];}
	
			});
			// if (id === 'undo'){
			// 	let temp = document.getElementById('#output');
			// 	alert(temp)
			// }

    }
        componentDidMount() {
            if (this.state.redirect) {
                // return <Navigate to={this.state.redirect} />
              }
        
              const h1 = $('h1')
              console.log(h1)      
                 this.jQueryCode();
              
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
<div id="easca">
            {/* {this.state.redirect === 'cd'? <Navigate to={this.state.redirect} />:null} */}
          




            <h2 id="output">_</h2>

    
    
    
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
        <button type="button" className=" enter btn-right  btn btn-outline-dark"><i className="fa fa-arrow-right"></i></button>
        
                            <button type="button" className="btn" id="pearl" onTouchStart={() => { $('#easca').fadeOut()}} >
          <img src={pearl} />
        </button>
      </div>
                      
        </div>
      

        </div>


                <div id="j-line"
                ></div>
       


            </>
		)
	}

}