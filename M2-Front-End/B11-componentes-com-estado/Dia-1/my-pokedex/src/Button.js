import React from "react";

class Button extends React.Component {

  getNextPokemon() {
    console.log('Inner call')
  }

  render() {
    return <button>Próximo Pokemon</button>
  }
}

export default Button;
