/* eslint-disable no-sparse-arrays */
import React from 'react';
import '../concept/concept.css'
import './history.css';
import { BtnSelect } from '../ui/btn-select';
import { BtnStart } from '../ui/btn-start';
import { BtnA } from '../ui/btn-a';
import { BtnM } from '../ui/btn-m';
import { BtnB } from '../ui/btn-b';
import mobile from '../../images/agnes.png';
import promptVid from '../../images/stars.gif';
import closer from '../../audio/closer.mp3';
import slowBleeps from '../../audio/closer.mp3';
import runLand from '../../images/stars.gif'

import historyVid from '../../images/stars.gif';
import desktopVid from '../../images/stars.gif';
import blueRabbit from '../../images/stars.gif';
import slide0 from '../../images/About1/unix.png';
import slide1 from '../../images/About1/mouse-icons/mouse-arrow.png';
import slide2 from '../../images/About1/cursor-folder.png';
import slide3 from '../../images/About1/unix.png'
import slide4 from '../../images/About1/linux2.png'
import slide5 from '../../images/About1/apple-microsoft.png'
import slide6 from '../../images/About1/ubuntu.png'
import slide7 from '../../images/About1/linux.png'
import slide8 from '../../images/About1/linux.png'
import slide9 from '../../images/About1/backgrounds/linux/distros.gif'
import slide11 from '../../images/About1/banba_poster-0.png'
import slide13 from '../../images/About1/king.gif'
import slide14 from '../../images/About1/Daniel-Maclise.png'
import slide15 from '../../images/About1/pale.png'
import slide16 from '../../images/About1/ard.png'
import slide17 from '../../images/About1/spencer.png'
import slide18 from '../../images/About1/chief.png'
import slide19 from '../../images/About1/1798.png'
import slide21 from '../../images/About1/gpo.png'
import slide22 from '../../images/About1/feicimthu.png'



let changeVid = () => {

}


