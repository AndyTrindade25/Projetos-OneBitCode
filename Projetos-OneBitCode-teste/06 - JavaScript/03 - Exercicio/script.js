let primeiroNome;
let sobrenome;
let campoDeEstudo;
let anoNascimento;

primeiroNome = window.prompt("Qual o seu primeiro nome?");
console.warn("Variavel primeiroNome foi salvo: " + primeiroNome);

sobrenome = window.prompt(
  "Olá " + primeiroNome + ", por favor digite o seu sobrenome"
);
console.warn("Variavel sobrenome foi salvo: " + sobrenome);

campoDeEstudo = window.prompt(
  "Olá " +
    primeiroNome +
    " " +
    sobrenome +
    ", por favor me informe o seu campo de estudo"
);
console.warn("Vdariavel campoDeEstudo foi salvo: " + campoDeEstudo);

anoNascimento = window.prompt("E por último, digite o seu ano de nascimento");
console.warn("Variavel anoNascimento foi salvo: " + anoNascimento);

window.alert("Processando informações:");

let idadeAtual = 2022 - anoNascimento;

window.alert(
  "Nome completo: " +
    primeiroNome +
    " " +
    sobrenome +
    " / Campo de atuação: " +
    campoDeEstudo +
    " / Idade: " +
    idadeAtual
);
