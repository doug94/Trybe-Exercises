let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
 console.log("Bem-vinda, " + info.personagem);

 //Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
 info["Recorrente"] = "Sim";
 console.log(info);

 //Faça um for/in que mostre todas as chaves do objeto.
 for (let detalhe in info) {
     console.log(detalhe);
 }

 //Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
 for (let detalhe in info) {
     console.log(info[detalhe]);
 }

 //Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 
 let otherInfo = {
     personagem: "Margarida e Tio Patinhas",
     origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
     nota: "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas",
     Recorrente: "Ambos recorrentes"
 };
 console.log(otherInfo);

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'");

//Adicione um novo livro favorito na chave livrosFavoritos, que é um array.
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Arkaban',
    autor: 'JK Rowling',
    editara: 'Rocco'
});

//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");