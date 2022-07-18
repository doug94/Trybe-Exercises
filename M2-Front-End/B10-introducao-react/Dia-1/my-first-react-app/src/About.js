import React from "react";

class About extends React.Component {
  render() {
    const name = 'Douglas Alves';
    const description = 'Tenho 28 anos, sou estudante da Turma 23 da Trybe e quero me tornar Dev :)';
    const skills = ['Git', 'HTML', 'CSS', 'JavaScript', 'JavaScript ES6', 'CSS Flexbox', 'Jest', 'React'];
    const jsxSkills = skills.map((skill) => <li>{skill}</li>);
    return (
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>Minhas Habilidades</h2>
        <ul>{jsxSkills}</ul>
      </div>
    );
  };
}

export default About;