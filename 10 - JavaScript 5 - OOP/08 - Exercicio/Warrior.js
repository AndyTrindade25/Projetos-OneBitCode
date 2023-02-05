const Personagem = require("./Personagem");

class Warrior extends Personagem {
     constructor(nomePersonagem, pontosVida, pontosAtaque, pontosDefesa, pontosEscudo){
        super(nomePersonagem, pontosVida, pontosAtaque, pontosDefesa)
        this.pontosEscudo = pontosEscudo
        this.posicao = 'Atacando'
     }
     ataque(alvoPersonagem){
        if(this.posicao === 'Atacando'){
            super.ataque(alvoPersonagem)
        }
     }

     mudarPosicao(){
        if(this.posicao === 'Atacando'){
            this.posicao = 'Defendendo'
            this.pontosDefesa += this.pontosEscudo 
        } else {
            this.posicao = 'Atacando'
            this.pontosDefesa -= this.pontosEscudo
        }
     }
}

module.exports = Warrior