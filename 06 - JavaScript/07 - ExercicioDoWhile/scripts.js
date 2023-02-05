let opcao = "5";

do {
  opcao = prompt(
    "Escolha uma das opções abaixo2:\n" +
      "1. Opção Um\n" +
      "2. Opção Dois\n" +
      "3. Opção três\n" +
      "4. Opção quatro\n" +
      "5. Encerrar"
  );

  switch (opcao) {
    case "1":
      alert("Você escolhe a opção 1");
      break;
    case "2":
      alert("Você escolheu a opção 2");
      break;
    case "3":
      alert("Você escolheu a opção 3");
      break;
    case "4":
      alert("Você escolheu a opção 4");
      break;
    case "5":
      alert("Você escolheu finalizar");
      alert("Finalizando...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao !== "5");
