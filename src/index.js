import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DeviceOrientation, { Orientation } from 'react-screen-orientation'

ReactDOM.render(

   <DeviceOrientation lockOrientation={'landscape'}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation='landscape' alwaysRender={false}>
         
  <React.StrictMode>
    <App />
      </React.StrictMode>
      </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation='portrait'>
          <div>

      </div>
        </Orientation>
      </DeviceOrientation>,
  document.getElementById('root')
);
