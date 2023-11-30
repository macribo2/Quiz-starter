import React from 'react';
import './world-map.css';
import map1 from './louth.json'; // Import your map data files
// import map2 from './louth2.json';
import map3 from './louth.json';

const maps = [map1.mapData, map1.mapData, map3.mapData]; // Array of map data

class Overworld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMap: map1.mapData, // Set the default map data
    };
  }

  handleMapButtonClick = (mapData) => {
    this.setState({
      currentMap: mapData,
    });
  };

  render() {
    const { currentMap } = this.state;

    return (
      <div className="world-map-container">
        <div className="world-map">
          {currentMap.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="map-row">
              {row.map((tile, colIndex) => (
                <div key={`col-${colIndex}`} className={`map-tile tile-${tile}`}>
                  {tile}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="button-container">
          {/* Buttons to toggle different maps */}
          <button onClick={() => this.handleMapButtonClick(map1.mapData)}>Toggle Map 1</button>
          <button onClick={() => this.handleMapButtonClick(map2.mapData)}>Toggle Map 2</button>
          {/* Add more buttons for other maps */}
        </div>
      </div>
    );
  }
}

export default Overworld;
