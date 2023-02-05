let velocidade = 80;

while (velocidade > 0) {
  alert("O carro está a " + velocidade + "km/h");
  velocidade -= 20;
  alert("Diminuindo mais 20km/h");

  if (velocidade === 40) {
    alert("Chegou a 40km/h, vamos parar ");
    break;
  }
}
