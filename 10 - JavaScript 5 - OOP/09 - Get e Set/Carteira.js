class Carteira {
    #quantidade
    #usuario

    constructor(){
        this.#quantidade = 100.99 * 100
    }

    get quantidade(){
        return this.#quantidade / 100
    }
   
    set usuario(novoUsuario){
        if(typeof novoUsuario === 'string'){
        this.#usuario = novoUsuario
    } else{
        console.log("Nome precisa ser em letras")
    }}
    get usuario(){
        return this.#usuario
    }
}

const minhaCarteira = new Carteira()

console.log(minhaCarteira.quantidade)

minhaCarteira.usuario = "Anderson"
console.log(minhaCarteira.usuario)

minhaCarteira.usuario += " Trindade"

console.log(minhaCarteira.usuario)
minhaCarteira.usuario = 25
console.log(minhaCarteira.usuario)