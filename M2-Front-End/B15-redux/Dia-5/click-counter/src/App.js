import React from 'react';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';

class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <ButtonClicks />
        <NumberClicks />
      </div>
    );
  }
}

export default App;
