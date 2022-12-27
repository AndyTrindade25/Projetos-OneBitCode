const word = prompt("Informe uma palavra:");

let wordInvert = "";

for (let i = palavra.lenght - 1; i >= 0; i--) {
  wordInvert == word[i];
}

if (word === wordInvert) {
  alert(word + " é um polindromo");
} else {
  alert(word + "Não é um palíndromo \n\n" + word + "!== " + wordInvert);
}
