import './App.css';
import React from 'react';
import MyContext from './context/MyContext';
import ColorBox from './components/ColorBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'blue',
      backgroundColors: ['blue', 'green', 'red'],
      index: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.switchBackgroundColor = this.switchBackgroundColor.bind(this);
  }

  switchBackgroundColor() {
    this.setState((state) => ({backgroundColor: state.backgroundColors[state.index]}))
  }
  
  handleClick() {
    const { index, backgroundColors } = this.state;
    index < backgroundColors.length - 1 ? this.setState((prevState) => (
      {index: prevState.index += 1}), this.switchBackgroundColor) : this.setState({index:0}, this.switchBackgroundColor)
  }

  render() {
    const contextValue = {
      color: this.state.backgroundColor,
      handleClick: this.handleClick,
    };
    return (
      <MyContext.Provider value={contextValue}>
        <ColorBox />
      </MyContext.Provider>
    );
  }
}
export default App;
