import React from 'react';
import btnA from '../../images/ciorcal-glass.png'
import fortuna from '../../vid/fortuna.mp4';
import './fortuna.css';	
import $ from 'jquery';
export default class Fortuna extends React.Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	jQueryCode = () => {





			let fortunaPos = 0
			function mode(whichMode){
			
				if(whichMode===3)
				$('.fortuna').fadeOut();
				// $('#fortuna-glass').fadeOut();
				// showMap();
			
				// $('#main-text').text('')
				// $('#next-text').text('')
				// $('#ciorcal-glass').fadeOut()
				
				// $('#mode3').fadeIn()
				// let newTempName = $('#main-text').html();
				// let newTempName2 = $('#nameInIre').html();	
				// $('#mode3-name').html(newTempName2 +" "+newTempName )
				$("").fadeIn()
				// $('#stat-text').fadeIn()
				
				// $('#fortuna-glass').fadeOut();
				// $(stage).fadeOut()
					// $('#main-text').fadeOut();
					// $('#nameInIre').fadeOut();
					// $('#stat-text').html(" " + "teamLocation")
					// $('#avatar').fadeOut();
					$('.fortuna').fadeOut();
					// $('#fortuna-bg').fadeOut();
					// $('#fortuna-glass').fadeOut();
					// $('#fortuna-lit').fadeOut();
					// $('#team-icon').fadeOut();
					// $('#sea').fadeOut();/
				setTimeout(function(){
					// $('#splash-b').fadeIn();
			
				},1000)
				setTimeout(function(){
					// $('#storyteller-0').fadeIn();
				},3000)
				
			}
			// function textfade(div){
			// $(div).css('color','goldenrod')
			
				// $(div).fadeTo("slow",0.2)
				
				// $(div).css('color','purple')
			
		


				let fortunaTeamsEng = [

					`Of the Bats`,
					`The Blood Thirsty`,
					`The Hidden`,
					`The Wave`,
					`The Grunter`,
					`The Accoutred`,
					`The Obelisk`,
					`The Illuminated`,
					`The Heritage`,
					`Shillelagh`,
					`The Cauldron`,
					`Horseman`,
					`of the Leaves`,
					`The Ring`,
					`The Dagger`,
					`The Cow`,
					`of the Wandering Warriors`,
					`The Enchanted Ones`,
					`The Night Branch`,
					`Of the Dark One`,	
					`Marauders`,
					`The Eagles`,
					`The Stronghold`,
					`of the Tricksters`,
					`of the Goblins`,
					`The flatterer`,
					`The Rogue`,
					`branch of the Black Beetle`,
					`The Kings`,
					`of the Sea Warriors`,
					`The Fury`,
					`Péire Cladhaire`,
					`of the Fae`,
					`of the Druids`,
					`The Rats`,
					`Morrigin Worshipers`,
					`The Spellbound`,
					`the Sharp Taloned`,
					`the Shield`,
					`Wisdom`,
					`Worshipers of the Crooked One`,
					`The Returned`,
					`The Fortunate`,
					`Golden Axe Tribe`,
					`the Sickle`,
					`the Vigilant`, 
					`the Dragon`,
					`Courage, Patience`,
					`The Plunderer	`,
					`Lancer-Fencers`,
					`Wandering Fenians`,
					`The Swallows`,
					`of the Stings`,
					`of the Sciences`,
					`the Wolf`,
					`The Calm`,
					`Of Mann`,
					`The Steadfast`,
					`Lily`,
					``,
				`The Skiffs`	,
				`Coders`
				]
				
