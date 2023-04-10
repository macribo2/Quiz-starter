import React from 'react';
import './overworld.css';
import NumberOne from '../numberOne/numberOne' 
import ReactRain from 'react-rain-animation';
import bit from '../../images/gifs/bit.gif'
import "react-rain-animation/lib/style.css";
import Easca from '../easca/easca2'
import {Rings5} from '../Rings/Rings5'
import '../Rings/rings1.css';
import emerald from '../../images/misc_crystal_new.png'
import pearl from '../../images/stone-soup/misc_crystal_old.png';
import lens from '../../images/ciorcal-glass4.png';
import stats from '../../images/inv/char.png';
import disk from '../../images/inv/diskette.png';
import chat from '../../images/inv/chat.png';
import {  Redirect, useLocation } from "react-router-dom";
import daff from '../../images/localMaps/daff.gif'
import portrait from '../../images/empty.png'
import { BtnB } from './../ui/btn-b';
import promptVid from '../../images/stars.gif'
import ciaroga from '../../images/players/agnes_new.png'
import phone1 from '../../images/phone-0.png';
import glass from '../../images/big-glass.png';
import defaultField from '../../images/localMaps/defaultField.png';
import collinstown from '../../images/localMaps/collinstown.png';
import fernaRiver from '../../images/localMaps/dungeonfog.png';
import ferna from '../../images/localMaps/dungeonfog.png';
import statsMenu from '../../images/fog3.png';
import invMenu from '../../images/inv/inv-bg.png';
import diskMenu from '../../images/blackripple.gif';
import Battle from '../battle/battle0'
import EascaLocation from '../easca-location/easca-location'
import rocks from '../../images/rocks.png'

import gigakoops from '../../audio/Gigakoops - Level 2 - High Clouds.mp3'
import jam from '../../audio/ultima-tone-long.wav'
import ReactAudioPlayer from 'react-audio-player';
// import county emblems

import Rings1 from '../Rings/Rings1'


// import { Register } from './../register/register'
import $ from 'jquery';
import empty from "../../images/empty.png"
import shamrocks from "../../images/overworld/shamrock.png"
import geaga from "../../images/yin-yan.png"
//empty image for geaga beceause they're just handlers for player triggering geaga event. Geaga image now in geagaSprite
import ringIcon from '../../images/gold.png'
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
import agnes2 from '../../images/players/bodach0.gif';
import og from '../../images/a-btn.png'
import ringItem from '../../images/stone-soup/expired_portal.png';
import mobile from '../../images/players/rógaire0.png'

import champion1 from '../../images/champions/1.png'
import champion2 from '../../images/champions/2.png'
import champion3 from '../../images/champions/3.png'
import champion4 from '../../images/champions/4.png'
import champion5 from '../../images/champions/5.png'
import champion6 from '../../images/champions/6.png'
import champion7 from '../../images/champions/7.png'
import champion8 from '../../images/champions/8.png'
import champion9 from '../../images/champions/9.png'
import champion10 from '../../images/champions/10.png'
import champion11 from '../../images/champions/11.png'
import champion12 from '../../images/champions/12.png'
import champion13 from '../../images/champions/13.png'
import champion14 from '../../images/champions/14.png'
import champion15 from '../../images/champions/15.png'
import champion16 from '../../images/champions/16.png'
import champion17 from '../../images/champions/17.png'
import champion18 from '../../images/champions/18.png'
import champion19 from '../../images/champions/19.png'
import champion20 from '../../images/champions/20.png'
import champion21 from '../../images/champions/21.png'
import champion22 from '../../images/champions/22.png'
import champion23 from '../../images/champions/23.png'
import champion24 from '../../images/champions/24.png'
import champion25 from '../../images/champions/25.png'
import champion26 from '../../images/champions/26.png'
import champion27 from '../../images/champions/27.png'
import champion28 from '../../images/champions/28.png'
import champion29 from '../../images/champions/29.png'
import champion30 from '../../images/champions/30.png'
import champion31 from '../../images/champions/31.png'
import champion32 from '../../images/champions/32.png'
import champion33 from '../../images/champions/33.png'
import champion34 from '../../images/champions/34.png'
import champion35 from '../../images/champions/35.png'
import champion36 from '../../images/champions/36.png'
import champion37 from '../../images/champions/37.png'
import champion38 from '../../images/champions/38.png'
import champion39 from '../../images/champions/39.png'
import champion40 from '../../images/champions/40.png'
import champion41 from '../../images/champions/41.png'
import champion42 from '../../images/champions/42.png'
import champion43 from '../../images/champions/43.png'
import champion44 from '../../images/champions/44.png'
import champion45 from '../../images/champions/45.png'
import champion46 from '../../images/champions/46.png'
import champion47 from '../../images/champions/47.png'
import champion48 from '../../images/champions/48.png'
import champion49 from '../../images/champions/49.png'
import champion50 from '../../images/champions/50.png'
import champion51 from '../../images/champions/51.png'
import champion52 from '../../images/champions/52.png'
import champion53 from '../../images/champions/53.png'
import champion54 from '../../images/champions/54.png'
import champion55 from '../../images/champions/55.png'
import champion56 from '../../images/champions/56.png'
import champion57 from '../../images/champions/57.png'
import champion58 from '../../images/champions/58.png'
import champion59 from '../../images/champions/59.png'
import champion60 from '../../images/champions/60.png'
import champion61 from '../../images/champions/61.png'
import champion62 from '../../images/champions/62.png'
import champion63 from '../../images/champions/63.png'
import champion64 from '../../images/champions/64.png'
import champion65 from '../../images/champions/65.png'
import champion66 from '../../images/champions/66.png'
import champion67 from '../../images/champions/67.png'
import champion68 from '../../images/champions/68.png'
import champion69 from '../../images/champions/69.png'
import champion70 from '../../images/champions/70.png'
import champion71 from '../../images/champions/71.png'
import champion72 from '../../images/champions/72.png'
import champion73 from '../../images/champions/73.png'
import champion74 from '../../images/champions/74.png'
import champion75 from '../../images/champions/75.png'
import champion76 from '../../images/champions/76.png'
import champion77 from '../../images/champions/77.png'
import champion78 from '../../images/champions/78.png'
import champion79 from '../../images/champions/79.png'
import champion80 from '../../images/champions/80.png'
import champion81 from '../../images/champions/81.png'
import champion82 from '../../images/champions/82.png'
import champion83 from '../../images/champions/83.png'
import champion84 from '../../images/champions/84.png'
import champion85 from '../../images/champions/85.png'
import champion86 from '../../images/champions/86.png'
import champion87 from '../../images/champions/87.png'
import champion88 from '../../images/champions/88.png'
import champion89 from '../../images/champions/89.png'
import champion90 from '../../images/champions/90.png'
import champion91 from '../../images/champions/91.png'
import champion92 from '../../images/champions/92.png'
import champion93 from '../../images/champions/93.png'
import champion94 from '../../images/champions/94.png'
import champion95 from '../../images/champions/95.png'
import champion96 from '../../images/champions/96.png'
import champion97 from '../../images/champions/97.png'
import champion98 from '../../images/champions/98.png'
import champion99 from '../../images/champions/99.png'
let whereAmI = 'geaga';
let secondLocationId = 3//localStorage.getItem('secondLocationId');
let mapChanges = 0;
let overworldPortrait;
let whereAmIHolder = 'null';
let avatar = "";

