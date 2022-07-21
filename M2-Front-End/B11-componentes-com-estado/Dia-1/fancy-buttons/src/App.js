import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);
    this.state = {
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0,
    }
  }

  handleClickBtn1() {
    this.setState((prevState, _props) => ({clicksBtn1: prevState.clicksBtn1 += 1}));
  }
  
  handleClickBtn2() {
    this.setState((prevState, _props) => ({clicksBtn2: prevState.clicksBtn2 += 1}));
  }
  
  handleClickBtn3() {
    this.setState((prevState, _props) => ({clicksBtn3: prevState.clicksBtn3 += 1}));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickBtn1}>{this.state.clicksBtn1}</button>
        <button onClick={this.handleClickBtn2}>{this.state.clicksBtn2}</button>
        <button onClick={this.handleClickBtn3}>{this.state.clicksBtn3}</button>
      </div>
    );
  }
}

export default App;