				let fortunaTeams = [
				
				`Na hÍoltóga`,
				`An Cródh-linntighe`,
				`An Foluightha`,
				`An Tonn`,
				`An Gnúsachán`, 
				`An Luibhridhe`,
				`an Oibilisc`,
				`An Ionshoilsithe`,
				`An Dúchas`,
				`Sail Éille`,
				`An Coire`,
				`Na Marcra`,
				`na Dilleoga`,
				`An Fáinne`,
				`An Miodóg`,
				`An Bó`,
				`Na Fánaigh`,
				`Na hUptha`,
				`Craobh na hOidhche`,
				`Na Doilbhaithe`,
				`Foghlaithe`,
				`Na hIolair`,
				`An Daingin`,
				`Na Cleasaí`,
				`Na Siabhaire`,
				`Na Beadaidhthe`,
				`Na Rogairí`,
				`Craobh an Daol Dubh`,
				`Na Ríthe`,
				`Fiannaí Mara`,
				`Ar an Daoraí`,
				`Clunc y Dunc`,
				`Fianna Sídh`,
				`Draoithe`,
				`Na Raftáin`,
				`Adhraightheora Morrígan`,
				`Na Geasaithe`,
				`Na Bir-Iongaighe`,
				`An Sciath`,
				`Siansacht`,
				`Clachán Crom`,
				`Na Fhillte`,
				`Na Seamhasaigh`,
				`Treabh an Tua Oɼga`,
				`Na Corráin`,
				`Na For-fhaire`,
				`Dragún`,
				`na Foirtileach `,
				`an tArgthóir`,
				`Lannairidhe`, 
				`Na Fiannaí Fánach`,
				`Na Fáinleoga`,
				`Na Spriochair`,
				`Na hEalaí`, 
				`Na Mictíre`	,
				`Na Ciúine`, 
				`Buíon Na Manainnise`, 
				`Na Dílseachta`,`Lile`,``,`Bárc`,`Códóir`
				]
				