let secondLocation = "Dún Laoghaire";
function setGeagaIcon(icon) { 
return icon
}
function setIcon(icon) { 
    return icon
}
let stillPressedNorth;
let stillPressedSouth;
let stillPressedEast;
let stillPressedWest;
let whereAbouts;
let engNotes = ['From 0 to 1',
"Antrim, Aontroim, lone dwelling",
"Armagh, Ard Mhacha, Macha's height",
"Carlow, Ceatharlach, place of cattle",
"Cavan",
"Clare",
"Cork",
"Derry",
"Donegal",
"Down",
"Dublin",
"Fermanagh",
"Galway",
"Kerry",
"Kildare",
"Kilkenny",
"Laois",
"Leitrim",
"Limerick",
"Longford",
"Louth",
"Mayo",
"Meath",
"Monaghan",
"Offaly",
"Roscommon",
"Sligo",
"Tipperary",
"Tyrone",
"Waterford",
"Westmeath, An tIarmhí",
"Wexford",
    "Wicklow, meadow of the Vikings. Cill Mhantáin from Church of Mantan",
""

];
let narrativeCode = 0;

/*block android long click menu*/
window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};
function setPlayerIcon() {
    overworldPortrait = localStorage.getItem('quest-portrait');
    
    // { localStorage.setItem('portrait',"")}
    
    switch (overworldPortrait) {
        case "0": return champion19;
        case "1": return champion1;
        case "2": return champion2;
        case "3": return champion3;
        case "4": return champion4;
        case "5": return champion5;
        case "6": return champion6;
        case "7": return champion7;
        case "8": return champion8;
        case "9": return champion9;

        case "10": return champion10;
        case "11": return champion11;
        case "12": return champion12;
        case "13": return champion13;
        case "14": return champion14;
        case "15": return champion15;
        case "16": return champion16;
        case "17": return champion17;
        case "18": return champion18;
        case "19": return champion19;

        case "20": return champion20;
        case "21": return champion21;
        case "22": return champion22;
        case "23": return champion23;
        case "24": return champion24;
        case "25": return champion25;
        case "26": return champion26;
        case "27": return champion27;
        case "28": return champion28;
        case "29": return champion29;


        case "30": return champion30;
        case "31": return champion31;
        case "32": return champion32;
        case "33": return champion33;
        case "34": return champion34;
        case "35": return champion35;
        case "36": return champion36;
        case "37": return champion37;
        case "38": return champion38;
        case "39": return champion39;

        case "40": return champion40;
        case "41": return champion41;
        case "42": return champion42;
        case "43": return champion43;
        case "44": return champion44;
        case "45": return champion45;
        case "46": return champion46;
        case "47": return champion47;
        case "48": return champion48;
        case "49": return champion49;

        case "50": return champion50;
        case "51": return champion51;
        case "52": return champion52;
        case "53": return champion53;
        case "54": return champion54;
        case "55": return champion55;
        case "56": return champion56;
        case "57": return champion57;
        case "58": return champion58;
        case "59": return champion59;

        case "60": return champion60;
        case "61": return champion61;
        case "62": return champion62;
        case "63": return champion63;
        case "64": return champion64;
        case "65": return champion65;
        case "66": return champion66;
        case "67": return champion67;
        case "68": return champion68;
        case "69": return champion69;

        case "70": return champion70;
        case "71": return champion71;
        case "72": return champion72;
        case "73": return champion73;
        case "74": return champion74;
        case "75": return champion75;
        case "76": return champion76;
        case "77": return champion77;
        case "78": return champion78;
        case "79": return champion79;
        case "80": return champion80;
        case "81": return champion81;
        case "82": return champion82;
        case "83": return champion83;
        case "84": return champion84;
        case "85": return champion85;
        case "86": return champion86;
        case "87": return champion87;
        case "88": return champion88;
        case "89": return champion89;
        case "90": return champion90;
        case "91": return champion91;
        case "92": return champion92;
        case "93": return champion93;
        case "94": return champion94;
        case "95": return champion95;
        case "96": return champion96;
        case "97": return champion97;
        case "98": return champion98;
        case "99": return champion99;

        default:  return avatar9;
    }
}

