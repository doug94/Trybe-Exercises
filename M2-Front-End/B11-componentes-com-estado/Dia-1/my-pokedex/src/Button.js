import React from "react";

class Button extends React.Component {

  render() {
    return <button onClick={this.props.getNextPokemon}>Próximo Pokemon</button>
  }
}

export default Button;
