import './App.css';

// Funciona sem parêntses com arrow function, mas acho que isso é uma má pratica
const Task = value => <li>{value}</li>;

function App() {
  const tasks = ['Estudar React', 'Me Alimentar', 'Ir para o Muay Thai', 'Dormir bem', 'Fazer o projeto'];
  const liTasks = tasks.map((task) => Task(task));
  return (
    <div>
      <ul>{liTasks}</ul>
    </div>
  );
}

export default App;
