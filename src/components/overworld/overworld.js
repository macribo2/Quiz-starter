import React from 'react';
// import './world-map.css';
import mapsData from '../../mapData.json';
import antrim from './antrim.json'
import armagh from './armagh.json'
import carlow from './carlow.json'
import cavan from './cavan.json'
import clare from './clare.json'
import cork from './cork.json'
import derry from './derry.json'
import donegal from './donegal.json'
import down from './down.json'
import dublin from './dublin.json'
import fermanagh from './fermanagh.json'
import galway from './galway.json'
import kerry from './kerry.json'
import kildare from './kildare.json'
import kilkenny from './kilkenny.json'
import laois from './laois.json'
import leitrim from './leitrim.json'
import limerick from './limerick.json'
import longford from './longford.json'
import louth from './louth.json'
import mayo from './mayo.json'
import meath from './meath.json'
import monaghan from './monaghan.json'
import offaly from './offaly.json'
import roscommon from './roscommon.json'
import sligo from './sligo.json'
import tipperary from './tipperary.json'
import tyrone from './tyrone.json'
import waterford from './waterford.json'
import westmeath from './westmeath.json'
import wexford from './wexford.json'
import wicklow from './wicklow.json'



 
// Define your maps data
const maps = {
  louth: louth.mapData,
  offaly: offaly.mapData,
  // Add more maps here
};
class Overworld extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedMap:louth,
      selectedMapIndex: 0,
      // currentMapKey: 'louth', // Set the default map key
      playerPosition: {
        row: 0,
        col: 0,
      },
      badGuyPosition: {
        row: 5,
        col: 5,
      },
      message: '',
      remainingMoves: 2,
      isBadGuyMoving: false,
      selectedMapIndex: 0,
      currentCountyIndex: 0, 
      currentMap: louth.mapData, // Set the default map data
    };
  }


  handleMapButtonClick = (mapData) => {
    this.setState({
      currentMap: mapData,
    });
  };
  
  componentDidMount() {
    this.updateMessage();
    window.addEventListener('resize', this.handleResize);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  
  updateMessage = () => {
    const message = window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait';
    this.setState({ message });
  };
  
  handleResize = () => {
    this.updateMessage();
  };
  
  canMove = (row, col) => {
    const { mapData } = this.props;
    const { remainingMoves } = this.state;
    return mapData[row][col] !== 9 && remainingMoves > 0;
  };

  handleTileTouch = (row, col) => {
    const { playerPosition, selectedMapIndex } = this.state;
    // const selectedMap = maps[selectedMapIndex];
    const selectedMap = this.state.selectedMap;//mapsData[this.state.selectedMapIndex];

    const tileValue = selectedMap.mapData[row][col];

    if (this.canMove(row, col)) {
      this.setState((prevState) => ({
        playerPosition: { row, col },
        remainingMoves: prevState.remainingMoves - 1,
      }));

      if (tileValue >= 2 && tileValue <= 9) {
        const newMapIndex = tileValue - 2; // Adjust the index accordingly
        this.setState({ selectedMapIndex: newMapIndex });
      }
    }
  }

  getLocationName(selectedMap, playerPosition) {
    const { locations } = selectedMap;
    const tileValue = this.state.selectedMap.mapData[playerPosition.row][playerPosition.col];
  
    if (tileValue >= 30 && tileValue <= 35) {
      const locationIndex = tileValue - 30;
      return locations[locationIndex];
    }
  
    return '';
  }
  
  moveBadGuy = () => {
    const { badGuyPosition } = this.state;
    const newBadGuyPosition = { ...badGuyPosition };

    // Implement your logic to move the bad guy
    // For example, move towards the player's position
    if (newBadGuyPosition.row < this.state.playerPosition.row) {
      newBadGuyPosition.row += 1;
    } else if (newBadGuyPosition.row > this.state.playerPosition.row) {
      newBadGuyPosition.row -= 1;
    }

    if (newBadGuyPosition.col < this.state.playerPosition.col) {
      newBadGuyPosition.col += 1;
    } else if (newBadGuyPosition.col > this.state.playerPosition.col) {
      newBadGuyPosition.col -= 1;
    }

    this.setState({ badGuyPosition: newBadGuyPosition });
  };

  handleBattleClose = () => {
    this.setState({
      badGuyPosition: null,
    });
  };

  handleMapButtonClick = (mapData) => {
    this.setState({
      currentMap: mapData,
    });
  };
 
  endTurn = () => {
    const { playerPosition } = this.state;
    
    const tileValue = this.state.selectedMap //.mapData[playerPosition.row][playerPosition.col];
    
    this.setState(
      {
        remainingMoves: 2,
        isBadGuyMoving: true,
      },
      () => {
        this.moveBadGuy();
        setTimeout(() => {
          this.setState({ isBadGuyMoving: false });
          
          // Show alert and load new county data if tile value is between 2 and 9
          if (tileValue >= 2 && tileValue <= 9) {
}
            alert('selected map index' + this.state.selectedMapIndex)
            alert('Map' + this.state.currentMap)
          

    // this.setState({ selectedMapIndex: 4 });
    // this.setState({ currentCountyIndex: 4 });
          
        }, 1000);
      }
    );
  };
  
  renderGameBoard() {
    const { playerPosition, badGuyPosition, currentMap } = this.state;
    // const selectedMap = maps[currentMap]; // Use currentMap instead of selectedMapIndex
    const selectedMap = mapsData[this.state.selectedMapIndex];
  
    return selectedMap.mapData.map((row, rowIndex) => (
      <div key={`row-${rowIndex}`} className="game-row">
        {row.map((tile, colIndex) => {
          const isPlayerTile = rowIndex === playerPosition.row && colIndex === playerPosition.col;
          const isBadGuyTile = badGuyPosition && rowIndex === badGuyPosition.row && colIndex === badGuyPosition.col;
          const rowDiff = Math.abs(rowIndex - playerPosition.row);
          const colDiff = Math.abs(colIndex - playerPosition.col);
          const isHighlighted = rowDiff <= this.state.remainingMoves && colDiff <= this.state.remainingMoves;
  
          let content = null;
  
          if (tile === 0) {
            content = <div className="obstacle"></div>;
          } else if (tile >= 30 && tile <= 35 && isPlayerTile) {
            const locationIndex = tile - 30; // Adjust to get the correct index
            content = <div className="square-number">{selectedMap.locations[locationIndex]}</div>;
          } else {
            content = <div className="square-number">{tile}</div>;
          }
  
          return (
            <div>
            </div>
          );
        })}
      </div>
    ));
  }
  
  render() {
    const { currentMap } = this.state;

    const { message, isBadGuyMoving, playerPosition, badGuyPosition, selectedMapIndex, currentCountyIndex } = this.state;
    const selectedMap = mapsData[this.state.selectedMapIndex];

    const { locations } = selectedMap;
  
    const currentCounty = mapsData[this.state.selectedMapIndex];
  
    return (
      <div> </div>
    );
  }
}

export default Overworld;
