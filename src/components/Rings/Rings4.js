// import * as React from "react";
import { render } from "react-dom";
import React, { useState, useEffect } from 'react'
import lens from '../../images/ciorcal-glass-light.png';
import lensCap from '../../images/About1/ring2.png';
import emerald from '../../images/misc_crystal_new.png'
import pearl from '../../images/stone-soup/misc_crystal_old.png';
import heroShadow from '../../images/stone-soup/hero-shadow-0.png'
import empty from '../../images/empty.png';
import avatar1 from '../../images/players/spéirbhean0.gif';
import avatar2 from '../../images/players/douglas.png';
import avatar3 from '../../images/players/fianna0.png';
import avatar4 from '../../images/players/gotach0.png';
import avatar5 from '../../images/players/rógaire0.png'
import avatar6 from '../../images/players/diamhraí0.gif';
import avatar7 from '../../images/players/seanchaí0.png';
import avatar8 from '../../images/players/pooka.png';
import avatar9 from '../../images/players/poet.png';
import champion0 from '../../images/champions/19.png'
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

import {
  CircularInput,
  CircularTrack,
  CircularThumb,
} from "react-circular-input";



export function Rings4(props) {

  // Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {

	 })


	function hideText() { 
		alert();
	}
let ogHero = localStorage.getItem('portrait') 
	var namesInIrish = [
		`Abbán         `,
		`Ádhamhnán     `,
		`Ailbhe        `,
		`Ailill        `,
		`Aimhirghin    `,
		`Ainbheartach  `,
		`Áinle         `,
		`Áine          `,
		`Áinfean       `,
		`Ámhra         `,
		`Ana           `,
		`Anamcha       `,
		`Ánrothán      `,
		`Aodh          `,
		`Aodhán        `,
		`Aodnait       `,
		`Aoibheann     `,
		`Aoibhegréine  `,
		`Aoife         `,
		`Aonghus       `,
		`Báine         `,
		`Bairrfhionn   `,
		`Banbha        `,
		`Bardán        `,
		`Baoth         `,
		`Beag          `,
		`Beagán        `,
		`Bébhinn       `,
		`Bearach       `,
		`Bláthnaid     `,
		`Breacán       `,
		`Breasal       `,
		`Bríghid       `,
		`Brion         `,
		`Brocc         `,
		`Brónach       `,
		`Buadhach      `,
		`Cairbre	      `,
		`Caoilfhionn   `,
		`Caoimhe       `,
		`Caoimhín      `,
		`Cassair       `,
		`Cassán        `,
		`Cathaír       `,
		`Cathal        `,
		`Cathán        `,
		`Ceallach      `,
		`Ceara         `,
		`Cearbhall     `,
		`Cian          `,
		`Ciarán        `,
		`Cillian       `,
		`Colmán        `,
		`Comhghall     `,
		`Conall        `,
		`Conán         `,
		`Conchobhar    `,
		`Conlaodh      `,
		`Conn          `,
		`Cormac        `,
		`Coinneach     `,
		`Cuán          `,
		`Cúmhaí        `,
		`Daigh         `,
		`Daighre       `,
		`Daimhín       `,
		`Dáire         `,
		`Dallán        `,
		`Damhnait      `,
		`Deaglán       `,
		`Dearbhail     `,
		`Deirbhile     `,
		`Deirdre       `,
		`Deasmumhnaċ  `,
		`Diarmaid      `,
		`Dairinn       `,
		`Domhnall      `,
		`Donnchadh     `,
		`Dunfhlaith    `,
		`Dubhaltach    `,
		`Dubhgall      `,
		`Dubhghlas     `,
		`Éabha`,
		`Ealadha       `,
		`Easnadh       `,
		`Éamonn        `,
		`Éanna         `,
		`Earnán        `,
		`Éibhleann     `,
		`Echna         `,
		`Éimhín        `,
		`Eirnín        `,
		`Eithne        `,
		`Eoghan        `,
		`Étaín         `,
		`Fachtna       `,
		`Faolán        `,
		`Fearchar      `,
		`Feardorcha    `,
		`Fearghal      `,
		`Fearghus      `,
		`Fechín        `,
		`Fiachra       `,
		`Fial  		   `,
		`Fianait       `,
		`Finnén        `,
		`Finnseach     `,
		`Fionn         `,
		`Fionnait      `,
		`Fionúir       `,
		`Fionnbharr    `,
		`Fionnghuala   `,
		`Fionntán      `,
		`Flann         `,
		`Garbhán       `,
		`Geiléis       `,
		`Gilleagán     `,
		`Giolla Chríst `,
		`Glaisne       `,
		`Gobán         `,
		`Gobnait       `,
		`Gormán        `,
		`Gormghiolla   `,
		`Gormlaith     `,
		`Gráinne       `,
		`Grian         `,
		`Iarfhlaith    `,
		`Iarlugh       `,
		`Íde           `,
		`Iobhar        `,
		`Íonait        `,
		`Labhraidh     `,
		`Labhrás       `,
		`Lachtna       `,
		`Lachtnán      `,
		`Laisrén       `,
		`Laoidheach    `,
		`Laoire        `,
		`Laoise        `,
		`Lasair        `,
		`Lasairfhiona  `,
		`Leannán       `,
		`Líadan        `,
		`Liamhain      `,
		`Líobhan       `,
		`Lochlann      `,
		`Lomán         `,
		`Lonán         `,
		`Lorcán        `,
		`Lughaidh      `,
		`Luiseach      `,
		`Mac Nisse     `,
		`Mac Táil      `,
		`Maeleachlainn `,
		`Mainchín      `,
		`Mael Íosa     `,
		`Maolán        `,
		`Maol Mhuire   `,
		`Maon          `,
		`Marcán        `,
		`Meadhbh       `,
		`Meallán       `,
		`Meallá        `,
		`Miach         `,
		`Mochta        `,
		`Moinnine      `,
		`Móirne        `,
		`Molaisse      `,
		`Moncha        `,
		`Mór           `,
		`Muadhnait     `,
		`Muircheartach `,
		`Muireann      `,
		`Muireadhach   `,
		`Muirín        `,
		`Muirgheal     `,
		`Muirne        `,
		`Murchadh      `,
		`Murchú        `,
		`Naomh         `,
		`Naomhán       `,
		`Nárbhflaith   `,
		`Neacht        `,
		`Neamhain      `,
		`Neasa         `,
		`Neasán        `,
		`Niall         `,
		`Niallán       `,
		`Niamh         `,
		`Nuadha        `,
		`Nuala         `,
		`Odhrán        `,
		`Ógán		`,
		`Oilithir      `,
		`Oilleóg 	   `,
		`Oillill 	   `,
		`Oillín        `,
		`Oisín         `,
		`Olcán         `,
		`Ólchobhar     `,
		`Onchú         `,
		`Órlaith       `,
		`Órnait        `,
		`Orthanach     `,
		`Osán          `,
		`Osgar         `,
		`Osnait        `,
		`Rathnait      `,
		`Ríoghán       `,
		`Ríona         `,
		`Ríordán       `,
		`Robhartach    `,
		`Róinseach     `,
		`Róisín        `,
		`Rónán         `,
		`Rónnad        `,
		`Rós           `,
		`Ross          `,
		`Rúadhán       `,
		`Rúadhnait     `,
		`Ruaidhrí      `,
		`Ruarc         `,
		`Sadhbh        `,
		`Samhradhán    `,
		`Saorla        `,
		`Saraid        `,
		`Sárán         `,
		`Sárnait       `,
		`Scannal       `,
		`Scannlán      `,
		`Scáthach      `,
		`Scoithín      `,
		`Scoithniamh   `,
		`Scolaí        `,
		`Scoth         `,
		`Scothnait     `,
		`Sé            `,
		`Seachlann     `,
		`Séadhna       `,
		`Séanait       `,
		`Seanán        `,
		`Seanchán      `,
		`Searc         `,
		`Séighín       `,
		`Síoda         `,
		`Síomha        `,
		`Sláine        `,
		`Sléibhín      `,
		`Somhairle     `,
		`Sorcha        `,
		`Suaibhseach   `,
		`Suanach       `,
		`Suibhne       `,
		`Tadhg         `,
		`Taichleach    `,
		`Tanaí         `,
		`Tassach       `,
		`Teafa         `,
		`Teamhair      `,
		`Téide         `,
		`Teimhnín      `,
		`Tighearnach   `,
		`Tighearnán    `,
		`Tíreachán     `,
		`Tóla          `,
		`Tómmán	      `, 
		`Torcán        `,
		`Treasa        `,
		`Treasach      `,
		`Tuathal       `,
		`Tuathla       `,
		`Tuileach      `,
		`Tuilelaith    `,
		`Uainionn      `,
		`Uaine         `,
		`Uasal         `,
		`Uaithne       `,
		`Uallach       `,
		`Uallachán     `,
		`Uallgarg      `,
		`Ultán         `,
		`Úna           `,
		`Urard         `
		];
		
	let	namesInEnglish = [
		
		
		`little abbot
		`,`the timorous one
		`,`rock,  white, Gaulish World King.
		`,`elf
		`,`born of song
		`,`doer of evil deeds
		`,`hero, champion, warrior
		`,`delight, pleasure
		`,`storm, fury, violence
		`,`very wonderful
		`,`wealth or abundance
		`,`ambrose spirited
		`,`sun-traveller, nobleman second to the king
		`,`fire
		`,`the God of fire whose names means fire.
		`,`God of Fire
		`,`beautiful radiance
		`,`radiance of the sun
		`,`beautiful, radiant
		`,`sole strength or true choice
		`,`paleness; whiteness
		`,`fair-haired
		`,`an early goddess, also Ireland
		`,`poet, bard
		`,`vain, reckless, foolish
		`,`small
		`,`little lad
		`,`fair lady
		`,`pointed
		`,`little flower
		`,`freckled, speckled
		`,`brave or strong in conflict
		`,`high goddess
		`,`noble or high
		`,`sharp-faced
		`,`sorrowful
		`,`Victorious
		`,`charioteer or bearer
		`,`fair and slender
		`,`beauty or grace
		`,`beautiful birth
		`,`curly-haired
		`,`little curly-haired one
		`,`battle lord
		`,`strong in battle
		`,`battler
		`,`bright headed
		`,`fiery red
		`,`brave in sword-fighting, valorous
		`,`ancient
		`,`black
		`,`church
		`,`from Latin 'dove'
		`,`fellow hostage
		`,`strong as a wolf
		`,`wolf
		`,`lover of hounds
		`,`prudent fire
		`,`wisdom, chief
		`,`the charioteer
		`,`sorrowful
		`,`diminutive of Cu, meaning hound
		`,`hound of the plain
		`,`flame
		`,`flame, fire
		`,`deer or ox
		`,`erinn daughter of Fionn
		`,`blind
		`,`fawn
		`,`full of goodness
		`,`Daughter of Fál (Ireland)
		`,`daughter of a poet
		`,`chatterer or daughter
		`,`man from Desmond (Co. Cork)
		`,`without injunction or envy
		`,`daughter of Fionn
		`,`world mighty
		`,`Dionysus	brown lord
		`,`brown princess
		`,`dark-limbed, black-jointed
		`,`dark foreigner
		`,`blue black
		`,`Life
		`,`art , craft
		`,`musical sound
		`,`wealthy guardian
		`,`birdlike
		`,`iron
		`,`beauty, radiance
		`,`steed
		`,`prompt, ready
		`,`iron
		`,`kernal or gorse
		`,`born of the yew
		`,`jealousy
		`,`malicious, hostile
		`,`wolf
		`,`friendly
		`,`dark man
		`,`manly or valorous
		`,`strength of a man
		`,`raven or battle
		`,`battle-king
		`,`modest, honorable, generous
		`,`wild creature, deer
		`,`fair
		`,`blonde lady
		`,`fair, white
		`,`fair-haired, white
		`,`ghost, spirit
		`,`fair haired
		`,`fair shouldered
		`,`white ancient/fire
		`,`fiery red
		`,`rough
		`,`bright swan
		`,`little lad
		`,`servant of Christ
		`,`grey, grey-blue
		`,`smith
		`,`smith
		`,`dark; swarthy
		`,`grey servant
		`,`blue/illustrious princess
		`,`inspiring terror
		`,`sun-goddess
		`,`western kingdom
		`,`Iar + Lug (Celtic god names)
		`,`act of eating
		`,`yew tree
		`,`faithful, pure, sincere
		`,`speaker
		`,`laurel bush
		`,`milk-white, milk-like
		`,`milk-white, milk-like
		`,`flame
		`,`songful, poetic
		`,`calf-herd
		`,`girl
		`,`fire
		`,`flame wine
		`,`sweetheart
		`,`grey lady
		`,`comely, beautiful
		`,`beauty of women
		`,`a Viking
		`,`bare
		`,`blackbird
		`,`cruel or fierce
		`,`light, brightness
		`,`radiant girl
		`,`son of Ness (goddess name)
		`,`son of adze
		`,`servant, devotee of St. Seachnall
		`,`monk
		`,`servant of Jesus
		`,`warrior
		`,`servant or devotee of St. Mary
		`,`silent
		`,`steed
		`,`she who intoxicates
		`,`lightening
		`,`lightening
		`,`honorable, proud
		`,`great
		`,`- ninne was the first word this saint spoke
		`,`great
		`,`Molaise	pet from of Laisrén
		`,`from a Celtic goddess name
		`,`great
		`,`noble, good
		`,` sea battler
		`,` sea fair
		`,` lord, master
		`,` born of the sea
		`,` sea-bright, sea-white
		`,` high spirited, festive
		`,`	sea battler
		`,`hound of the sea
		`,`saint
		`,`of Naomh (saint)
		`,`noble princess
		`,`pure
		`,`battle-fury, warlike frenzy: name of a Celtic war goddess
		`,`not gentle
		`,`Stoat
		`,`cloud or passionate, vehement
		`,`cloud or passionate, vehement
		`,`brightness, radiance
		`,`possibly, cloud-maker: Celtic god name
		`,`Fionnuala (white shoulders)
		`,`sallow
		`,`lad
		`,`pilgrim
		`,`sprite, elf
		`,`sprite, elf
		`,`little sprite, elf
		`,`little deer
		`,`wolf
		`,`lover of drink
		`,`fierce hound
		`,`golden princess
		`,`sallow
		`,`potent in prayers or charms
		`,`little deer
		`,`deer lover
		`,`	deer
		`,`grace, prosperity
		`,`little king
		`,`queenly
		`,`	royal poet
		`,`	rushing, impetuous
		`,`seal
		`,` Norse word for horse. Also means little rose.
		`,` little seal
		`,`seal
		`,`rose or horse
		`,`	headland
		`,`red haired
		`,`red-haired
		`,`red king
		`,`hero, champion
		`,`sweet, goodly
		`,`summery person
		`,`noble queen
		`,`excellent, best
		`,`chief, noble, best
		`,`chief, noble, best
		`,`quarrel, argue
		`,`diminutive of Scannal
		`,`ghostly frightening
		`,`blossom, bloom
		`,`radiant blossom
		`,`town crier, scholar
		`,`blossom, bloom
		`,`blossom, bloom
		`,`hawk-like, noble
		`,`from Latin secondus
		`,`traveller, wayfarer
		`,`hawk
		`,`old, ancient
		`,`old, ancient
		`,`Love, affection
		`,`hawk
		`,`silk
		`,`good peace
		`,`health, from a Celtic goddess name
		`,`mountain man
		`,`from Norse, summer wanderer
		`,`bright, radiant
		`,`gracious, kindly	
		`,`drowsy
		`,`well-going
		`,`Thaddeus, Theodosius, Theophilus, poet
		`,`placating, peacemaking
		`,`slender, subtle
		`,`idle; inactive
		`,`a place name in Co. Longford
		`,`elevated place
		`,`wantonness
		`,`dark-haired one
		`,`Lord
		`,`Lord
		`,`having land, wide-ruling
		`,`abundance, flood
		`,`of Tuama
		`,`wild boar
		`,`strength
		`,`warlike; fierce
		`,`Tully, ruler of the people
		`,`princess of the people
		`,`prominent forehead
		`,`lady of abundance of sovereignty
		 `,`foam-white complexioned
		`,` greenish, from a tribal name
		`,`Noble`,
		`greenish, from a tribal name
		`,` proud; arrogant
		`,`little proud, arrogant one
		`,`fierce pride
		`,`Ulsterman
		`,`Juno	
		`,` very tall`
		 
		];
		
	const [value, setValue] = React.useState(.25);
  const prevValue = React.useRef(0);
  const diff = React.useRef(0);
  const dir = React.useRef(0);
  const round = React.useRef(0);

  const max = 0.99;
  const min = 0;

  const valueWithinLimits = rv => {
    const v = Math.floor(rv * 100) / 100;
    console.log("v", v);

    const diff = v - value;
    let vRound = round.current;
    if (diff > 0.8) vRound--;
    if (diff < -0.8) vRound++;

    const currentValue = value + round.current;
    const requestedValue = v + vRound;
    const minValue = 0.77;
    const maxValue = 0.99;
    console.log("current | requested", currentValue + "|" + requestedValue);
    console.log(" round.current", round.current);

    // //if (requestedValue > 1) return value;
    if (requestedValue > max) return maxValue;
    else if (requestedValue < min) return minValue;
    else return v;
};
let champPortrait = document.getElementsByClassName('champion-portrait')

	//when player turns dial to select champion:  show avatar in fairy ring; fade in eng and irish names, fade out question text.
	if (value > 0.25 ||value < 0.25 ) { 
	
			document.querySelector(".champion-portrait").classList.add('fade-in-champ');
			document.querySelector(".names-e").classList.add('fade-in-champ');document.querySelector(".names-i").classList.add('fade-in-champ');document.querySelector(".question-text").classList.add('fade-out-champ');
	}

  function shuffle(obj1, obj2) {
	var index = obj1.length;
	var rnd, tmp1, tmp2;
  
	while (index) {
	  rnd = Math.floor(Math.random() * index);
	  index -= 1;
	  tmp1 = obj1[index];
	  tmp2 = obj2[index];
	  obj1[index] = obj1[rnd];
	  obj2[index] = obj2[rnd];
	  obj1[rnd] = tmp1;
	  obj2[rnd] = tmp2;
	}
  }
  
  shuffle(namesInEnglish,namesInIrish);
	function buttonMashClick() { 
		



		
	}
  const updateValue = v => {
    diff.current = v - prevValue.current;
    if (diff.current > 0.8) round.current--;
    if (diff.current < -0.8) round.current++;
    prevValue.current = v;
    setValue(v);
  };
	let champIcon = champion0;
	let champID = Math.floor(value * 100);


	if (champID === 100){
		champIcon = champion0;
	}
	if (champID === 1){
		champIcon = champion1;
	}
	if (champID === 2){
		champIcon = champion2;
	}
	if (champID === 3){
		champIcon = champion3;
	}
	if (champID === 4){
		champIcon = champion4;
	}
	if (champID === 5){
		champIcon = champion5;
	}
	if (champID === 6){
		champIcon = champion6;
	}
	if (champID === 7){
		champIcon = champion7;
	}
	if (champID === 8){
		champIcon = champion8;
	}
	if (champID === 9){
		champIcon = champion9;
	}
	if (champID === 10){
		champIcon = champion10;
	}
	if (champID === 11){
		champIcon = champion11;
	}
	if (champID === 12){
		champIcon = champion12;
	}
	if (champID === 13){
		champIcon = champion13;
	}
	if (champID === 14){
		champIcon = champion14;
	}
	if (champID === 15){
		champIcon = champion15;
	}
	if (champID === 16){
		champIcon = champion16;
	}
	if (champID === 17){
		champIcon = champion17;
	}
	if (champID === 18){
		champIcon = champion18;
	}
	if (champID === 19){
		champIcon = champion19;
	}
	if (champID === 20){
		champIcon = champion20;
	}
	if (champID === 21){
		champIcon = champion21;
	}
	if (champID === 22){
		champIcon = champion22;
	}
	if (champID === 23){
		champIcon = champion23;
	}
	if (champID === 24){
		champIcon = champion24;
	}
	if (champID === 25){
		champIcon = champion25;
	}
	if (champID === 26){
		champIcon = champion26;
	}
	if (champID === 27){
		champIcon = champion27;
	}
	if (champID === 28){
		champIcon = champion28;
	}
	if (champID === 29){
		champIcon = champion29;
	}
	if (champID === 30){
		champIcon = champion30;
	}
	if (champID === 31){
		champIcon = champion31;
	}
	if (champID === 32){
		champIcon = champion32;
	}
	if (champID === 33){
		champIcon = champion33;
	}
	if (champID === 34){
		champIcon = champion34;
	}
	if (champID === 35){
		champIcon = champion35;
	}
	if (champID === 36){
		champIcon = champion36;
	}
	if (champID === 37){
		champIcon = champion37;
	}
	if (champID === 38){
		champIcon = champion38;
	}
	if (champID === 39){
		champIcon = champion39;
	}
	if (champID === 40){
		champIcon = champion40;
	}
	if (champID === 41){
		champIcon = champion41;
	}
	if (champID === 42){
		champIcon = champion42;
	}
	if (champID === 43){
		champIcon = champion43;
	}
	if (champID === 44){
		champIcon = champion44;
	}
	if (champID === 45){
		champIcon = champion45;
	}
	if (champID === 46){
		champIcon = champion46;
	}
	if (champID === 47){
		champIcon = champion47;
	}
	if (champID === 48){
		champIcon = champion48;
	}
	if (champID === 49){
		champIcon = champion49;
	}
	if (champID === 50){
		champIcon = champion50;
	}
	if (champID === 51){
		champIcon = champion51;
	}
	if (champID === 52){
		champIcon = champion52;
	}
	if (champID === 53){
		champIcon = champion53;
	}
	if (champID === 54){
		champIcon = champion54;
	}
	if (champID === 55){
		champIcon = champion55;
	}
	if (champID === 56){
		champIcon = champion56;
	}
	if (champID === 57){
		champIcon = champion57;
	}
	if (champID === 58){
		champIcon = champion58;
	}
	if (champID === 59){
		champIcon = champion59;
	}
	if (champID === 60){
		champIcon = champion60;
	}
	if (champID === 61){
		champIcon = champion61;
	}
	if (champID === 62){
		champIcon = champion62;
	}
	if (champID === 63){
		champIcon = champion63;
	}
	if (champID === 64){
		champIcon = champion64;
	}
	if (champID === 65){
		champIcon = champion65;
	}
	if (champID === 66){
		champIcon = champion66;
	}
	if (champID === 67){
		champIcon = champion67;
	}
	if (champID === 68){
		champIcon = champion68;
	}
	
	if (champID === 69){
		champIcon = champion69;
	}
	if (champID === 70){
		champIcon = champion70;
	}
	if (champID === 71){
		champIcon = champion71;
	}
	if (champID === 72){
		champIcon = champion72;
	}
	if (champID === 73){
		champIcon = champion73;
	}
	if (champID === 74){
		champIcon = champion74;
	}
	if (champID === 75){
		champIcon = champion75;
	}
	if (champID === 76){
		champIcon = champion76;
	}
	if (champID === 77){
		champIcon = champion77;
	}
	if (champID === 78){
		champIcon = champion78;
	}
	if (champID === 79){
		champIcon = champion79;
	}
	if (champID === 80){
		champIcon = champion80;
	}
	if (champID === 81){
		champIcon = champion81;
	}
	if (champID === 82){
		champIcon = champion82;
	}
	if (champID === 83){
		champIcon = champion83;
	}
	if (champID === 84){
		champIcon = champion84;
	}
	if (champID === 85){
		champIcon = champion85;
	}
	if (champID === 86){
		champIcon = champion86;
	}
	if (champID === 87){
		champIcon = champion87;
	}
	if (champID === 88){
		champIcon = champion88;
	}
	if (champID === 89){
		champIcon = champion89;
	}
	if (champID === 90){
		champIcon = champion90;
	}
	if (champID === 91){
		champIcon = champion91;
	}
	if (champID === 92){
		champIcon = champion92;
	}
	if (champID === 93){
		champIcon = champion93;
	}
	if (champID === 94){
		champIcon = champion94;
	}
	if (champID === 95){
		champIcon = champion95;
	}
	if (champID === 96){
		champIcon = champion96;
	}
	if (champID === 97){
		champIcon = champion97;
	}
	if (champID === 98){
		champIcon = champion98;
	}
	if (champID === 99){
		champIcon = champion99;
	}
	localStorage.setItem('quest-portrait', champID);
  const tryValue = v => {
    updateValue(valueWithinLimits(v));
  };
	let hname;
	let hnameE;
	// let fadeOutNoOne = this.props.fadeOutNoOne;
	// let isOn = this.props.isOn
	let proceedThroughQuiz = props.proceedThroughQuiz;
	
	
	{ const [champName, setChampName] = useState('Anseo'); }
	return (

<>
		
<div className="input-elements-container-7">
<img src={lensCap} className="lens-cap" alt="a fantasy landscape a ring of stones, a haunted tree" />
			</div>
	  <div className="input-elements-container-8">
	  <img src={lens} id="lens" className="lens-ring4" alt="a glass lens" />
			<CircularInput value={value} className="dial dial4" onChange={tryValue}>
				<CircularTrack
				stroke="rgba(185,230,5,1)"
						strokeWidth={'3px'}
				/>
				<CircularThumb  fill="rgba(135,5,2)"
					stroke="rgba(180,180,180,1)" 	
							strokeWidth={'3px'}/>
			</CircularInput>
			

        <p x={100} y={100} className="names-i" textAnchor="middle" dy="0.3em" fontWeight="bold">
					{hname = namesInIrish[Math.floor(value * 100) + round.current * 100]}
				</p>
				
			{<p className="names-e">
				{ namesInEnglish[ Math.floor(value * 100) + round.current * 100]}	
				</p>}
			

			<img src={ogHero === "1" ?  avatar1  : empty} className="og-hero"  alt="hero portrait"/>
			
			<img src={ogHero === "2" ? avatar2 :empty} className="og-hero"  alt="hero portrait"/>
			<img src={ogHero === "3" ? avatar3 :empty} className="og-hero"  alt="hero portrait"/>
			<img src={ogHero === "4" ? avatar4 :empty} className="og-hero"  alt="hero portrait"/>
			<img src={ogHero === "5" ? avatar5 :empty} className="og-hero"  alt="hero portrait"/>
			<img src={ogHero === "6" ? avatar6 :empty} className="og-hero"  alt="hero portrait"/>
			<img src={ogHero === "7" ? avatar7 :empty} className="og-hero"  alt="hero portrait"/>
			<img src={ogHero === "8" ? avatar8 :empty} className="og-hero"  alt="hero portrait"/>
			<img src={ogHero === "9" ? avatar9 :empty} className="og-hero"  alt="hero portrait"/>
			
			</div>
			
			
			 <div className="input-elements-container-5">
					
				<button className="button-mash-ring-4" onClick={props.fadeOutNoOne} onTouchEnd={ props.proceedThroughQuiz}>
					
					<img src={champIcon} className="champion-portrait" alt="champion portrait" />
							
			
				</button>
				
			
		

				<img src={heroShadow} className="hero-shadow" alt="champion portrait" />
		
	  </div>

</>
			);
}


