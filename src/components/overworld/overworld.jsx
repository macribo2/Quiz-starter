import React from 'react';
import './overworld.css';
import '../Rings/rings1.css';
import emerald from '../../images/misc_crystal_new.png'
import pearl from '../../images/stone-soup/misc_crystal_old.png';
import lens from '../../images/ciorcal-glass2.png';
import stats from '../../images/inv/char.png';
import inv from '../../images/inv/backpack.png';
import disk from '../../images/inv/diskette.png';
import portrait from '../../images/portrait.gif'
import { BtnB } from './../ui/btn-b';
import promptVid from '../../vid/stars.mp4'
import ciaroga from '../../images/players/rógaire0.png'
import phone1 from '../../images/phone-0.png';
import glass from '../../images/big-glass.png';
import statsMenu from '../../images/fog3.png';
import invMenu from '../../images/inv/inv-bg.png';
import diskMenu from '../../images/blackripple.gif';
import EascaLocation from '../easca-location/easca-location'

import gigakoops from '../../audio/Gigakoops - Level 2 - High Clouds.mp3'
import jam from '../../audio/Azureflux - Pocket Mirror Main Theme.mp3'
import ReactAudioPlayer from 'react-audio-player';
// import county emblems

import carlow from "../../images/counties/leinster/icons/carlow.png"
import dublin from "../../images/counties/leinster/icons/dublin.png"
import kildare from "../../images/counties/leinster/icons/kildare.png"
import kilkenny from "../../images/counties/leinster/icons/kilkenny.png"
import Rings1 from '../Rings/Rings1'
import laois from "../../images/counties/leinster/icons/laois.png"
import longford from "../../images/counties/leinster/icons/longford.png"
import louth from "../../images/counties/leinster/icons/louth.png"
import meath from "../../images/counties/leinster/icons/meath.png"
import offaly from "../../images/counties/leinster/icons/offaly.png"
import westmeath from "../../images/counties/leinster/icons/westmeath.png"
import antrim  from "../../images/counties/ulster/icons/antrim.png"
import  armagh from "../../images/counties/ulster/icons/armagh.png"
import cavan from "../../images/counties/ulster/icons/cavan.png"
import  clare from "../../images/counties/munster/icons/clare.png"
import cork from "../../images/counties/munster/icons/cork.png"
import derry from "../../images/counties/ulster/icons/derry.png"
import donegal from "../../images/counties/ulster/icons/donegal.png"
import down from "../../images/counties//ulster/icons/down.png"
import fermanagh from "../../images/counties/ulster/icons/fermanagh.png"
import galway from "../../images/counties/connacht/icons/galway.png"
import kerry from "../../images/counties/munster/icons/kerry.png"
import leitrim from "../../images/counties/connacht/icons/leitrim.png"
import limerick from "../../images/counties/munster/icons/limerick.png"
import other from "../../images/counties/other/icons/other.png"
import monaghan from "../../images/counties/ulster/icons/monaghan.png"
import mayo from "../../images/counties/connacht/icons/mayo.png"
import roscommon from "../../images/counties/connacht/icons/roscommon.png"
import sligo from "../../images/counties/connacht/icons/sligo.png"

import tipperary from "../../images/counties/munster/icons/tipperary.png"
import tyrone from "../../images/counties/ulster/icons/tyrone.png"
import waterford from "../../images/counties/munster/icons/waterford.png"
import wexford from "../../images/counties/leinster/icons/wexford.png"
import wicklow from "../../images/counties/leinster/icons/wicklow.png"


// import { Register } from './../register/register'
import $ from 'jquery';
import empty from "../../images/empty.png"
import shamrocks from "../../images/overworld/shamrock.png"
import geaga from "../../images/yin-yan.png"
//empty image for geaga beceause they're just handlers for player triggering geaga event. Geaga image now in geagaSprite
import blocked from '../../images/empty.png'
import sea0 from '../../images/tonnta1.gif'
// import sea1 from '../../images/tonnta2.gif'
// import sea2 from '../../images/tonnta3.gif'
// import sea3 from '../../images/tonnta1.gif'
import { Col, Row } from 'react-bootstrap'
import town0 from '../../images/shields.png'
import Silken from '../silken/silken'

import avatar1 from '../../images/players/spéirbhean0.gif';
import avatar2 from '../../images/players/douglas.png';
import avatar3 from '../../images/players/fianna0.png';
import avatar4 from '../../images/players/gotach0.png';
import avatar5 from '../../images/players/rógaire0.png'
import avatar6 from '../../images/players/diamhraí0.gif';
import avatar7 from '../../images/players/seanchaí0.png';
import avatar8 from '../../images/players/pooka.png';
import avatar9 from '../../images/players/poet.png';
import geaga1 from '../../images/agnes_new.png';
import mobile from '../../images/players/rógaire0.png'
let whereAmI = 'geaga';
let whereAmIHolder = 'null';
let avatar = "";

let secondLocation = "Dún Laoghaire";
function setGeagaIcon(icon) { 
return icon
}
function setIcon(icon) { 
    return icon
}
let engNotes = ['From 0 to 1...'];
let NarrativeCode = 0;
function setPlayerIcon() {
    let overworldPortrait = localStorage.getItem('portrait');
    
    // { localStorage.setItem('portrait',"")}

    switch (overworldPortrait) {
        case "0": return avatar1;
        case "1": return avatar1;
        case "2": return avatar2;
        case "3": return avatar3;
        case "4": return avatar4;
        case "5": return avatar5;
        case "6": return avatar6;
        case "7": return avatar7;
        case "8": return avatar8;
        case "9": return avatar9;
        default:  return avatar9;
    }
}
export default class Overworld extends React.Component {
    constructor() {
        super();
        this.state = {
            registerMenu: false,
            mobile: false,
            mobileHor: true,
            whereAmI: 'geaga',
            isOn: false,
            statsVisible: false,
            diskVisible: false,
            inventoryVisible: false,
            showEascaLocation:true
            // whereAmI: localStorage.getItem('whereAmI')
        }

    }

