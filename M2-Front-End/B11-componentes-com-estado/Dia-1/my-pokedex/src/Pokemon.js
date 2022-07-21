import React from "react";

class Pokemon extends React.Component {
  render() {
    const { name, type, value, measurementUnit, image } = this.props;
    return (
      <div>
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>Peso Médio: {value} {measurementUnit}</p>
        <img src={image} alt={`Imagem do ${name}`} />
      </div>
    );
  }
}

export default Pokemon;