function setNPCIcon(npc) {
    // let overworldPortrait = localStorage.getItem('portrait');
    
    // { localStorage.setItem('portrait',"")}
return npc
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
        this.setState({ mobile: window.innerWidth >= 1601 });
        this.setState({ mobileHor: window.innerWidth >= window.innerHeight });
    }
    jQueryCode = () => {
     
//        For a simple timer or clock, keep track of the time difference explicitly:

        
        var start = Date.now();
        setInterval(function() {
            var delta = Date.now() - start; // milliseconds elapsed since start
            //   console.log(Math.floor(delta / 1000)); // in seconds
            // alternatively just show wall clock time:
            // console.log(new Date().toUTCString());
            overworldPortrait = localStorage.getItem('quest-portrait');
$('#hero').attr('src', setPlayerIcon());
        }, 1000); // update about every second
        let overworldPlayerRow =3; let overworldPlayerColumn = 4;      

        $("#btn-b").click(function(){
            enterLocation()
          });
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
                    // $('.countyMap').animate({ 'left': val.left })
                    // $('.countyMap').css({ 'top': val.top })
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
        
        //mapChanges is a little hack to make the daffodills disappear when player leaves location geaga:
        function setMap() {
            $("#tully-challenge-bg").fadeOut()
            
$("#loc").html("")
$("#locEng").html("")
$("#locEng").fadeOut()
            $('#btn-b').fadeOut();
            mapChanges++;

            if (mapChanges === 1) { 
                $('eng-question-text').html('Select a lieutenant, ')
            }
 if(mapChanges>1){           
     $('.daff-container').fadeOut();
    //  $('.question-text').fadeOut();
     $('.eng-question-text').css('display','none');
     $('.eng-question-text-holder').css('color','orange');
 
}
            $('.sea').css('display', 'none')

            $('.location-title-card-text-container').fadeIn(1);
            
            $('.emblem-container').fadeIn(1);

            // $('.countyMap').css('animation', 'zoom-to-' + imreoir.whereAmI + ' 1s forwards ease-in');

            $('.countyMap').css('background-image', "url('../../images/counties/" + imreoir.whereAmI + ".png")
            setTimeout(function () { 
            $('#stage').fadeOut()
            $('.location-title-card-text-container').fadeIn();

            $('.emblem-container').fadeIn();
            setTimeout(function () { 
            // $('.countyMap').css('left', imreoir.whereAmI.left)
            // $('.countyMap').css('top', imreoir.whereAmI.top)
            
            // $('.emblem-img').css("opacity",0)
                            $('#stage').fadeIn()
                            $('.sea').fadeIn();
                            
            
            
            $('.location-title-card-text-container').fadeOut(3000,'linear');
                
                $('.emblem-container').fadeOut(4000,'linear');
            $('#hints-geaga').fadeOut();

            }, 2000)
           



            },1000)
            
        }

        //Load grids of connecting counties: 
        function loadMap(direction) {
           
           //hiding unsightly flicker when emblems are updated. they fade in again after the giant directional switch statement:
            $('.emblem-img').css('display', 'none')
            $('#output').css('display','none')
$('.question-text').fadeOut()
            switch (imreoir.whereAmI) {

                case 'geaga':

  
                    if (direction === N) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");
                        // narrativeCode++;
alert(localStorage.getItem("whereAmI"))
                        gameObjects[playerRow][playerColumn] = 0;

                        playerRow = 8;
                        playerColumn = 5;
                        
                        refresh();
                        setTimeout(setMap(),  1000)
                        

                    }


                    if (direction === NE) {
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");
                        // NarrativeCode++;
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
                        // NarrativeCode++;
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
                        // NarrativeCode++;

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
                        
                        // NarrativeCode++;
                       
                        localStorage.setItem("whereAmI", "westmeath");
                        imreoir.whereAmI = localStorage.getItem("whereAmI");
                        // NarrativeCode++;
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
                case 'westmeath': 
                  
                    if (direction === N) {
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
                        setTimeout(function () { 
                            $('.emblem-img').attr("src","./emblems/"+val.emblem+".png")

                            $('.emblem-img').fadeIn()
                            $('#output').fadeIn()
                        },200)
                       


                        map = JSON.parse(val.mapData);
                        console.log(val.mapData);

                        // $('.countyMap').css('left', val.left)
                        // $('.countyMap').css('top', val.top)
                        $('.countyMap').css('background-image', val.countyBG)
                        console.log('imreoir where am I?' + imreoir.whereAmI)


                        console.log("line 123" + val.co)
                        newLocations = val.locations;
                        newLocationsEng = val.locationsEng
                        console.log(newLocations)
                        console.log(newLocationsEng)
                        switch(val.co){
                            case "antrim": narrativeCode = 1; break;
                            case "armagh": narrativeCode = 2; break;
                            case "carlow": narrativeCode = 3; break;
                            case "cavan": narrativeCode = 4; break;
                            case "clare": narrativeCode = 5; break;
                            case "cork": narrativeCode = 6; break;
                            case "derry": narrativeCode = 7; break;
                            case "donegal": narrativeCode = 8; break;
                            case "down": narrativeCode = 9; break;
                            case "dublin": narrativeCode = 10; break;
                            case "fermanagh": narrativeCode = 11; break;
                            case "galway": narrativeCode = 12; break;
                            case "kerry": narrativeCode = 13; break;
                            case "kildare": narrativeCode = 14; break;
                            case "lilkenny": narrativeCode = 15; break;
                            case "laois": narrativeCode = 16; break;
                            case "leitrim": narrativeCode = 17; break;
                            case "limerick": narrativeCode = 18; break;
                            case "longford": narrativeCode = 19; break;
                            case "louth": narrativeCode = 20; break;
                            case "mayo": narrativeCode = 21; break;
                            case "meath": narrativeCode = 22; break;
                            case "monaghan": narrativeCode = 23; break;
                            case "offaly": narrativeCode = 24; break;
                            case "roscommon": narrativeCode = 25; break;
                            case "sligo": narrativeCode = 26; break;
                            case "tipperary": narrativeCode = 27; break;
                            case "tyrone": narrativeCode = 28; break;
                            case "waterford": narrativeCode = 29; break;
                            case "westmeath": 
                            
                            $('.eng-question-text').html('');
                            $('.eng-question-text').css('border','6px solid green');
                                narrativeCode = 30; break;
                            case "wexford": narrativeCode = 31; break;
                            case "wicklow": narrativeCode = 32; break;
                            default :break
                        }

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

                    // $('.countyMap').css('left', val.left)
                    // $('.countyMap').css('top', val.top)
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
$("#locEng").fadeOut()
            
            $('#locEng').html(newLocationsEng[locEng])
$("#locEng").fadeIn()

            
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
$("#locEng").fadeOut()

$('#walkies-overlay').fadeIn();

            $('.big-btn-img').fadeOut();
            playerOverLocation = false;

        }
        //values for returing to county map after exploring map location

        //Add a keyboard listener
        window.addEventListener("keydown", keydownHandler, false);
        let mapMenuIsVisible = false;
        let keyboardActive = true;
        //The game map
        var lastPressed = '0'; //what was the last key pressed?

        // leave player facing the last touched direction:

        //   var playerFacing='../img/characters/feitheamh1.gif'

        //Map code
        var ring = "f"
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
        var trap = "x"
        var GEAGA = "G";
        var CONTACT = "C"; //a
        var AGNES= "N";
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

        //set start positions
        var geagaRow;
        var geagaColumn;
        var contactColumn;
        var contactRow;
        var ringRow;
        var ringColumn;

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
                if (gameObjects[row][column] === ring) {
                    ringRow = row;
                    ringColumn = column;
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
                if (gameObjects[row][column] === ring) {
                    contactRow = row;
                    contactColumn = column;
                }
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
             stillPressedNorth = false;
             updateEventReport('ó thuaidh')
             $('#north').removeClass('prompt-north')
             
            if (playerRow > 0) {
                lastPressed = 'up';

                gameObjects[playerRow][playerColumn] = 0;

                playerRow--;
                animatePlayer();
                keydownHandler('up');

            }

            setInterval(function () {
               
                if (stillPressedNorth) {
                    if (keyboardActive) {
                        if (playerRow < ROWS - 1) {
        
                            setTimeout(function () { 
                            lastPressed = 'up';
                            gameObjects[playerRow][playerColumn] = 0;
                            playerRow--;
                            animatePlayer();
                            keydownHandler('up');
        
        
                            }, 500)
                        }   
                        }
            }
            }, 500);
         });
        $('#south').on('touchend', function () {
            stillPressedSouth = false
        })
        
        $('#west').on('touchend', function () {
            stillPressedWest = false
        })
        
        $('#north').on('touchend', function () {
            stillPressedNorth = false
        })
        
        $('#east').on('touchend', function () {
            stillPressedEast = false
        })
        

        $('#south').on('touchstart', function () {
            stillPressedSouth =false

            if (keyboardActive) {
                if (playerRow < ROWS - 1) {

                    lastPressed = 'down';
                    gameObjects[playerRow][playerColumn] = ROWS - 0;
                    playerRow++;
                    animatePlayer();
                    keydownHandler('down');
                    
                }   
                }
            setInterval(function () {
               
                if (stillPressedSouth) {
                    if (keyboardActive) {
                        if (playerRow < ROWS - 1) {
        
                            setTimeout(function () { 
                            lastPressed = 'down';
                            gameObjects[playerRow][playerColumn] = ROWS - 0;
                            playerRow++;
                            animatePlayer();
                            keydownHandler('down');
        
        
                            }, 500)
                        }   
                        }
            }
            }, 500);
            // !keyboardActive;
            updateEventReport('ó dheas')

            function handleFirstDown() {
                // keyboardActive;
                $('#océ').css('visibility', 'visible');
            }


            function handleSwords() {
alert("Chun troid!" )
                $('#océ').css('visibility', 'visible');
            }
            setTimeout(handleFirstDown, 1000);
            //override bug where player moves south then turns to face south with this jq :
            $('#hero').attr('src', setPlayerIcon());

            // playerFacing = imreoir.avatar;

        });










        $('#east').on('touchstart', function () {
            stillPressedEast = false;
            // playerFacing = imreoir.avatar;
            updateEventReport('soir')

            if (playerColumn < COLUMNS - 1) {
                gameObjects[playerRow][playerColumn] = 0;
                playerColumn++;

                lastPressed = 'right';
                animatePlayer();
            }

            keydownHandler('right');
            setInterval(function () {
               
                if (stillPressedEast) {
                    if (keyboardActive) {
                        if (playerRow < COLUMNS - 1) {
        
                            setTimeout(function () { 
                            lastPressed = 'right';
                            gameObjects[playerRow][playerColumn] =  0;
                            playerColumn++;
                            keydownHandler('right');
                            animatePlayer();
        
        
                            }, 500)
                        }   
                        }
            }
            }, 500);

        });
        $('#west').on('touchstart', function () {
            stillPressedWest = false;
            updateEventReport('siar')



            // playerFacing = imreoir.avatar;

            if (playerColumn > 0) {
                gameObjects[playerRow][playerColumn] = 0;
                playerColumn--;
                lastPressed = 'left';
                animatePlayer();
            }
            keydownHandler('left');

            setInterval(function () {
               
                if (stillPressedWest) {
                    if (keyboardActive) {
                        if (playerRow < ROWS - 1) {
        
                            setTimeout(function () { 
                            lastPressed = 'left';
                            gameObjects[playerRow][playerColumn] = 0;
                            playerColumn--;
                            animatePlayer();
                            keydownHandler('left');
        
        
                            }, 500)
                        }   
                        }
            }
            }, 500);
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

            gameObjects[playerRow][playerColumn] = ring;
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
                switch (addEventListener.keyCode) {
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
                        case trap: helloTrap();break;
                    case CONTACT: helloFerna(); break;
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
            //  whereAmI = localStorage.getItem('whereAmI')
            
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
;
                            break;
                             case N:
                            cell.src = empty;
                            break;
                            case ring: cell.src = ringIcon; break;
                        case og: cell.src = og; break;
                        case trap: cell.src = agnes2; break;
                        case AGNES: cell.src = agnes2; break;
                        case GEAGA:
                            cell.src = ""; break;
                        case CONTACT:
                            cell.src = empty;
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
                        case og: cell.src = og;
                            cell.id = 'og'; break;
                        case AGNES:
                            cell.id = 'agnes'
                            cell.src =agnes2 ;
                                break;
                        case GEAGA:
                            if(imreoir.whereAmI==="geaga")cell.src =  setGeagaIcon(empty) ;
                            
                            cell.id = 'geaga'
                            break;
                        case CONTACT:
                            cell.src = setIcon(empty); break;
                            case ring:
                                cell.src = ringIcon;
// alert('eh what')
                            break;
                        default: break;
                    }

                    //Position the cell 
                    cell.style.top = row * SIZE + "%";
                    cell.style.left = column * SIZE + "%";


                }

            }


            setTimeout(function () {
                // $('#stage').css('opacity', '0.6');
                setPlayerIcon();
                $('#stage').fadeIn();
                $('.toolbar').fadeIn();
    
            }, 1300)
        }

      
        $('.item5').on('touchend', function () {
            if (playerOverLocation) {
                // enterLocation(loc)
                alert('it5')
            }
            else {
                // toggleOverWorldMode()
            }
        })

        /*a trap flings our hero into the river. 
        button masher puzzle save vs game-over(score).
    win === ar ais go contae, xp + 100 .
    */
   function helloTrap(){
       $('.river-container').css('transform', 'rotate(0deg)');
       $(".battle0").fadeIn();
   $('.cell').fadeOut()
       $(".directional-pad").fadeOut();
       $(".question-text").html('Comhairc Aonar!')
       $("#locEng").html('Single Combat!')
       $('#hero').fadeOut();
       setTimeout(function () { 
       $("#walkies").fadeOut();
       },300)
    //    refresh();
   }
        function helloFerna() {
            // secondLocation = eascaLocations[secondLocationId]
            // alert('anocht!')
            
            $(".question-text").html('Ar aire!')
            $("#locEng").html('en garde!')
            $("#locEng").fadeIn();
            
            // $('#puck').fadeIn();
            // setTimeout(function () { 
            //     $('#puck').animate({ "top": "-10px;" });


            // },250)
            $('#walkies-overlay').fadeOut();
            map =
            [
                ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
                ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                ["*", 1, 1, 1, 0, "x", 1, 1, 1, "*"],
                ["*", 1, 1, 1, 1,"C", 1, 1, 1, "*"],
                ["*", 0, 0, 0, 0,"C",0, 0, 0, "*"],
                ["*", 0, 0, 0, 0,"C", 0, 0, 0, "*"],
                ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
            ];

         refresh();
        

            $(".question-text").fadeIn()
            setTimeout(function () { 
localStorage.setItem('visitedFerna','true')

            }, 3000)
        
        }
        function helloGeaga() {
            // whereAmI = whereAmIHolder;
            imreoir.whereAmI = whereAmI;
            // $('#register').removeClass('hidden')
         
       
            
            console.log('whereAmI' + whereAmI)
            localStorage.setItem('whereAmI', whereAmI);
            // secondLocation = eascaLocations[secondLocationId]
            // alert('Beidh muid ag siúl leat i '+  secondLocation +' anocht!')
            returnToCounty();
            refresh();
            $('.countyMap').fadeIn();
        }
        function returnToCounty() {

            gameObjects[playerRow][playerColumn] = 0;
                         
            $('#walkies').fadeOut();
            $.getJSON('mapData.json', function (county) {
                $.each(county, function (key, val) {
                    // console.log("val.county " + val.county)
                    if (val.co === imreoir.whereAmI) {
                        $('#output').html(val.county)
                        // $('.emblem').attr('src', '../../img/counties/icons/' + localStorage.getItem('whereAmI')+'.png')
                        console.log("line 112:" + val.county);
                        map = JSON.parse(val.mapData);
                        console.log(val.mapData);

                        // $('.countyMap').css('left', val.left)
                        // $('.countyMap').css('top', val.top)
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
            playerRow =overworldPlayerRow;
            playerColumn = overworldPlayerColumn;
            animatePlayer();
            refresh();
            setMap();

        }



let placeNamesGaeilge = 
[     "Cluain Ṁic Nóis",
      "Éadan Doire",
      "Biorra",
      "Cionn Eitigh",
      "Ráth Iomġáin",
      "Suí an Róin",
      "Dún Dealgan",
      "An Grianfort",
      "Ceann Ċloċair",
      "Baile Átha Ḟirdia",
      "Poll an Phúca",
      "Baile an Ġearlánaigh",
      "Coill an Iarainn",
      "Inis Córṫaidh",
      "Poll an Phúca",
      "Maolán na nGaḃar",
      "An Abhainn Dubh",
      "Dún Ċormaic",
      "Pailis Ċaonraí",
      "Poll an Phúca",
      "Caisleán Uí Ċonaill",
      "Áth na bḞuinseog",
      "An Ḟeoṫanaċ",
      "Brú Rí",
      "Fionnġlas",
      "Cluain Dolcáin",
      "Cluain Tarbh",
      "Binn Éadair",
      "Dún Laoiġaire",
      "Deilginis",
      "Gleann Éada",
      "Garḃach",
      "Droim Seanḃó",
      "Aċaḋ na Síleann",
      "Fíonach",
      "Dromad",
      "Reaċlainn",
      "Dearḃóg",
      "Aċaḋ Eoċaille",
      "Carn Ṁéaḃla",
      "Carraig Ḟearġais",
      "Béal Feiriste",
      "Cionn Dhún Damh",
      "Baile idir Dhá Abhainn",
      "Sléiḃte Ḋoire Ḃeatha",
      "Leitir Ceanainn",
      "Bealach Féich",
      "Na Cruacha Gorma", 
      "An Garastún",
      "Paiteagó",
      "Eadarnaiḋ",
      "Lios na Daróg",
      "Scriobaċ",
      "Inis Ceiṫleann",
      "Cill na Mallaċ",
      "Sliabh an Nóglaigh",
      "Gleann an Ṗreaċáin",
      "Beal na mḂláth",
      "Cionn tSáile",
      "An Sciobairín",
      "Poll an Ṗúca",
      "Na Cloċa Liaṫa",
      "Siol Éalaiġ",
      "Dún Ard",
      "An tInḃear Mór",
      "Aḃóca",
      "Cluain Fada",
      "Baile an Tobair",
      "Loch Bó Finne",
      "Scramóg",
      "Loch Bó Dearge",
      "Corr na Fola",
      "Doire",
      "Léim an Ṁadaiḋ",
      "Droichead Fíolta",
      "Maċaire Ráṫa",
      "An Seanṁullach",
      "Muine Mór",
      "Béal Átha na gCarraigíní",
      "An Mullach Mór",
      "Uaimheanna na Céise",
      "Machaire Eabha",
      "Baile Uí Ḋálaigh",
      "Tobar an Ċoire",
      "Ros Cré",
      "Durlas",
      "Faiċe Ró",
      "Sliabh na mBan",
      "Cluain Meala",
      "Tigh na Naoi Míle",
      "Eiréil ",
      "Darú",
      "An Baile Fionn",
      "Droichead Crom Abú",
      "Cúil an tSúdaire",
      "Buiríos Mór Osraí",
      "Sléiḃte an Ċomaraigh",
      "An Baile Dubh",
      "Tullach an Iarainn",
      "Cluain Ḟia",
      "Dún Garḃán",
      "Cill Ṁíodáin",
      "Sléiḃte an Ċomaraigh",
      "the black town",
      "Tullach an Iarainn",
      "Cluain Ḟia",
      "Dungarvan - Garbhann's Fort",
      "Cill Ṁíodáin",
      "Ġráinseaċ Ċuffe",
      "Baile Ṁic Andáin",
      "Bearna na Gaoiṫe",
      "Dún Garḃáin",
      "Baile an Ṗoill",
      "Sliaḃ Rua",
      "Ġráinseaċ Ċuffe",
      "Baile Ṁic Andáin",
      "Bearna na Gaoiṫe",
      "Dún Garḃáin",
      "Baile an Ṗoill",
      "Sliaḃ Rua",
      "An Uaimh",
      "Ráth Ċairn",
      "Cill Ḃríde",
      "Teamhair",
      "Buaile na Bréachṁaí ",
      "Tigh na Sióg",
      "Cathair Saiḋḃín",
      "An Daingean",
      "Gleann na bPúcaí",
      "Sliabh Mis",
      "Na Cruaċa Duḃa",
      "An tSnaidhm",
      "An Lios Breac",
      "Meathais Troim",
      "Gránard",
      "Cluain Dá Ráth",
      "Maiġ Duṁa",
      "An Ċarraig Ḃuí",
      "Cill Ala",
      "Caisleán an Ḃarraiġ",
      "Baile Ui Ḟiacáin",
      "An Caoláire Rua",
      "Lios an tSaṁaiḋ",
      "An Éill",
      "An Lorgain",
      "Lios na gCearrḃach",
      "An Caisleán Riaḃach",
      "An Ṁainistir Liath",
      "Dún Pádraig",
      "Cill Ċaoil",
      "Sráid na nAlbanach",
      "Craigavon",
      "Port An Dúnáin",
      "Baile Úr",
      "Baile an Ṁuilinn",
      "Lios Liath",    
      "Cill Deirge",
      "Baile Uí Ṁurċú",
      "Baile Haicéid",
      "An Ḃuiríos",
      "Miseal",
      "Cill Daṁáin",
      "Scairbh na gCaorach",
      "Cluain Eois",
      "Einistir Ḃuithe",
      "Teach an Scotaigh",
      "Crícheán Rua",
      "Carraig Ṁaċaire Rois",
      "Poll an Phúca",
      "Cill Cais",
      "An Spidéal ",
      "An Teach Dóite",
      "An Ċeaṫrú Rua",
      "Inis Meáin ",
      "Cairbre",
      "Na Solláin",
      "Fioḋ Alúine",
      "Maigh Nuad",
      "An Currach",
      "Léim an Ḃradáin",
      "Ceann Boirne",
      "Fíoch Rua",
      "An Tulach",
      "Cill Rois",
      "Leaba Ṡíoda",
      "Bun Raite",
      "Doire na Criaḋ",
      "An Cnoc Rua",
      "Béal Tairbirt",
      "An Dromainn",
      "Dún an Rí",
      "Lios Cré",
      "Caisleán na Deirge",
      "Baile Mhic Gofraidh",
      "An Ómaigh",
      "Seisceann Siúil",
      "An Ċorr Ċríochach"

        ]

        function enterLocation(location) {
            narrativeCode = 34;
            whereAbouts = $('#loc').html()
            overworldPlayerRow = playerRow;
            overworldPlayerColumn = playerColumn;
            if (whereAbouts === "Baile na gCailleach") { 
                $("#walkies").attr("src",collinstown)
                gameObjects[playerRow][playerColumn] = 0;
    
                playerRow = 8;
                playerColumn = 5;

                setTimeout(function () { 
                    return <Redirect to="/login"  />
                },500)
            }

            if (whereAbouts === "Ráth Ḟearna") { 


                map =
                [
                    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
                ];



                $("#walkies").attr("src",ferna)
                $("#walkies-overlay").attr("src", fernaRiver)
                gameObjects[playerRow][playerColumn] = 0;
                
                playerRow = 7;
                playerColumn = 5;
            }





            if (whereAbouts === "Tulaigh an Eallaigh") { 

// alert('Tully!')
                map =
                [
                    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, "og", 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
                ];


//rings in Tulaigh an eallaigh : counting in binary from 0 to 63.
                //player has completed ring? player has tullyRing1; update quiz questions with tullyRing1 quiz content.
                $("#walkies").attr("src",ferna)
                // $("#walkies-overlay").attr("src", fernaRiver)
                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 3;
                playerColumn = 4;
                // $('#hero').fadeOut();
                $('.champion-portrait').fadeIn();
                $('.ringOfTullyNally').css('display','grid');
                $('.ringOfTullyNally').fadeIn();
                $('#loc').fadeOut();
                $('#locEng').fadeOut();
                $('.tullynally-ring').fadeIn();
            }






  
  

            else if (whereAbouts === "") { 


                map =
                [
                    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, "f", 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
                ];
   



                // $("#walkies").attr("src",ferna)
                // $("#walkies-overlay").attr("src",fernaRiver)
                gameObjects[playerRow][playerColumn] = 0;
                
                playerRow = 7;
                playerColumn = 5;
            }
            else $("#walkies").attr("src",defaultField)
            $('#walkies').fadeIn();
            $('#stage').fadeIn()

            if (whereAbouts === secondLocation) {


alert("Anseo")

             }

             map =
             [
                 ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
                 ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                 ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                 ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                 ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                 ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                 ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                 ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                 ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                 ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
             ];


//setting specific walkabe area for locations with rivers walls etc. there's going to be at least 192 of these, not including dungeons castle interiors. Doing a few here to get started and then ship them out to a JSON like county maps.

            if (whereAbouts === "Ráth Ḟearna") {
            map =
            [
                ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
                ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                ["*", 0, 0, 0, 0, "x", 0, 0, 0, "*"],
                ["*", 1, 1, 1, 0,"C", 1, 1, 1, "*"],
                ["*", 1, 1, 1, 1,"C", 1, 1, 1, "*"],
                ["*", 0, 0, 0, 0,"C",0, 0, 0, "*"],
                ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
            ];

        }
         refresh();
         
         
         
         animatePlayer();
        }

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

        //just in case the player hasn't already dismissed the flashing purple light on btn #north.
        $('#north').removeClass('prompt-north')

        //react functions here
        let proceedThroughQuiz = this.props.proceedThroughQuiz
        let storyTimer=this.props.storyTimer
        let incrementScore=this.props.incrementScore
        let readme = `
       
        
        
        `
        
        function restartApp() { 
            window.location.reload(false)
        }
        let heroNameEng = this.props.heroNameEng;
       let heroName = this.props.heroName
        avatar = this.props.avatar;
        let handleAnswerButtonClick=this.props.handleAnswerButtonClick
whereAmIHolder = this.props.whereAmI;
        console.log(whereAmIHolder + 'whereAmIHolder');
        
storyTimer()
        console.log(whereAmI + 'whereAmI');
        // whereAmI = localStorage.getItem('whereAmI');
        
        let runInventory = function() { 
            alert('inv')
        }
        let runStats = function() { 
            alert('stats')
        }
        let runDisk = function() { 
            this.setState({diskVisible: true })
        }
      
    let isOn = this.props.isOn;
        return (
            
            <div>
                <div className="bg"></div>
                <div id="toolbar"></div>
                <div className="ui"></div>
                <div id="screen-blocker">
                    <div className="container screen-blocker">
                        <div className="col-xs-4 gaeilge screen-blocker"></div>
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
           

                <img id="mob-effect" className="phonebg2"src={phone1} alt="" />

                <div className="countyMap-container">
                    <div className="sea"></div>
                    <div className="countyMap"></div>
                </div>
                <div className="map-lens-container">
                        <img src={defaultField} alt="green field" id="walkies"/>
                        <img src={empty} alt="green field" id="walkies-overlay"/>
                        <div className="stage-container" id="kungfu">
                            <div id="stage"></div>
                        </div>

                    {/* {this.state.showEascaLocation ? <EascaLocation whereAmI= "geaga" />:null} */}

 
                    <img rel="preload" className="map-lens" src={lens} alt="" />
                    
                </div>
                
                    <div className="emblem-container">

                    {<img src={geaga} rel="preload" alt="county pixelart emblem." className="emblem-img" /> }
             
                </div> 
                <div className="location-title-card-text-container">
                    <p id="output"></p>
                </div>
              

                <div ><img id="portrait" src={portrait}></img>
                

 </div>
 
 {this.state.isOn ? (<div id="glass">
				
                    < img src={glass} rel="preload"className="question-img" id="glass-img" alt="glass bg for translucent overlay effect." />
                    <div id="event-report"></div>
                   							
                    <p className='eng-question-text'></p>
                    
                </div>) : null}
                <Silken id="silken"></Silken>
                <h2 id="output2"> "{ heroName}!"</h2>
            {/* <Rings1/> */}


  <ReactAudioPlayer src={whereAmI==="westmeath"?jam:null } autoPlay />
  
                <div className="portraitMode">
                <p id="eng-notes" > {engNotes[narrativeCode]}</p>

                <Easca id="easca"/>
                <div id="ui-container">

{/* <img src={stats} alt="" className="stats"onClick={() => {
        if (this.state.statsVisible) {
            this.setState({ statsVisible: false })


        }
        else {
            (this.setState({ statsVisible: true }))


        }
    }}  />
     */}

     <img src={chat} id="chat" alt="chat button" rel="preload" className="inventory" onClick={() => {
                        $('#eng-notes').html('');
                        $('#easca').fadeIn() 

                        if (this.state.diskVisible) {
                        this.setState({ diskVisible: false })
        }
    }}  />
<h1 id="cross-swords" onTouchStart={this.handleSwords}>⚔</h1>
    <img src={disk} alt="" className="disk" onClick={() => {
        if (this.state.diskVisible) {
            this.setState({ diskVisible: false })


        }
        else {
            (this.setState({ diskVisible: true }))


        }
    }} />

</div>
                   
<div className={this.state.diskVisible ? "disk-menu":"hidden"}>

<img rel="preload"src= {diskMenu}
                            alt="slow low framerate scrolling white lines on black bg." 
                            className="disk-bg"/>   

                        
                        <div>
            
            
                            <p className="readmore" id="schlussel"></p><div className="bit-container">

                            <img className="bit" src={ bit}/>
                            </div>
                            <p id="readme">
                                 
                                {readme}
                                <br/>
                                <br/>
                                <br/>
            <br/>
            
            <br/>
            <br/>
            <br/>
            
            
            <br />
            <br />
            /*              */
            <br />
            <br />
                
        
                                <button onClick={ 	restartApp }>baile | home</button>
<a href="https://www.pngwing.com/en/free-png-zampg"> Stone Soup Net Hack graphics </a>         
       <a href="https://manpages.ubuntu.com/manpages/xenial/man1/xscreensaver.1.html">additional effects by Jamie Zawinski Paul 'Joey' Clark</a><br/>
    
additional graphics from <a href="https://game-icons.net/"> https://game-icons.net/
                                </a>    <br/>
                                
       <a href="https://github.com/macribo2/Quiz-starter">iron-key is open source.</a>
                                <br />
                                more @ <a href="https://www.reddit.com/r/Banba/">/r/banba</a>
                            </p>
                     
                     <p className='readme'>
                        
 
       
     
    
                                </p>
                        </div>
                    </div>                    
<img rel="preload"src={ this.state.statsVisible? statsMenu: null} alt="" className="statsMenu" />                   
<img rel="preload"src={this.state.inventoryVisible? invMenu: null } alt="" className="invMenu" />                 
                </div>
                
                <img id="inventory" rel="preload" src={invMenu}></img>
               
       storyTimer={()=>storyTimer}
       <p id="loc" alt="holder for location names"></p>
                <p id="locEng" className={this.state.isOn ? "reveal" : "locDown"} alt="holder for location names English">
                </p>
                {this.state.whereAmI === "geaga" ?
                    
                    <div className="daff-container" >
                    {/* <img src={ rocks} className="rocks" alt="circle of rocks" /> */}
                {/* <ReactRain className="react-rain" numDrops="200" /> */}
    
                    </div>:null}

                    {
                    <>
                 
                    </>}
                
                <div className="river-container">
                </div>
                <div id="puck"><img src={agnes2} alt="a strange creature" /></div>
                <Battle className="battle0"/>
		
                
                <NumberOne proceedThroughQuiz={this.props.proceedThroughQuiz} toggleIsOn={this.props.toggleIsOn} isOn={this.state.isOn} heroNameEng={ this.props.heroNameEng} heroName={ this.props.heroName} />



                    <p id="hints-geaga" className={this.state.isOn && this.state.whereAmI==='geaga' ?"hints":"hidden"}>{'Said '+this.props.choiceRingEng+' "Return  with rings." "I will '+this.props.heroNameEng+'", said '+localStorage.getItem('hname')+'.'}</p>



                    <div className="ringOfTullyNally" >
                    {/* <img src={ daff} className="daffs" alt="small yellow flowers stir in the breeze" /> */}
    
                    <Rings5 heroName={this.props.heroName} heroNameEng={ this.props.heroNameEng} toggleIsOn={this.props.toggleIsOn} isOn={this.props.isOn} proceedThroughQuiz={this.props.proceedThroughQuiz } fadeOutNoOne={ this.fadeOutNoOne } />
                    </div>
          <div className="ui-container_b-btn">
                    <BtnB id="b-btn" ></BtnB>
 </div>



 <div className='ui-container_directional-pad'>
                <div className="directional-pad" onTouchStart={this.props.incrementScore} onTouchEnd={localStorage.setItem('whereAmI', 'westmeath')
                }>


                <div className='grid-container'>
    
    <div className="grid-item"></div>
    <div className="grid-item" id="north">
    </div>
    <div className="grid-item" ></div>
    <div className="grid-item" id="west">
    </div>
    <div className="grid-item" id="toggle-glass-btn2"><img src={this.state.isOn ? pearl : emerald} id="glass-btn-img" alt="a crystal or precious stone toggle on off button"   onClick={()=>{
            if (this.state.isOn) {
                this.setState({ isOn: false })
                console.log("hi from toggle glass overworld")
                 }
            else {
                (this.setState({ isOn: true }))
                console.log("hi from toggle glass  overworld")
            }
            {/* setTimeout(()=> { this.setState({ isOn: false }) }, 3000) */}
                

        
        }}	 /></div>
    <div className="grid-item" id="east">
    </div>
    <div className="grid-item"></div>
    <div className="grid-item" id="south">
    </div>
            <div className="grid-item"></div>
         
</div>



                </div>            
                </div>

                           </div> 

            

        )
    }

}