				var fortuna = document.getElementById("fortuna-vid");
			}
			
			


			
			

			


	componentDidMount() {
        this.jQueryCode();
        // window.addEventListener("resize", this.resize.bind(this));
        // this.resize();
    }
	render() {
		
		function ime() { 
		let vid = document.getElementById('fortuna-vid');
			




			let fortunaTime = [

				0, 0.999179 //bat
			
				, 1.947995
			
				, 2.879788
			
				, 3.833269
			
				, 4.703301
			
				, 5.700534
			
				, 6.635405
			
				, 7.607866
			
				, 8.202764
			
				, 9.502059
			
				, 10.344323
			
				, 11.205234
			
				, 11.8
			
				, 12.6
			
				, 13.55
			
				, 15.09466
			
				, 16.018195
			
				, 16.890296
			
				, 17.50953
			
				, 18.371846
			
			
				, 19.3
			
				, 20.132032
			
				, 22.00
			
				, 22.9
			
				, 23.606052
			
				, 24.606503
			
				, 25.485475
			
				, 26.37863
			
				, 27.416979
			
				, 28.322332
			
				, 29.343308
			
				, 30.273748
			
				, 31.170325
			
				, 32.113677
			
				, 33.074869
			
				, 34.029713
			
				, 35.00184
			
				, 35.985617
			
				, 36.861393
			
				, 37.821016
			
				, 38.776928
			
				, 39.680194
			
				, 40.627361
			
				, 41.562459
			
				, 42.594088
			
				, 43.466576
			
				, 44.434434
			
				, 45.371554
			
				, 46.331188
			
				, 47.309242
			
				, 48.170715
			
				, 49.122312
			
				, 50.093291
			
				, 51.067239
			
				, 51.998431
			
				, 52.946006
			
				, 53.928298
			
				, 54.839978
			
				, 55.814187
			
				, 56.746084
			
				, 57.660556
			
				, 58.640924
			
				, 59.615353
			
				, 60.537449
			
			];		
			
			//☘

			let fortunaTeamsEng = [

				`Of the Bats`,
				`The Blood Thirsty`,
				`The Hidden`,
				`The Wave`,
				`The Grunter`,
				`The Accoutred`,
				`The Obelisk`,
				`The Illuminated`,
				`The Heritage`,
				`Shillelagh`,
				`The Cauldron`,
				`Horseman`,
				`of the Leaves`,
				`The Ring`,
				`The Dagger`,
				`The Cow`,
				`of the Wandering Warriors`,
				`The Enchanted Ones`,
				`The Night Branch`,
				`Of the Dark One`,	
				`Marauders`,
				`The Eagles`,
				`The Stronghold`,
				`of the Tricksters`,
				`of the Goblins`,
				`The flatterer`,
				`The Rogue`,
				`branch of the Black Beetle`,
				`The Kings`,
				`of the Sea Warriors`,
				`The Fury`,
				`Péire Cladhaire`,
				`of the Fae`,
				`of the Druids`,
				`The Rats`,
				`Morrigin Worshipers`,
				`The Spellbound`,
				`the Sharp Taloned`,
				`the Shield`,
				`Wisdom`,
				`Worshipers of the Crooked One`,
				`The Returned`,
				`The Fortunate`,
				`Golden Axe Tribe`,
				`the Sickle`,
				`the Vigilant`, 
				`the Dragon`,
				`Courage, Patience`,
				`The Plunderer	`,
				`Lancer-Fencers`,
				`Wandering Fenians`,
				`The Swallows`,
				`of the Stings`,
				`of the Sciences`,
				`the Wolf`,
				`The Calm`,
				`Of Mann`,
				`The Steadfast`,
				`Lily`,
				``,
			`The Skiffs`	,
			`Coders`
			]
			
			let fortunaTeams = [
			
			`Na hÍoltóga`,
			`An Cródh-linntighe`,
			`An Foluightha`,
			`An Tonn`,
			`An Gnúsachán`, 
			`An Luibhridhe`,
			`an Oibilisc`,
			`An Ionshoilsithe`,
			`An Dúchas`,
			`Sail Éille`,
			`An Coire`,
			`Na Marcra`,
			`na Dilleoga`,
			`An Fáinne`,
			`An Miodóg`,
			`An Bó`,
			`Na Fánaigh`,
			`Na hUptha`,
			`Craobh na hOidhche`,
			`Na Doilbhaithe`,
			`Foghlaithe`,
			`Na hIolair`,
			`An Daingin`,
			`Na Cleasaí`,
			`Na Siabhaire`,
			`Na Beadaidhthe`,
			`Na Rogairí`,
			`Craobh an Daol Dubh`,
			`Na Ríthe`,
			`Fiannaí Mara`,
			`Ar an Daoraí`,
			`Clunc y Dunc`,
			`Fianna Sídh`,
			`Draoithe`,
			`Na Raftáin`,
			`Adhraightheora Morrígan`,
			`Na Geasaithe`,
			`Na Bir-Iongaighe`,
			`An Sciath`,
			`Siansacht`,
			`Clachán Crom`,
			`Na Fhillte`,
			`Na Seamhasaigh`,
			`Treabh an Tua Oɼga`,
			`Na Corráin`,
			`Na For-fhaire`,
			`Dragún`,
			`na Foirtileach `,
			`an tArgthóir`,
			`Lannairidhe`, 
			`Na Fiannaí Fánach`,
			`Na Fáinleoga`,
			`Na Spriochair`,
			`Na hEalaí`, 
			`Na Mictíre`	,
			`Na Ciúine`, 
			`Buíon Na Manainnise`, 
			`Na Dílseachta`,`Lile`,``,`Bárc`,`Códóir`
			]
			
			var pucaNa = ' '
			let teamImg;
			let thePookaOf
			
			var ct = Math.floor(vid.currentTime)
			for(let i=0; i<fortunaTime.length; i++){

				if(ct<=fortunaTime[i]){
					console.log('go to next fortunaTime...' +i + " "+ ct)
				
				}
			
				if(ct>=fortunaTime[i]){
					if(ct>=fortunaTime[i+1]){
					pucaNa = fortunaTeams[i];
					pucaNa = fortunaTeams[i];
					thePookaOf = fortunaTeamsEng[i];
					console.log('this ft...' +i + " "+ ct)
					console.log('this ft...' +pucaNa + " "+ thePookaOf)
				
					console.log(fortunaTeams[i]);		teamImg = i+1;
					$('#team-icon').attr('src',"url('./images/o-fortuna/"+teamImg+".png')");
					
					$('#pO').html(pucaNa);
					$('#pOf').html(thePookaOf);
					
					
					}
				
				}
			}
			
			// var currentTime = video.currentTime;
			// alert(currentTime)


		}
		return (
		
			<div className="fortuna">
				<video id="fortuna-vid" autostart autoPlay loop fluid="false" src={fortuna} type={this.props.type} onClick={ime}
				/>
				<h1 id="pO"></h1>
				<h2 id="pOf"></h2>
				<img id="team-icon"src="" alt="" />
            </div>
		)
	}

}
