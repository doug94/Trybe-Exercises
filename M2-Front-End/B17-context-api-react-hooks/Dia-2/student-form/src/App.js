import React, { useContext } from 'react';
import { useState } from 'react';
import StudentContext from './StudentContext';
import StudentTable from './StudentTable';

function App() {
  const [form, setForm] = useState({
    name: '',
    age: 0,
    city: '',
    module: 'Fundamentos'
  });

  const { studentList, setStudentList } = useContext(StudentContext);

  const { name, age, city, module } = form;

  const handleChange = ({target}) => setForm((state) => ({
    ...state,
    [target.name]: target.value,
  }));

  const handleSelect = ({target}) => setForm((state) => ({
    ...state,
    module: target.value,
  }));

  const handleClick = () => setStudentList([...studentList, form]);

  return (
    <form>
      <label htmlFor="name-input">
        Nome completo:
        <input id="name-input" name="name" value={name} onChange={handleChange}/>
      </label>
      <label htmlFor="age-input">
        Idade
        <input type="number" id="age-input" name="age" value={age} onChange={handleChange}/>
      </label>
      <label htmlFor="city-input">
        Cidade
        <input id="city-input"value={city} name="city" onChange={handleChange}/>
      </label>
      <label htmlFor="fundamentos">
        <input
          type="radio"
          id="fundamentos"
          checked={module==='Fundamentos'}
          value="Fundamentos"
          name="module"
          onChange={handleSelect}
        />
        Fundamentos
      </label>
      <label htmlFor="front-end">
        <input
          type="radio"
          id="front-end"
          checked={module==='Front-end'}
          value="Front-end"
          name="module"
          onChange={handleSelect}
        />
        Front-end
      </label>
      <label htmlFor="back-end">
        <input
          type="radio"
          id="back-end"
          checked={module==='Back-end'}
          value="Back-end"
          name="module"
          onChange={handleSelect}
        />
        Back-end
      </label>
      <label htmlFor="cc">
        <input
          type="radio"
          id="cc"
          checked={module==='Ciência da Computação'}
          value="Ciência da Computação"
          name="module"
          onChange={handleSelect}
        />
        Ciência da Computação
      </label>
      <button type="button" onClick={handleClick}>Enviar</button>
      <StudentTable />
    </form>
  );
}

export default App;
