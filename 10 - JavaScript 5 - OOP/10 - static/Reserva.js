class Reserva{
    constructor(hospedes, quarto, dias){
        this.hospedes = hospedes
        this.quarto = quarto
        this.dias = dias
        this.total = dias * Reserva.taxaBase
    }

    static taxaBase = 150

    static mostrarTaxaBase(){
        console.log(`A taxa base é ${Reserva.taxaBase}`)
    }

    static get taxaPremium(){
        return Reserva.taxaBase * 1.5
    }
}

Reserva.mostrarTaxaBase()

const reserva1 = new Reserva(2, "201", 5)
console.log(reserva1)

Reserva.taxaBase = 200

const reserva2 = new Reserva(2, "104", 2)
console.log(reserva2)

console.log(`A taxa premium é ${Reserva.taxaPremium}`)