import React, {Component} from 'react';
import './App.css';
import DataComp from './DataComp'
import ButtonBar from './ButtonBar'
import data from './data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dataIndex: 0
    }
  }

  updateStateAdd(){
    if (this.state.dataIndex <= data.length - 2){
    this.setState({dataIndex: this.state.dataIndex + 1})
    }
  }
  updateStateSubtract(){
    if (this.state.dataIndex >= 1) {
    this.setState({dataIndex: this.state.dataIndex - 1})
    }
  }

  updateStateAdd = this.updateStateAdd.bind(this)
  updateStateSubtract = this.updateStateSubtract.bind(this)


  render() {
    return (
      <div className="App">
        <div className='background'>
          <header className='blue-bar'>
            <h4 className="home-logo">Home</h4>
          </header>
          <div className='white-box-parent'>
          <div className="white-box">
            <DataComp 
            updateStateAddFn = {this.updateStateAdd}
            updateStateSubtractFn = {this.updateStateSubtract}
            dataIndexNum = {this.state.dataIndex}
            />
          </div>
          </div>
          <div className="button-parent">
            <ButtonBar 
            updateStateAddFn = {this.updateStateAdd}
            updateStateSubtractFn = {this.updateStateSubtract}
            dataIndexNum = {this.state.dataIndex}
            />
          </div>
        </div>
      </div>
  );
  }
}

export default App;
