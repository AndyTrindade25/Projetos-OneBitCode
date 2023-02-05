class Veiculo {
    move(){
        console.log("O veículo está se movendo")
    }
}

class Carro extends Veiculo {
    move(){
        console.log("O carro está se movendo")
    }
}

class Moto extends Veiculo {
    move(){
        console.log("A moto está se movendo")
    }
}

class Bicicleta extends Veiculo {
    move(){
    console.log("A bicicleta está se movendo")
    }
}

class Aviao extends Veiculo {
    move(speed){
        console.log(`"O avião está se movendo a ${speed} km/h"`)

    }
}

const golf = new Carro()
const twister = new Moto()
const bicicleta = new Bicicleta()
const aviao = new Aviao()

// golf.move()
// twister.move()
// bicicleta.move()
// aviao.move(200)

function start(veiculo){
    console.log("Iniciando veiculo")
    veiculo.move()
}

start(golf)
start(twister)
start(bicicleta)
start(aviao)