const arr = [
  "1o Nivel",
  ["2o Nivel", 42, true],
  [
    ["3o Nivel, 1o item", "Olá Mundo!"],
    ["3o Nivel, 2o item", "Oi, mundo!"],
  ],
  [],
];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log[arr[2]];
console.log(arr[2][1]);
console.log(arr[2][1][0]);

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];

// console.table(matriz);

// matriz.push("Nova linha");
// matriz[0].push("Nova coluna");

// console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j];
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento);
  }
}