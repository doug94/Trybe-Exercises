import React, { useState } from 'react';
import './App.css';

function App() {
  const [emailList] = useState([
    {
      id: 1,
      title: 'Entrevista Marcada',
      status: 0,
    },
    {
      id: 2,
      title: 'O que há de novo no LinkedIn?',
      status: 0,
    },
    {
      id: 3,
      title: 'Sua fatura fechou',
      status: 0,
    }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>TrybeMail</h1>
      </header>
      <main className="main-content">
        <section className="top-buttons">
          <button type="button">Marcar todas como lida</button>
          <button type="button">Marcar todas como não lida</button>
        </section>
        <section>
          {emailList.map(({id, title, status}) => (
            <div key={id}>
              <span>{status ? title : (<strong>{title}</strong>)}</span>
              <button type="button">Marcar como lido</button>
              <button type="button">Marcar como não lido</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
