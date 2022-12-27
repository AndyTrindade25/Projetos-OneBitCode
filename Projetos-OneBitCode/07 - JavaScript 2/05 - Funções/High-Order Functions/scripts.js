function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maça2", "Banana", "Laranja", "Limão"];

lista.forEach(exibirElemento);
