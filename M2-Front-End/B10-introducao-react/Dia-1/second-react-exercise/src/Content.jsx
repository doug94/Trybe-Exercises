import React from "react";

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      <div>
        {conteudos.map((item) => (
          <div key={item.conteudo}>
            <h4>{`O conteúdo é: ${item.conteudo}`}</h4>
            <p>{`Status: ${item.status}`}</p>
            <p>{`Bloco: ${item.bloco}`}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Content;