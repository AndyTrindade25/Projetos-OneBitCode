let saldo = prompt("Informe o seu saldo inicial: ");
saldo = parseFloat(saldo);
let opcao = "";

do {
  opcao = prompt(
    "Saldo dísponível: R$" +
      saldo +
      "\n1. Adicionar dinheiro " +
      "\n2. Remover dinheiro " +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o valor a ser removido: "));
      break;
    case "3":
      alert("Saindo do programa!");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao !== "3");
