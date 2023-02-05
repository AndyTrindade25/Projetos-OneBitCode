// function calcularMedia(a, b) {
//   const media = (a + b) / 2;
//   console.log(media);
// }

// calcularMedia();

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };

  return produto;
}

console.log(criarProduto("Teste", "teste"));
