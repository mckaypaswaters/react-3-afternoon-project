import React from 'react';
import './App.css';
import DataComp from './DataComp'

function App() {
  return (
    <div className="App">
      <div className="background">
        <header className='blue-bar'>
          <h4 className='home-logo'>Home</h4>
        </header>
          <div className='white-box-parent'>
            <div className="data-white-box">
              <DataComp />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