let avatar = localStorage.getItem('avatar');
// alert(avatar);
function setPlayerIcon() {

}
export default class History extends React.Component {
    constructor() {
        super();

        this.state = {

            story: 0,
            toggleStartOptions: false,
            showFromMenu: false
        }
    }
   

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

    }

    bBtnDown = (e) => {

        this.setState({ engMode: true })
        console.log("engMode:" + this.state.engMode)
    }
    bBtnUp = () => {
        this.setState({ engMode: false })

        console.log("engMode:" + this.state.engMode)
    }

    toggleStartOptions = () => {
        if (this.state.showFromMenu === true) {
            this.setState({ showFromMenu: false })
            console.log('showFromMenu ' + this.state.showFromMenu)
        }
        else if (this.state.showFromMenu === false)
            this.setState({ showFromMenu: true })
        console.log('showFromMenu ' + this.state.showFromMenu)


    }

    resize() {
        this.setState({ mobile: window.innerWidth >= 760 });
        this.setState({ mobileHor: window.innerWidth >= window.innerHeight });
    }

    incrementStory = (ev) => { ev.preventDefault();this.setState({ story: this.state.story + 1 }) }
    decrementStory = (ev) => { ev.preventDefault();this.setState({ story: this.state.story - 1 }) }
    render() {


        return (
            <>
                <div id="music" ></div>
                <div id="history">
                    <video autoPlay muted loop id={this.state.story===4?"history-vid":"hidden"}>
                        <source id="history-vid" src={desktopVid} type="video/mp4" />
                    </video>
                    <video autoPlay muted loop id={this.state.story>=2?"history-vid":"hidden"}>
                        <source id="history-vid" src={historyVid} type="video/mp4" />
                    </video>
                    <div className="about-hist">{this.state.story === 0 ? <img src={slide0} alt="unix logo" /> : null}
                    </div>
                    <div className="about-hist">{this.state.story === 1 ? <img src={slide3} alt="unix logo" /> : null}
                    </div>
                    <div className="about-hist">{this.state.story === 2 ? <img className="slide" src={slide4} alt="linux logo" /> : null}
                    </div>
                    <div className="about-hist">{this.state.story === 3 ? <img src={slide4} alt="linux logo" /> : null}
                    </div>
                    <div className="about-hist">{this.state.story === 4 ? <img src={slide4} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about-hist">{this.state.story === 5 ? <img src={slide4} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about-hist">{this.state.story === 6 ? <img src={slide4} alt="slide illustritative of text." /> : null}
                    </div>

                    <div className="about-hist">{this.state.story === 7 || this.state.story === 8 || this.state.story === 9
                        || this.state.story === 10

                        ? <img src={slide9} alt="" /> : null}
                    </div>
                    <div className="about-hist">{this.state.story === 11 ? <img src={slide13} alt="" /> : null}
                    </div>

                    <div className="about about14" id="aoife">{this.state.story === 12 ? <img src={slide14} alt="slide illustritative of text." /> : null}
                    </div>

                    <div className="about ">{this.state.story === 13 ? <img src={slide16} alt="." /> : null}
                    </div>

                    <div className="about ">{this.state.story === 14 ? <img src={slide17} alt="." /> : null}
                    </div>


                    {/* <div className="about">{this.state.story === 15 ? <img src={slide16} alt="." /> : null}
                    </div> */}


                                    <div className="about">{this.state.story === 15 ? <img src={slide18} alt="." /> : null}
                    </div>
                    <div className="about">{this.state.story === 16 ? <img src={slide19}  id="rebel" alt="." /> : null}
                    </div>

                    <div className="about">{this.state.story === 17  ? <img src={slide21} alt="1935 – The Death of Cúchulainn, by Oliver Sheppard" /> : null}</div>

                    <div className="about about-soc">{this.state.story === 18 || this.state.story === 19 ? <img src={slide22} alt="social media icons" /> : null}</div>

                    <div className="container" id="kungfu">

                        <div id="top" className="row justify-content-center ">

                            <div id="story-hoss">
                                {
                                    this.props.engMode === true ?
                                        <>
                                            <h2 id="storyTexts" className="the-craic">{this.props.engTexts[this.state.story]}</h2>
                                        </>
                                        :

                                        null}
                                {this.props.engMode === false ?

                                    <>
                                        <h2 id="story">{this.props.storyTexts[this.state.story]}</h2>

                                    </>
                                    : null}
                            </div>

                        </div>

                        <div id="middle" className="row justify-content-center">



                            <div id="middle-hist" className="justify-content-center">
                                <div className="row">
                                </div>


                            </div>



                            <div className="ui">


                            </div>

                            <div className="under-stage-left">

                            </div>


                        </div>
                    </div>



                </div>
                <div className="output2" id="output2"></div>


                <div className="select-and-start-btns-history">
                    <BtnSelect onClick={this.toggleStartOptions} />
                    <BtnStart 
                    onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} >

                    </BtnStart>


                </div>
                <div className="directional-pad-hist">
                    <div className='grid-container'>

                        <div className="grid-item"></div>
                        <div className="grid-item" id="north"  onMouseUp={this.incrementStory} onTouchEnd={ this.incrementStory}  >


                        </div>
                        <div className="grid-item" ></div>
                        <div className="grid-item" id="west"  onMouseUp={this.decrementStory} onTouchEnd={ this.decrementStory}  >
                        </div>
                        <div className="grid-item" ><div className="btn-middle-history" /></div>
                        <div className="grid-item" id="east"  onMouseUp={this.incrementStory} onTouchEnd={ this.incrementStory}  >

                        </div>
                        <div className="grid-item"></div>
                        <div className="grid-item" id="south"
                        onMouseUp={this.decrementStory} onTouchEnd={ this.decrementStory} >
                        </div>
                        <div className="grid-item"></div>
                    </div>
                </div>


                <div className="select-options">

                    <button className="start-options-button" onTouchStart={this.setGerman}>
                        <img src="german" alt="German flag" /></button>

                    <button className="start-options-button" onTouchStart={() => { this.setState({ german: true, english: false, polish: false }) }}> <img src="polish" alt="Polish flag" /></button>
                    <button className="start-options-button" onTouchStart={() => { this.setState({ german: false, english: true, polish: false }) }}> <img src="english" alt="English flag" /></button>

                </div>


                {this.state.mobile ? <div id='prompt-hor'>
							<video autoPlay muted loop id="prompt-vid"><source src={runLand} type="video/mp4" alt=" remember the dream speed of falling and fly along the memory of wind" /></video>
							<div id="hills-overlay" />


							{this.state.engMode ? <><h3>For visitors on desktop please press 12 or right click and select inspect. Then  select </h3> <img alt="toggle mobile icon" src={mobile}></img><p>chun aithris a dhéanamh ar gléas soghluaiste</p><p>to simulate mobile device</p></> : <div className="mobile-mode"><img alt="toggle mobile icon" src={mobile}></img></div>}<br />
							{/* <img id="ciaroga" src={ciaroga} /> */}
						</div> : null


						}
              {this.state.showFromMenu ?
                <div className="fromLang">
                        <button className="from-options-button fromEng" onTouchStart={this.handleFromLang}>E</button>
                        <button className="from-options-button fromGae" onTouchStart={this.handleFromLang}>G</button>
                        <button className="from-options-button fromPol" onTouchStart={this.fromPol}>P</button>

                </div> :null}
                {/* 
                <div className="toLang">

                <div className="to-options">
                <button className="to-options-button fromEng" onTouchStart={this.handleFromLang}>E</button>
                <button className="to-options-button fromGae" onTouchStart={this.handleFromLang}>G</button>
                    <button className="to-options-button fromPol" onTouchStart={this.handleFromLang}>P</button>
                </div>

                </div> */}
            
            
            </>

        )
    }

}