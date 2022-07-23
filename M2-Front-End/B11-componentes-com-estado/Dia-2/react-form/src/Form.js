import React, { Component } from 'react'
import Estados from './Estados';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      email: '',
      nome: '',
      idade: 0,
      vaiComparecer: false
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
            <textarea name="estadoFavorito" placeholder="Digite o motivo da sua escolha" />
          </label>

          <label>
            Escolha seu estado
            <Estados value={this.handleChange} />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={this.handleChange}
            />
          </label>

          <label>
            Nome
            <input
              name="nome"
              placeholder="Digite seu nome"
              onChange={this.handleChange}
            />
          </label>

          <label>
            Idade
            <input
              type="number"
              name="idade"
              placeholder='Digite sua idade'
              onChange={this.handleChange}
            />
          </label>

          <label>
            Vai comparecer
            <input
              type="checkbox"
              name="vaiComparecer"
              onChange={this.handleChange}
            />
          </label>

        </form>
      </div>
    );
  }
}

export default Form;