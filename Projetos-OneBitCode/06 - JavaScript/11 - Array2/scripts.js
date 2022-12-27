const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

console.log(arr);
//Adicionar elementos
//push - adcionar elementos no final do array

arr.push("Final");
arr.push("Final2");
console.log(arr);

//unshift - Adicionar elementos no inicio do array
arr.unshift("Inicio");
console.log(arr);

//pop - Remover elemento que está no final do array
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//shift - Remover elementos no começo do array
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//Pesquisar por um elemento
//includes
const inclui = arr.includes("Gandalf");
console.log(inclui);

//indexOf - Saber se o elemento está incluso e a posição dela no array
const indice = arr.indexOf("Gandalf");
console.log(indice);

//Cortar e concetenar
//slice - Cortar os elementos de 0 a 3
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);

//concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

//Substituição dos Elementos
//splice
//Encontra o indice, que no caso seria 4
//Quantos precisam excluir apartir do indice
//Depois substituir!
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

//Iterar sobre os Elementos

for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + "Se encontra na posição " + indice);
}
