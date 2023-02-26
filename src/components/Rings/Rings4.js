import * as React from "react";
import { render } from "react-dom";
import lens from '../../images/ciorcal-glass.png';

import {
  CircularInput,
  CircularTrack,
  CircularThumb,
} from "react-circular-input";

export function Rings4() {

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
		`Curnán        `,
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
		`Eadan         `,
		`Éabha`,
		`Ealadha       `,
		`Easnadh       `,
		`Eibhear       `,
		`Éile          `,
		`Éirne         `,
		`Éamonn        `,
		`Éanna         `,
		`Earnán        `,
		`Éibhleann     `,
		`Echna         `,
		`Éimhín        `,
		`Eirnín        `,
		`Eithne        `,
		`Émer          `,
		`Eoghan        `,
		`Étaín         `,
		`Fachtna       `,
		`Fainche       `,
		`Faolán        `,
		`Fearchar      `,
		`Feardorcha    `,
		`Fearghal      `,
		`Fearghus      `,
		`Fechín        `,
		`Feidhelm      `,
		`Feidhlim      `,
		`Feme          `,
		`Féthnaid      `,
		`Fiachra       `,
		`Fial  		   (m)`,
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
		`Iomchadh      `,
		`Íonait        `,
		`Irial         `,
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
		`Life          `,
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
		`Maine         `,
		`Mael Íosa     `,
		`Maolán        `,
		`Maol Mhuire   `,
		`Maon          `,
		`Marcán        `,
		`Marga         `,
		`Meadhbh       `,
		`Meallán       `,
		`Meallá        `,
		`Mel           `,
		`Miach         `,
		`Mochta        `,
		`Moinnine      `,
		`Móirne        `,
		`Molaisse      `,
		`Moncha        `,
		`Mór           `,
		`Morann        `,
		`Muadhnait     `,
		`Muircheartach `,
		`Muireann      `,
		`Muireadhach   `,
		`Muirín        `,
		`Muirgheal     `,
		`Muirne        `,
		`Murchadh      `,
		`Murchú        `,
		`Naithí        `,
		`Naoise        `,
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
		`Ógán		   (m)	O`,
		`Oilithir      `,
		`Oilleóg 	   (m`,
		`Oillill 	   (m`,
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
		`Ríofach       `,
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
		`Siollán       `,
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
		`Taillte       `,
		`Tanaí         `,
		`Tassach       `,
		`Teafa         `,
		`Teamhair      `,
		`Téide         `,
		`Teimhnín      `,
		`Tighearnach   `,
		`Tighearnán    `,
		`Tiobraide     `,
		`Tíreachán     `,
		`Toirdhealbhach`,
		`Tóla          `,
		`Tomaltach     `,
		`Tómmán	      `, 
		`Torcán        `,
		`Torna         `,
		`Treasa        `,
		`Treasach      `,
		`Tuama         `,
		`Tuamnait      `,
		`Tuathal       `,
		`Tuathla       `,
		`Tuileach      `,
		`Tuilelaith    `,
		`Uaine         `,
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
		`,`Curnan
		`,`flame
		`,`flame, fire
		`,`deer or ox
		`,`erinn daughter of Fionn
		`,`blind
		`,`fawn
		`,`full of goodness
		`,`Daughter of Fál (Ireland)
		`,`daughter of a poet
		`,`chatterer or der- meaning daughter
		`,`man from Desmond (Co. Cork)
		`,`without injunction or envy
		`,`daughter of Fionn
		`,`world mighty
		`,`Dionysus	brown lord
		`,`brown princess
		`,`dark-limbed, black-jointed
		`,`dark foreigner
		`,`blue black
		`,`Etan
		`,`Life
		`,`art || craft
		`,`musical sound
		`,`Heber, Harry, Ivor	
		`,`yeh?
		`,`nyeh	Erne?
		`,`wealthy guardian
		`,`birdlike
		`,`Ernest iron
		`,`beauty; radiance
		`,`steed
		`,`Evin; Aeveen; Éimíne	prompt; ready
		`,`iron
		`,`kernal or gorse
		`,`Éimear; Éimer	??
		`,`born of the yew
		`,`jealousy
		`,`malicious, hostile
		`,`Fanny
		`,`wolf
		`,`friendly
		`,`Frederick, Ferdinand	dark man
		`,`manly or valorous
		`,`strength of a man
		`,`raven or battle
		`,`Fidelma; Fedelm	
		`,`Felix, Phillip	
		`,`young woman; girl
		`,`Féthnat
		`,`battle-king
		`,`modest; honorable; generous
		`,`wild creature; deer
		`,`Finnian	fair
		`,`blonde lady
		`,`fair; white
		`,`fair-haired; white
		`,`Fionnabair	ghost, spirit
		`,`fair haired
		`,`fair shouldered
		`,`white ancient/fire
		`,`fiery red
		`,`rough
		`,`bright swan
		`,`little lad
		`,`servant of Christ
		`,`grey, grey-blue
		`,`Gobbán	smith
		`,`smith
		`,`Gorman	dark; swarthy
		`,`grey servant
		`,`blue/illustrious princess
		`,`inspiring terror; grain
		`,`sun-goddess
		`,`western kingdom
		`,`Iar + Lug (Celtic god names)
		`,`act of eating
		`,`yew tree
		`,`Imchad	
		`,`faithful; pure; sincere
		`,`Irél	
		`,`speaker
		`,`laurel bush
		`,`milk-white, milk-like
		`,`milk-white, milk-like
		`,`flame
		`,`songful; poetic
		`,`calf-herd
		`,`girl
		`,`fire
		`,`flame wine
		`,`sweetheart
		`,`grey lady
		`,`comely, beautiful
		`,`?
		`,`beauty of women
		`,`a Viking
		`,`bare
		`,`blackbird
		`,`Lorccán	cruel or fierce
		`,`Aloysius, Lewy	light; brightness
		`,`Luisech, Lucy	radiant girl
		`,`son of Ness (goddess name)
		`,`son of adze
		`,`servant || devotee of St. Seachnall
		`,`monk
		`,`Many
		`,`servant of Jesus
		`,`Mullen	warrior
		`,`servant or devotee of St. Mary
		`,`silent
		`,`steed
		`,`?
		`,`she who intoxicates
		`,`lightening
		`,`Mella	lightening
		`,`?
		`,`honorable; proud
		`,`great
		`,`ninne- ninne was the first word this saint spoke
		`,`Maud	great
		`,`Molaise	pet from of Laisrén
		`,`from a Celtic goddess name
		`,`Agatha	great
		`,`Morand	
		`,`noble, good
		`,` sea battler
		`,` sea fair
		`,` lord; master
		`,` born of the sea
		`,` sea-bright/ sea-white
		`,` high spirited; festive
		`,`	sea battler
		`,`hound of the sea
		`,`Nathy	?
		`,`Noah	bond?
		`,`saint
		`,`of Naomh (saint)
		`,`noble princess
		`,`pure
		`,`battle-fury; warlike frenzy: name of a Celtic war goddess
		`,`not gentle
		`,`Stoat
		`,`cloud or passionate; vehement
		`,`cloud or passionate; vehement
		`,`brightness; radiance
		`,`possibly, cloud-maker: Celtic god name
		`,`short of Fionnuala (white shoulders)
		`,`sallow
		`,`lad
		`,`pilgrim
		`,`sprite, elf
		`,`sprite, elf
		`,`little sprite, elf
		`,`Oissíne	little deer
		`,`wolf
		`,`lover of drink
		`,`fierce hound
		`,`golden princess
		`,`sallow
		`,`potent in prayers or charms
		`,`little deer
		`,`deer lover
		`,`	deer
		`,`grace; prosperity
		`,`?
		`,`little king
		`,`queenly
		`,`	royal poet
		`,`	rushing; impetuous
		`,`seal
		`,` Norse word for horse. Also means little rose.
		`,` little seal
		`,`seal
		`,`rose | horse
		`,`	headland
		`,`red haired
		`,`red-haired
		`,`red king
		`,`hero; champion
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
		`,`Shay, Shea	hawk-like, noble
		`,`Seachnall	from Latin secondus
		`,` Sidney	traveller; wayfarer
		`,`	Ségnat	hawk
		`,`	Senan	old, ancient
		`,`	Shanahan	old, ancient
		`,`Love; affection
		`,`SHANE	Séigíne	hawk
		`,`Sheedy	possibly derived from the word for silk
		`,`Sillán	?
		`,`eeva, Síomhaith	good peace
		`,`SLAWN ya	Slaney, Slanina	health, from a Celtic goddess name
		`,`Slébíne, Slevin	mountain man
		`,`Sorley, Samuel, Charles	from Norse, summer wanderer
		`,`Sally	bright, radiant
		`,`gracious; kindly	
		`,`drowsy
		`,`well-going
		`,`Tadc, Tadg, Tad, Thaddeus, Theodosius, Theophilus, Tim	poet
		`,`placating, peacemaking
		`,`Tailltiu	?
		`,`slender, subtle
		`,`idle; inactive
		`,`a place name in Co. Longford
		`,`elevated place
		`,`wantonness
		`,`dark-haired one
		`,`Lord
		`,`Lord
		`,`Tipraite	 
		`,`	Tírechán having land; wide-ruling
		`,`  a lakh	Turlough, Tairdelbach, Charles	abettor
		`,`abundance, flood
		`,`Thomas, Timothy	?
		`,`of Tuama
		`,`Torccán	wild boar
		`,`puffed-up?
		`,`Teresa	strength
		`,`Tracy	warlike; fierce
		`,` ?
		`,` fem. of Tómmán
		`,` Tully	ruler of the people
		`,` Tuala,	princess of the people
		`,` prominent forehead
		`,` Twilleliah,	lady of abundance of sovereignty
		`,` `,`foam-white complexioned
		`,` greenish, from a tribal name
		`,`Noble`,`greenish, from a tribal name
		`,` proud; arrogant
		`,` Hoolihan	little proud; arrogant one
		`,` fierce pride
		`,`	Ultan	Ulsterman
		`,` Oona, Oonagh, Agnes, Winifred, Winnie, Juno	
		`,` very tall`
		
		];
		
	const [value, setValue] = React.useState(0);
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
	
  const updateValue = v => {
    diff.current = v - prevValue.current;
    if (diff.current > 0.8) round.current--;
    if (diff.current < -0.8) round.current++;
    prevValue.current = v;
    setValue(v);
  };

  const tryValue = v => {
    updateValue(valueWithinLimits(v));
  };
	let hname;
	let hnameE;
	return (
	  <div className="input-elements-container">
	  <img src={lens} id="lens" alt="a glass lens" />
      <CircularInput value={value} className="dial" onChange={tryValue}>
        <CircularTrack />
        <CircularThumb />
			</CircularInput>
			

        <p x={100} y={100} className="names-i" textAnchor="middle" dy="0.3em" fontWeight="bold">
        {  hname =  namesInIrish[ Math.floor(value * 100) + round.current * 100]}
				</p>
				
			{<p className="names-e">
				{ 
					hname =  namesInEnglish[ Math.floor(value * 100) + round.current * 100]

				}	
			</p>}

			<div id="hero" className="og-hero">
								 
							 </div>
	  </div>
			);
}


