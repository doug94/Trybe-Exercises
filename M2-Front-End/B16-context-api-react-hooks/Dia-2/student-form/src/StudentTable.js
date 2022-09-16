import React, { useContext } from 'react';
import StudentContext from './StudentContext';

function StudentTable() {
  const { studentList } = useContext(StudentContext);
  return (
    <ul>
      {studentList.map(({name, age, city, module}, index) => (
        <li key={index}>Nome: {name} Idade: {age} Cidade: {city} Módulo: {module}</li>
      ))}
    </ul>
  );
}

export default StudentTable;