    //     this.setState({ mobile: window.innerWidth >= 760 });
    //     this.setState({ mobileHor: window.innerWidth >= window.innerHeight });
    // }
    resize() {
        this.setState({ mobile: window.innerWidth >= 760 });
        this.setState({ mobileHor: window.innerWidth >= window.innerHeight });
    }
    jQueryCode = () => {
        let playerOverLocation = false;
        localStorage.setItem('whereAmI', 'geaga');

        $.getJSON('mapData.json', function (county) {
            
            $.each(county, function (key, val) {

                if (val.co === imreoir.whereAmI) {
                    $('#output').html(val.county)
                    whereAmI = val.whereAmI
                    localStorage.setItem('whereAmI', whereAmI);
                    console.log("line 112:" + val.county);
                    map = JSON.parse(val.mapData);
                    console.log(val.mapData);

                    $('.countyMap').css('left', val.left)
                    $('.countyMap').css('top', val.top)
                    $('.countyMap').css('background-image', val.countyBG)
                    $('.countyMap').fadeIn();
                    $('.countyMap').css('background-image', town0)


                    // console.log("line 123" + val.co)
                    newLocations = val.locations;
                    newLocationsEng = val.locationsEng;
                    // console.log(newLocations)

                    setTimeout(function () {

                        $('.countyMap').fadeIn();
                        let whichSea = Math.floor(Math.random() * 3)

                        if (localStorage.whereAmI === 'antrim' || localStorage.whereAmI === 'down' || localStorage.whereAmI === 'louth' || localStorage.whereAmI === 'dublin' || localStorage.whereAmI === 'wicklow' || localStorage.whereAmI === 'wexford') {
                            $('.sea').css('background-image',  sea0 )
                        } else {
                            if (whichSea === 2) { $('.sea').css('background-image',  sea0) }
                            if (whichSea === 1) { $('.sea').css('background-image',  sea0) }
                            if (whichSea === 3) { $('.sea').css('background-image',  sea0) }
                        }
                        setTimeout(function () {

                            $('.sea').fadeIn();
                        }, 100)

                        refresh()

                        console.log("whichSea" + whichSea)
                    }, 300)
                }
                else {
                    console.log(">>>> does" + imreoir.whereAmI + " match  error loading map.")
                }


            });


        })
        let newLocations;
        let newLocationsEng;
        let allCounties;
        $.getJSON('/whichCounty', function (data) {
            allCounties = data.naContae;
            console.log(allCounties);
            console.log("^JQ getJSON call to  /whichCounty endpoint works OK from inside React component baile.jsx")
            localStorage.setItem("whereAmI", "wicklow");
            imreoir.whereAmI = localStorage.getItem("whereAmI");

        })

        let imreoir = {
            ainm: "Uallach", craobh: "", from: "Ċill Ċainniġ", slí: "Draoi", avatar: setPlayerIcon(), whereAmI: 'donegal'
        }
        imreoir.whereAmI = 'wicklow';

        console.log(imreoir.whereAmI + ": new imreoir whereAmI");
        /*big function to handle which map to go to*/

        /*big function to handle where to position player after map change*/
        // let imreoirJSON = JSON.stringify(imreoir);

        function setMap() {

            
            $('.emblem-container').removeClass('animateEmblem'); 
            $('.emblem-img').addClass('animateEmblemIn'); 
            // console.log(gameObjects+"uuuuuuuuuuu")
            $('.countyMap').css('left', imreoir.whereAmI.left)
            $('.countyMap').css('top', imreoir.whereAmI.top)
            $('.countyMap').css('background-image', "url('../../images/counties/" + imreoir.whereAmI + ".png")
            
            $('#stage').fadeOut()
            // $('.emblem-img').css("opacity",0)
                        setTimeout(function () {
                $('#stage').fadeIn()
                
            }, 2000)
            setTimeout(function () { 
                
                
                $('.emblem-container').addClass('animateEmblem'); 
                $('.emblem-img').removeClass('animateEmblemIn'); 
                $('.countyMap').css('animation', 'zoom-to-' + imreoir.whereAmI + ' 1s forwards ease-in');
            }, 1500)
            



        }

        //Load grids of connecting counties: 
        function loadMap(direction) {
            switch (imreoir.whereAmI) {

                case 'geaga':

                    if (direction === N) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");
                        NarrativeCode++;

                        gameObjects[playerRow][playerColumn] = 0;

                        playerRow = 8;
                        playerColumn = 5;
                        
                        refresh();
                        setTimeout(setMap(),  1000)
                        

                    }


                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");
                        NarrativeCode++;
                        alert("NEs");
                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 6;
                        refresh();
                        setTimeout(setMap(),  1000)


                    };
                    if (direction === E) {


                    };
                    if (direction === SE) {
                    };
                    if (direction === S) {

                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");
                        NarrativeCode++;
                        alert("sw");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 7;
                        playerColumn = 7;
                        refresh();
                        setTimeout(setMap(),  1000)

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");
                        NarrativeCode++;

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 7;
                        refresh();
                        setTimeout(setMap(),  1000)
                        alert("W");

                    };
                    if (direction === NW) {
                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 6;
                        animatePlayer();
                        
                        NarrativeCode++;
                       
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");
                        NarrativeCode++;
                        $('#eascaStage').fadeOut()
                            refresh();
                            setMap()



                    };

                    break;


                case 'wexford':

                    if (direction === N) {
                        localStorage.setItem("whereAmI", "wicklow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;

                        playerRow = 8;
                        playerColumn = 5;
                        // animatePlayer();
                        refresh();
                        setMap()

                    }


                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "wicklow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 6;
                        refresh();
                        setMap();



                    };
                    if (direction === E) {


                    };
                    if (direction === SE) {
                    };
                    if (direction === S) {

                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "kilkenny");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 7;
                        playerColumn = 7;
                        refresh();
                        setMap();


                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "kilkenny");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 7;
                        refresh();
                        setMap();


                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "carlow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();


                    };

                    break;

                case 'offaly':

                    if (direction === N) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "kildare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "laois");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "tipperary");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "tipperary");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "galway");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "roscommon");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 9;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    break;
                case 'cavan':
                    if (direction === N) {
                        localStorage.setItem("whereAmI", "fermanagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NE) {

                        localStorage.setItem("whereAmI", "monaghan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "monaghan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 4;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "longford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "leitrim");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "fermanagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();


                    }; break;
                case 'clare':
                    if (direction === N) {
                        localStorage.setItem("whereAmI", "galway");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "tipperary");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "tipperary");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "limerick");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === S) {

                    };
                    if (direction === SW) {

                    };
                    if (direction === W) {

                    };
                    if (direction === NW) {

                    }; break;
                case 'kildare':
                    if (direction === N) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "wicklow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "dublin");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "carlow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "laois");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "offaly");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "offaly");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();


                    }; break;
                case 'galway':
                    if (direction === N) {
                        localStorage.setItem("whereAmI", "mayo");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "roscommon");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 4;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "offaly");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "tipperary");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "clare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SW) {


                    };
                    if (direction === W) {

                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "mayo");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();


                    }; break;
                case 'monaghan':
                    if (direction === N) {

                        localStorage.setItem("whereAmI", "tyrone");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "armagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "armagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "louth");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "cavan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "fermanagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "tyrone");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();


                    }; break;
                case 'carlow':

                    if (direction === N) {
                        localStorage.setItem("whereAmI", "kildare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "wicklow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "wicklow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 7;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "wexford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "wexford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "kilkenny");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 7;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "kilkenny");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 7;
                        playerColumn = 4;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === NW) {

                        localStorage.setItem("whereAmI", "laois");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    };



                    break;
                case 'armagh':

                    if (direction === N) {
                        localStorage.setItem("whereAmI", "antrim");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 9;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "down");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "down");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "louth");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 4;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "louth");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SW) {

                        localStorage.setItem("whereAmI", "monaghan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "monaghan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "tyrone");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 9;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();


                    }; break;

                case 'down': if (direction === N) {
                    localStorage.setItem("whereAmI", "antrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 9;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {

                    };
                    if (direction === E) {

                    };
                    if (direction === SE) {


                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "louth");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "armagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 7;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "armagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "antrim");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 9;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'westmeath': if (direction === N) {
                    localStorage.setItem("whereAmI", "cavan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 9;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "offaly");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === SW) {

                        localStorage.setItem("whereAmI", "roscommon");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "longford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "longford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();


                    }; break;
                case 'mayo': if (direction === N) {

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "sligo");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 7;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "roscommon");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "galway");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "galway");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "galway");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();


                    };
                    if (direction === W) {

                    };
                    if (direction === NW) {

                    }; break;
                case 'longford':
                    if (direction === N) {
                        localStorage.setItem("whereAmI", "cavan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "cavan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 7;
                        playerColumn = 4;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "roscommon");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "roscommon");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "longford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'kerry': if (direction === N) {

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "limerick");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 7;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "cork");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "cork");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {

                    };
                    if (direction === SW) {

                    };
                    if (direction === W) {

                    };
                    if (direction === NW) {

                    }; break;
                case 'meath': if (direction === N) {
                    localStorage.setItem("whereAmI", "monaghan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "louth");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {

                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "dublin");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "kildare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "offaly");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "longford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'kilkenny': if (direction === N) {
                    localStorage.setItem("whereAmI", "laois");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "laois");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "carlow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "wexford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "waterford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 7;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "waterford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "tipperary");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "tipperary");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'waterford': if (direction === N) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "kilkenny");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {

                    };
                    if (direction === SE) {

                    };
                    if (direction === S) {

                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "cork");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "cork");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "tipperary");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'laois': if (direction === N) {
                    localStorage.setItem("whereAmI", "offaly");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 6;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "kildare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "kildare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "carlow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "kilkenny");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "tipperary");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "offaly");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "offaly");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'sligo': if (direction === N) {

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "leitrim");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "leitrim");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "roscommon");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "roscommon");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "mayo");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "mayo");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {

                    }; break;
                case 'derry': if (direction === N) {

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "antrim");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "antrim");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "antrim");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "tyrone");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "tyrone");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "donegal");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {


                    }; break;
                case 'roscommon': if (direction === N) {
                    localStorage.setItem("whereAmI", "sligo");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 7;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "leitrim");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 4;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "longford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 7;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "offaly");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "galway");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "mayo");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "sligo");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'wicklow':

                    if (direction === N) {
                        localStorage.setItem("whereAmI", "dublin");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;

                        playerRow = 8;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap()

                    }


                    if (direction === NE) {

                    };
                    if (direction === E) {

                    };
                    if (direction === SE) {

                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "wexford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;

                        playerRow = 1
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap()
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "carlow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;

                        playerRow = 1;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap()

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "kildare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;

                        playerRow = 4;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap()
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "kildare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;

                        playerRow = 3;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap()

                    };
                    break;
                case 'cork': if (direction === N) {
                    localStorage.setItem("whereAmI", "limerick");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "tipperary");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "waterford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {

                    };
                    if (direction === S) {
                    };
                    if (direction === SW) {

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "kerry");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "kerry");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'fermanagh': if (direction === N) {
                    localStorage.setItem("whereAmI", "donegal");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "tyrone");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "monaghan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "monaghan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 6;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "cavan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 4;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "cavan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "leitrim");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "donegal");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 8;
                        playerColumn = 4;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'donegal': if (direction === N) {

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "derry");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "tyrone");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 2;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "fermanagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "fermanagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 4;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "leitrim");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {

                    };
                    if (direction === NW) {
                    }; break;
                case 'antrim': if (direction === N) {

                };
                    if (direction === NE) {

                    };
                    if (direction === E) {

                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "down");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "down");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "armagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "derry");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "derry");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 7;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'leitrim': if (direction === N) {
                    localStorage.setItem("whereAmI", "donegal");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 3;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "fermanagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "cavan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 3;
                        playerColumn = 1;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "cavan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 3;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "longford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "roscommon");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 2;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "sligo");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 4;
                        playerColumn = 8;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "sligo");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'dublin': if (direction === N) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 7;
                    playerColumn = 7;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {

                    };
                    if (direction === E) {

                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "wicklow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 6;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "wicklow");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 1;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "kildare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "kildare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'limerick': if (direction === N) {

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "clare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "tipperary");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "cork");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "cork");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "kerry");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "kerry");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {


                    }; break;
                case 'louth':

                    if (direction === N) {
                        localStorage.setItem("whereAmI", "armagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === NE) {


                    };
                    if (direction === E) {

                    };
                    if (direction === SE) {

                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "meath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "cavan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "monaghan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'tipperary': if (direction === N) {
                    localStorage.setItem("whereAmI", "offaly");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "laois");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "kilkenny");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "waterford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "waterford");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "cork");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "limerick");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "clare");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;

                case 'tyrone': if (direction === N) {
                    localStorage.setItem("whereAmI", "derry");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    refresh();
                    setMap();

                };
                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "derry");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === E) {
                        localStorage.setItem("whereAmI", "armagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === SE) {
                        localStorage.setItem("whereAmI", "armagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === S) {
                        localStorage.setItem("whereAmI", "monaghan");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === SW) {
                        localStorage.setItem("whereAmI", "fermanagh");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    };
                    if (direction === W) {
                        localStorage.setItem("whereAmI", "donegal");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();
                    };
                    if (direction === NW) {
                        localStorage.setItem("whereAmI", "donegal");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");

                        gameObjects[playerRow][playerColumn] = 0;
                        playerRow = 5;
                        playerColumn = 5;
                        animatePlayer();
                        refresh();
                        setMap();

                    }; break;
                case 'abroad': break;

                default: break;
            }
            $.getJSON('mapData.json', function (county) {

                $.each(county, function (key, val) {
                    console.log("val " + val.co)
                    console.log("val.county " + val.county)

                    if (val.co === imreoir.whereAmI) {
                        $('#output').html(val.county)
                        $('.emblem').attr("src","../../img/counties/icons/"+val.emblem+".png")

                        $('.emblem-img').attr("src","./emblems/"+val.emblem+".png")
                       


                        map = JSON.parse(val.mapData);
                        console.log(val.mapData);

                        $('.countyMap').css('left', val.left)
                        $('.countyMap').css('top', val.top)
                        $('.countyMap').css('background-image', val.countyBG)
                        console.log('imreoir where am I?' + imreoir.whereAmI)


                        console.log("line 123" + val.co)
                        newLocations = val.locations;
                        newLocationsEng = val.locationsEng
                        console.log(newLocations)
                        console.log(newLocationsEng)
                    }
                    else {
                        console.log("does > > > >" + imreoir.whereAmI + " match  error loading map.")
                    }


                });


            })

        }
        let playerDetails = {};


        $.getJSON('mapData.json', function (county) {

            $.each(county, function (key, val) {
                console.log("val " + val.co)
                console.log("val.county " + val.county)
                if (val.co === imreoir.whereAmI) {
                    console.log("line 112!!!!!:" + val.county);
                    map = JSON.parse(val.mapData);
                    console.log("OOOOOOO"+val.mapData);
                    console.log("OOOOOOO"+val.mapData);

                    $('.countyMap').css('left', val.left)
                    $('.countyMap').css('top', val.top)
                    $('.countyMap').css('background-image', val.countyBG)
                    console.log('imreoir where am I?' + imreoir.whereAmI)
                    // $('.countyMap').css('animation', 'zoom-to-' + imreoir.whereAmI + ' 2s forwards ease-in');


                    console.log("line 123" + val.co)

                }
                else {
                    console.log(whereAmI + 'whereAmI');
                    console.log("does" + imreoir.whereAmI + " match error loading map.")
                }


            });


        })

        console.log("line 108" + imreoir.whereAmI);
        imreoir.whereAmI = localStorage.getItem("whereAmI")

        imreoir.avatar = setPlayerIcon();
        console.log("imreoir.avatar: " + imreoir.avatar)
        imreoir.slí = localStorage.getItem("slí")
        imreoir.from = localStorage.getItem("from")


        function travel(direction) {
            console.log('travelling...' + direction)
            imreoir.whereAmI = localStorage.getItem("whereAmI");
            console.log('whereAmI...' + imreoir.whereAmI);

            switch (direction) {
                case 2:
                    break;
                case 9: playerDetails.whereAmI = 'derry';
                    console.log('travelling to Derry...')

                    break;
                case 8: playerDetails.whereAmI = 'tyrone';
                    break;
                case 7: playerDetails.whereAmI = 'fermanagh';
                    break;
                case 6: playerDetails.whereAmI = 'leitrim'
                    break;
                case 5:
                    break;
                case 4:
                    break;
                case 3:
                    break;
                case N:
                    alert(playerDetails.whereAmI)

                    break;
                case NE:
                    alert(playerDetails.whereAmI)

                    break;
                default:
                    break;
            }

            // alert('now ajax put...')
            $.ajax('/updatePlayer', {
                type: 'POST',
                data: playerDetails,
                success: function (res) {
                    imreoir = JSON.stringify(res);
                    console.log(imreoir + "hey here- ajax request update player ...success.")
                    window.location.replace('http://167.172.184.73:3000/' + localStorage.get('whereAmI'));
                }
            })
        }

        var map =
            [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];

        //The game objects map
        var gameObjects =
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, "G", 0, 0, 0, 0],
                [0, 0, 0, 0, 0, "C", 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, "P", 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];

        var playerRow;
        var playerColumn;

        //Get a reference to the stage and output
        var stage = document.querySelector("#stage");
        var output = document.querySelector("#output");
        function readyLocationEng(locEng) { 
            
            $('#locEng').html(newLocationsEng[locEng])
            
        }
        function readyLocation(loc) {
            if (imreoir.whereAmI != "geaga") { 

                $('#btn-b').css('display','block');
                $('#btn-b').fadeIn();
            }
           
            $('#loc').html(newLocations[loc])

            $('.big-btn-img').fadeIn();
            playerOverLocation = true;
        }

        function clearLocation() {
            $('#loc').html("")
            $('#locEng').html("")
            $('.big-btn-img').fadeOut();
            playerOverLocation = false;

        }
        //Add a keyboard listener
        window.addEventListener("keydown", keydownHandler, false);
        let mapMenuIsVisible = false;
        let keyboardActive = true;
        //The game map
        var lastPressed = '0'; //what was the last key pressed?

        // leave player facing the last touched direction:

        //   var playerFacing='../img/characters/feitheamh1.gif'

        //Map code
        var EXIT = "*";
        var EMPTY = 0;
        var BLOCKED = 1;
        var N = 2;
        var NE = 9;
        var E = 8;
        var SE = 7;
        var S = 6;
        var SW = 5;
        var W = 4;
        var NW = 3;
        var PLAYER = "P";
        var GEAGA = "G";
        var CONTACT = "C"; //a
        var location0 = 30;
        var location1 = 31;
        var location2 = 32;
        var location3 = 33;
        var location4 = 34;
        var location5 = 35;
        //The size of each cell
        var SIZE = 10;

        //The number of rows and columns
        var ROWS = map.length;
        var COLUMNS = map[0].length;

        //Arrow key codes
        var UP = 38;
        var DOWN = 40;
        var RIGHT = 39;
        var LEFT = 37;

        //An automatic way of setting the player's start position
        var geagaRow;
        var geagaColumn;
        var contactColumn;
        var contactRow;

        for (var row = 0; row < ROWS; row++) {
            for (var column = 0; column < COLUMNS; column++) {
                if (gameObjects[row][column] === PLAYER) {
                    playerRow = row;
                    playerColumn = column;
                }

                if (gameObjects[row][column] === GEAGA) {

                    geagaRow = row;
                    geagaColumn = column;
                }


            }
            // gameObjects[playerRow][playerColumn] = '../../img/characters/feitheamh1.gif'
            // gameObjects[geagaRow][geagaColumn] = '../../img/geaga.png'
            // console.log("geaga xy" + gameObjects[geagaRow][geagaColumn])
        }


        for (row = 0; row < ROWS; row++) {
            for (column = 0; column < COLUMNS; column++) {
                if (gameObjects[row][column] === PLAYER) {
                    playerRow = row;
                    playerColumn = column;
                }
                // if (gameObjects[row][column] === CONTACT) {
                //     contactRow = row;
                //     contactColumn = column;
                // }
                if (gameObjects[row][column] === GEAGA) {
                    geagaRow = row;
                    geagaColumn = column;
                }


            }
        }
        function updateEventReport(report) {
            $('#event-report').html(report)
            $('#event-report').fadeIn()
            setTimeout(function(){
                $('#event-report').fadeOut()

            },1500)
         }        $('#north').on('touchstart', function () {
            // playerFacing = imreoir.avatar;
             updateEventReport('ó thuaidh')
             
             
            if (playerRow > 0) {
                lastPressed = 'up';

                gameObjects[playerRow][playerColumn] = 0;

                playerRow--;
                animatePlayer();
                keydownHandler('up');

            }


        });

        $('#south').on('touchstart', function () {
            // !keyboardActive;
            updateEventReport('ó dheas')

            function handleFirstDown() {
                // keyboardActive;
                $('#océ').css('visibility', 'visible');
            }
            setTimeout(handleFirstDown, 2000);
            //override bug where player moves south then turns to face south with this jq :
            $('#hero').attr('src', setPlayerIcon());

            // playerFacing = imreoir.avatar;

            if (keyboardActive) {
                if (playerRow < ROWS - 1) {

                    lastPressed = 'down';
                    gameObjects[playerRow][playerColumn] = ROWS - 0;
                    playerRow++;
                    animatePlayer();
                    keydownHandler('down');
                }

            }
        });
        $('#east').on('touchstart', function () {
            // playerFacing = imreoir.avatar;
            updateEventReport('soir')

            if (playerColumn < COLUMNS - 1) {
                gameObjects[playerRow][playerColumn] = 0;
                playerColumn++;

                lastPressed = 'right';
                animatePlayer();
            }

            keydownHandler('right');

        });
        $('#west').on('touchstart', function () {
            updateEventReport('siar')



            // playerFacing = imreoir.avatar;

            if (playerColumn > 0) {
                gameObjects[playerRow][playerColumn] = 0;
                playerColumn--;
                lastPressed = 'left';
                animatePlayer();
            }
            keydownHandler('left');


        });


        refresh();
        // jQuery.fx.off = false;

        //   refresh();
        // jQuery.fx.off = false;
        function animatePlayer() {
            let cellWidth = Math.floor(document.getElementById("stage").clientWidth / 10);
            let cellHeight = Math.floor(document.getElementById("stage").clientHeight / 10);
            console.log(cellHeight)
            console.log(cellWidth)
            setTimeout(function () {
                // alert('waiting...')
                refresh();
            }, 210);
            if (lastPressed === 'left') {

                $('#hero').attr('src', setPlayerIcon())
                $('#hero').animate({ left: playerColumn * cellWidth }, 200, 'linear');

            } else if (lastPressed === 'right') {
                $('#hero').attr('src', setPlayerIcon())

                $('#hero').animate({ left: playerColumn * cellWidth }, 200, 'linear');
            } else if (lastPressed === 'up') {
                $('#hero').attr('src', setPlayerIcon())

                $('#hero').animate({ top: playerRow * cellHeight }, 200, 'linear');
            } else if (lastPressed === 'down') {
                $('#hero').animate({ top: playerRow * cellHeight }, 200, 'linear');
            }

            gameObjects[playerRow][playerColumn] = PLAYER;
            gameObjects[geagaRow][geagaColumn] = GEAGA;
            /*Player makes contact with an npc - one of geaga's costumes, perhaps.*/
            
            // gameObjects[contactRow][contactColumn] = CONTACT
            // if (gameObjects[contactRow][contactColumn] === gameObjects[playerRow][playerColumn]) {
                
          
                
                // window.location.replace('http://167.172.184.73:1337/contact');
            
        //         $('#output2').fadeIn();
        //         setTimeout(function(){ 
        //             $('.input-elements-container2').css('display', 'flex');
        //             $('.input-elements-container2').fadeIn();

        //         },1000)

        //         $('#silken').fadeIn();
        //         $('#silken').css('display', 'block');
        //     }

         };

        function keydownHandler(direction) {
            if (keyboardActive) {
                // eslint-disable-next-line no-restricted-globals
                switch (event.keyCode) {
                    case UP:
                        if (playerRow > 0) {
                            lastPressed = 'up';

                            gameObjects[playerRow][playerColumn] = 0;

                            playerRow--;
                            animatePlayer();

                        }
                        break;

                    case DOWN:
                        if (playerRow < ROWS - 1) {
                            lastPressed = 'down';
                            gameObjects[playerRow][playerColumn] = ROWS - 0;
                            playerRow++;
                            animatePlayer();
                        }
                        break;

                    case LEFT:
                        if (playerColumn > 1) {
                            gameObjects[playerRow][playerColumn] = 1;
                            playerColumn--;
                            lastPressed = 'left';
                            animatePlayer();
                        }
                        break;

                    case RIGHT:
                        if (playerColumn < COLUMNS - 1) {
                            gameObjects[playerRow][playerColumn] = 0;
                            playerColumn++;

                            lastPressed = 'right';
                            animatePlayer();
                        }
                        break;
                    default: break;
                }

                //find out what kind of cell the player is on
                switch (map[playerRow][playerColumn]) {
                    case EMPTY:
                        clearLocation();
                        $('#btn-b').fadeOut()
                        break;
                    case N:
                        loadMap(N)
                        break;

                    case NE:
                        loadMap(NE)
                        break;
                    case E:
                        loadMap(E)
                        break;
                    case SE:
                        loadMap(SE)
                        break;
                    case S:
                        loadMap(S)
                        break;
                    case SW:
                        loadMap(SW)
                        break;
                    case W:
                        loadMap(W)
                        break;
                    case NW:
                        loadMap(NW)

                        break;
                    case location0:
                        readyLocation(0)
                        readyLocationEng(0)

                        break;

                    case location1:
                        readyLocation(1)
                        readyLocationEng(1)
                        break;
                    case location2:
                        readyLocation(2)
                        readyLocationEng(2)

                        break;
                    case location3:
                        readyLocation(3)
                        readyLocationEng(3)

                        break;
                    case location4:
                        readyLocation(4)
                        readyLocationEng(4)

                        break;
                    case location5:
                        readyLocation(5)
                        readyLocationEng(5)

                        break;
                    case EXIT:
                        returnToCounty(); break
                    default: break;
                }

                //Find out if the ship is touching the monster

            }
            if (!mapMenuIsVisible) {
                switch (map[playerRow][playerColumn]) {

                    case BLOCKED:
                        //Undo last key press
                        //   alert('blocked!');
                        //   alert('Blocked' + lastPressed + Cookies.get('locationID'));
                        blockPath();
                        break;
                    case GEAGA: helloGeaga(); break;
                    case N: travel(N); break;
                    case NE: travel(NE); break;
                    case E: travel(E); break;
                    case SE: travel(SE); break;
                    case S: travel(S); break;
                    case SW: travel(SW); break;
                    case W: travel(W); break;
                    case NW: travel(NW); break;
                    default: break;


                }
            }


        }

        helloGeaga();

        // function goBackOneSquare() {
        //     if (lastPressed === 'up') {
        //         gameObjects[playerRow][playerColumn] = 0;
        //         playerRow++;
        //         gameObjects[playerRow][playerColumn] = PLAYER;
        //     } else if (lastPressed === 'down') {
        //         gameObjects[playerRow][playerColumn] = 0;
        //         playerRow--;
        //         gameObjects[playerRow][playerColumn] = PLAYER;
        //     } else if (lastPressed === 'left') {
        //         gameObjects[playerRow][playerColumn] = 0;
        //         playerColumn++;
        //         gameObjects[playerRow][playerColumn] = PLAYER;
        //     } else if (lastPressed === 'right') {
        //         gameObjects[playerRow][playerColumn] = 0;
        //         playerColumn--;
        //         gameObjects[playerRow][playerColumn] = PLAYER;
        //     }
        // };

        function blockPath() {
            switch (lastPressed) {
                case 'down':

                    gameObjects[playerRow][playerColumn] = BLOCKED;

                    playerRow--;

                    //Apply the player's new updated position to the array
                    gameObjects[playerRow][playerColumn] = PLAYER;

                    break;

                case 'up':
                    gameObjects[playerRow][playerColumn] = BLOCKED;

                    playerRow++;
                    gameObjects[playerRow][playerColumn] = PLAYER;

                    break;

                case 'right':
                    gameObjects[playerRow][playerColumn] = BLOCKED;

                    playerColumn--;
                    gameObjects[playerRow][playerColumn] = PLAYER;

                    break;

                case 'left':
                    gameObjects[playerRow][playerColumn] = BLOCKED;

                    playerColumn++;
                    gameObjects[playerRow][playerColumn] = PLAYER;
                    break;
                default: break;
            }
            refresh()


        }
        function refresh() {
            //Clear the stage of img cells
            //from the previous turn
             whereAmI = localStorage.getItem('whereAmI')

            if (stage.hasChildNodes()) {
                for (var i = 0; i < ROWS * COLUMNS; i++) {
                    stage.removeChild(stage.firstChild);
                }
            }

            //refresh the game by looping through the map arrays
            for (var row = 0; row < ROWS; row++) {
                for (var column = 0; column < COLUMNS; column++) {
                    //Create a img tag called cell
                    var cell = document.createElement("img");

                    //Set it's CSS class to "cell"
                    cell.setAttribute("class", "cell");
                    cell.setAttribute("id", "cell");

                    //Add the img tag to the <div id="stage"> tag
                    stage.appendChild(cell);

                    //Find the correct image for this map cell
                    switch (map[row][column]) {


                        case EMPTY:
                            cell.src = empty;
                            break;

                        case BLOCKED:
                            cell.src = blocked;
                            break;
                        case NE:
                            cell.src = empty;
                            break; case E:
                            cell.src = empty;
                            break; case SE:
                            cell.src = empty;
                            break; case S:
                            cell.src = empty;
                            break; case SW:
                            cell.src = empty;
                            break; case W:
                            cell.src = empty;
                            break; case NW:
                            cell.src = empty;

                            break; case N:
                            cell.src = empty;
                            break;

                        case GEAGA:
                            cell.src = ""; break;
                        case CONTACT:
                            cell.src = "../../img/contact.png";
                            break;
                        case location0:
                            cell.src = town0
                            break;
                        case location1:
                            cell.src = town0
                            break;
                        case location2:
                            cell.src = town0
                            break;
                        case location3:
                            cell.src = town0
                            break;
                        case location4:
                            cell.src = town0
                            break;
                        case location5:
                            cell.src = town0
                            break;
                        case EXIT:
                            cell.src = empty;

                            break;
                        default: break;
                    }

                    //Add the player from the gameObjects array
                    switch (gameObjects[row][column]) {
                        case PLAYER:
                            cell.src = setPlayerIcon();
                            cell.id = 'hero';

                            break;
                        case GEAGA:
                            if(imreoir.whereAmI==="geaga")cell.src =  setGeagaIcon(empty) ;
                            
                            cell.id = 'geaga'
                            break;
                        // case CONTACT:
                        //     cell.src = setIcon(empty);
                        //     if(imreoir.whereAmI==="geaga")cell.id='contact'
                        //     break;
                        default: break;
                    }

                    //Position the cell 
                    cell.style.top = row * SIZE + "%";
                    cell.style.left = column * SIZE + "%";


                }

            }


        }

        setTimeout(function () {
            // $('#stage').css('opacity', '0.6');
            setPlayerIcon();
            $('#stage').fadeIn();
            $('.toolbar').fadeIn();

        }, 1300)
        //   document.getElementById('myVideo').addEventListener('ended',myHandler,false);
        // function myHandler(e) {
        //     alert();
        //     //   document.querySelector("#myVideo > source").src = "./fís/map1.mp4"
        //     // What you want to do after the event
        // }




        //item5 onclick toggle mode
        // let overworldModeB, overworldModeA;
        // overworldModeB = true; overworldModeA = false;
        // function toggleOverWorldMode () {
        //     if (overworldModeB) {
        //         overworldModeA = true;
        //         console.log('overworldmodeB = ' + overworldModeB)
        //         console.log('overworldmodeA = ' + overworldModeA)
        //         $('#shield-holder').fadeIn()
        //         $('#stage').addClass('shiroi')
        //         $('#stageBG').addClass('shiroi')


        //         overworldModeB = false;
        //     } else {
        //         $('#stage').removeClass('shiroi')

        //         overworldModeB = true;
        //         overworldModeA = false;
        //         console.log('overworldmodeA = ' + overworldModeA)
        //         console.log('overworldmodeB = ' + overworldModeB)
        //         $('#shield-holder').fadeOut()

        //     }

        // }


        $('.item5').on('touchend', function () {
            if (playerOverLocation) {
                // enterLocation(loc)
                alert('')
            }
            else {
                // toggleOverWorldMode()
            }
        })

        let whereAbouts;
        function helloGeaga() {
            whereAmI = whereAmIHolder;
            imreoir.whereAmI = whereAmI;
            // $('#register').removeClass('hidden')
            $('.geaga').fadeOut();

       
            $('.canopy-left').fadeOut();
            $('.countyMap').fadeIn();
            $('.canopy-right').fadeOut();
            $('#geagaSprite').fadeOut();
            console.log('whereAmI' + whereAmI)
            localStorage.setItem('whereAmI', whereAmI);
            let secondLocationId = localStorage.getItem('secondLocationId');
            // secondLocation = eascaLocations[secondLocationId]
            alert('Beidh muid ag siúl leat i '+  secondLocation +' anocht!')
            returnToCounty();
            refresh();
            $('.countyMap').fadeIn();
        }
        function returnToCounty() {

            $.getJSON('mapData.json', function (county) {
                $.each(county, function (key, val) {
                    // console.log("val ************" + val.co)
                    // console.log("val.county " + val.county)

                    if (val.co === imreoir.whereAmI) {
                        $('#output').html(val.county)
                        // $('.emblem').attr('src', '../../img/counties/icons/' + localStorage.getItem('whereAmI')+'.png')
                        console.log("line 112:" + val.county);
                        map = JSON.parse(val.mapData);
                        console.log(val.mapData);

                        $('.countyMap').css('left', val.left)
                        $('.countyMap').css('top', val.top)
                        $('.countyMap').css('background-image', val.countyBG)
                        console.log('imreoir where am I?' + imreoir.whereAmI)



                        console.log("line 123" + val.co)
                        newLocations = val.locations;
                        newLocationsEng = val.locationsEng;
                        console.log(newLocations)
                    }
                    else {
                        console.log("does" + imreoir.whereAmI + " match " + "error loading map.");

                        console.log(whereAmI + 'whereAmI');

                    }


                });


            })
            // localStorage.setItem("whereAmI","Dublin")
            imreoir.whereAmI = localStorage.getItem("whereAmI");

            gameObjects[playerRow][playerColumn] = 0;
            playerRow = 3;
            playerColumn = 4;
            animatePlayer();
            refresh();
            setMap();
        }
        // function enterLocation(location) {
        //     whereAbouts = $('#loc').html()
        //     // alert(whereAbouts);

        //     $.getJSON('whereAbouts.json', function (whereAbouts) {

        //         $.each(whereAbouts, function (key, val) {

        //             if ($('#loc').html() === val.whereAbouts) {


        //                 // console.log("val " + val.co)
        //                 // console.log("val.county " + val.county)
        //                 $('.countyMap').css('background-image', val.background)
        //                 // map = val.map;
        //                 map =
        //                     [
        //                         ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
        //                         ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
        //                         ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
        //                         ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
        //                         ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
        //                         ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
        //                         ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
        //                         ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
        //                         ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
        //                         ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
        //                     ];
        //                 refresh();

        //             }
        //         });


        //     })
        // }

    }

    toggleStartOptions() {
        $('.start-options').css('display', 'grid');
        setTimeout(function () {
            $('.start-options').css('display', 'none');

        }, 2500)
    }

    toggleSelectOptions() {
        $('.select-options').css('display', 'grid');
        setTimeout(function () {
            $('.select-options').css('display', 'none');

        }, 3500)
    }
    
    componentDidMount() {
        this.jQueryCode();
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }
    conceptHandler() {
        window.location.replace('http://167.172.184.73:3000/history')
    }
    render() {

let        heroName = this.props.heroName
        avatar = this.props.avatar;
        whereAmIHolder = this.props.whereAmI;
        console.log(whereAmIHolder + 'whereAmIHolder');
        console.log(whereAmI + 'whereAmI');
        whereAmI = localStorage.getItem('whereAmI');
        
        let runInventory = function() { 
            alert('inv')
        }
        let runStats = function() { 
            alert('stats')
        }
        let runDisk = function() { 
            this.setState({diskVisible: true })
        }
        return (
            <div >
    <div className="bg"></div>






               
               
                <div id="toolbar"></div>
                

                <div className="ui">



                </div>



                <div id="screen-blocker">
                    <div className="container screen-blocker">
                        <div className="col-xs-4 gaeilge screen-blocker">
                        </div>
                    </div>
                </div>
                <div className="start-options">
                    <button className="start-options-button" onTouchStart={this.conceptHandler}>concept</button>
                    <button className="start-options-button" onTouchStart={() => { this.setState({ registerMenu: true }) }}>{this.props.engMode === true ? "register" : "cláraigh"}</button>
                </div>

                {this.state.mobile ? <div id='prompt-hor'>  <>


                    <video autoPlay muted loop id="prompt-vid"><source src={promptVid} type="video/mp4" alt=" remember the dream speed of falling and fly along the memory of wind" /></video>
                    <h2 className="mobile-mode">I gcomhair cuirteoirí ar ríomhaire baile, brú <span id="f12">f12</span> nó clé-clic agus roghnaigh <span id="inspect">inspect</span>, le do thoil. Ansin roghnaigh </h2><img alt="toggle mobile icon" src={mobile}></img> <p>chun aithris a dhéanamh ar gléas soghluaiste   |   to simulate mobile device</p></><br />
                    <img id="ciaroga" src={ciaroga} />
                </div> : null
                }
           


                {/* registration resources */}

                {/* {this.state.registerMenu ? <Register /> : null} */}
           


<div className="directional-pad">
    <div className='grid-container'>

        <div className="grid-item"></div>
        <div className="grid-item" id="north">
        </div>
        <div className="grid-item" ></div>
        <div className="grid-item" id="west">
        </div>
        <div className="grid-item" id="btn-m"><div id="btn-middle-baile" /></div>
        <div className="grid-item" id="east">
        </div>
        <div className="grid-item"></div>
        <div className="grid-item" id="south">
        </div>
        <div className="grid-item"></div>
    </div>





</div>            

<img id="mob-effect" className="phonebg2"src={phone1} alt="" />

<h2 id="loc" alt="holder for location names"></h2>
                <h2 id="locEng" className={this.state.isOn? null:"locDown"} alt="holder for location names English"></h2>

               
                <div className="map-lens-container">
 
 
                <div className="sea"></div>
                <div className="stage-container" id="kungfu">
                    <div className="countyMap">


                    </div>

                    <div id="stage" >
                    </div>


                </div>
  { this.state.showEascaLocation? <EascaLocation/>:null}

 
                    <img className="map-lens" src={lens} alt="" />
               </div>
                    <div className="emblem-container">
                    {/* show emblem on enter new county */}
                    {whereAmI === 'geaga' ? <img src={geaga} alt="county pixelart emblem." className="emblem-img" /> : null}
                    {whereAmI === 'antrim' ? <img src={antrim} alt="county pixelart emblem." className="emblem-img" /> : null}
                    {whereAmI === 'armagh' ? <img src={armagh} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'cavan' ? <img src={cavan} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'clare' ? <img src={clare} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'cork' ? <img src={cork} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'derry' ? <img src={derry} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'donegal' ? <img src={donegal} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'down' ? <img src={down} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'dublin' ? <img src={dublin} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'fermanagh' ? <img src={fermanagh} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'galway' ? <img src={galway} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'kerry' ? <img src={kerry} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'kildare' ? <img src={kildare} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'kilkenny' ? <img src={kilkenny} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'laois' ? <img src={laois} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'leitrim' ? <img src={leitrim} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'limerick' ? <img src={limerick} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'longford' ? <img src={longford} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'louth' ? <img src={louth} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'mayo' ? <img src={mayo} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'meath' ? <img src={meath} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'monaghan' ? <img src={monaghan} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'offaly' ? <img src={offaly} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'roscommon' ? <img src={roscommon} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'sligo' ? <img src={sligo} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'tipperary' ? <img src={tipperary} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'tyrone' ? <img src={tyrone} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'waterford' ? <img src={waterford} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'westmeath' ? <img src={westmeath} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'wexford' ? <img src={wexford} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'wicklow' ? <img src={wicklow} alt="county pixelart emblem." className="emblem-img" /> :null}
                    {whereAmI === 'other' ? <img src={other} alt="county pixelart emblem." className="emblem-img" /> : null}
                    <p id="output"></p>
                </div> 
               <button id="toggle-glass-btn2" onClick={()=>{
                    if (this.state.isOn) {
                        this.setState({ isOn: false })
                        console.log("hi from toggle glass")
				
                    
                    }
                    else {
                        (this.setState({ isOn: true }))
                        console.log("hi from toggle glass")
                    
                    
                    }
                    {/* setTimeout(()=> { this.setState({ isOn: false }) }, 3000) */}
                        

                
                }}	><img src={this.state.isOn ? pearl : emerald} id="blank" alt="a crystal or precious stone toggle on off button" /></button>

                <div ><img id="portrait" src={portrait}></img>
                

 </div>
 
 {this.state.isOn ? (<div id="glass">
				<></>
                    < img src={glass} className="question-img" id="glass-img" alt="glass bg for translucent overlay effect." />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 id="eng-notes" > {engNotes[NarrativeCode]}</h2>
                    
                    <div id="event-report"></div>
                    <div id="ui-container">

                    <img src={stats} alt="" className="stats"onClick={() => {
                            if (this.state.statsVisible) {
                                this.setState({ statsVisible: false })
				
                    
                            }
                            else {
                                (this.setState({ statsVisible: true }))
                    
                    
                            }
                        }}  />
                        
                        <img src={disk} alt="" className="disk" onClick={() => {
                            if (this.state.diskVisible) {
                                this.setState({ diskVisible: false })
				
                    
                            }
                            else {
                                (this.setState({ diskVisible: true }))
                    
                    
                            }
                        }} />
<img src={inv} alt="" className="inventory" onClick={() => {
                            if (this.state.inventoryVisible) {
                                this.setState({ inventoryVisible: false })
				
                    
                            }
                            else {
                                (this.setState({ inventoryVisible: true }))
                    
                    
                            }
                        }}  />
                    </div>
 
                    <img src={ this.state.diskVisible? diskMenu: null} alt="" className="diskMenu" />                   
                    <img src={ this.state.statsVisible? statsMenu: null} alt="" className="statsMenu" />                   
                    <img src={this.state.inventoryVisible? invMenu: null } alt="" className="invMenu" />                   
                </div>) : null}
                <Silken id="silken"></Silken>
                <h2 id="output2"> "{ heroName}!"</h2>
            <Rings1/>

            <BtnB id="b-btn" onClick={() => {
  
                    this.setState({showEascaLocation:true})
  
  }} ></BtnB>

  <ReactAudioPlayer src={whereAmI==="westmeath"?jam:null } autoPlay />
           
            </div>

        )
    }

}