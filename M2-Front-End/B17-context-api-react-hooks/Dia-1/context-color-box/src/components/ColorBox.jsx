import React from 'react';
import MyContext from '../context/MyContext';
import '../styles/box.css';

class ColorBox extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {(value) => (
          <button
            type="button"
            className="box"
            style={{ backgroundColor: value.color }}
            onClick={value.handleClick}
          >
            Click me to change my color!
          </button>
        )}
      </MyContext.Consumer>
    )
  }
}
export default ColorBox;