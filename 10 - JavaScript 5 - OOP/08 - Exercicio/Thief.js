const Personagem = require("./Personagem");

class Thief extends Personagem{
    ataque(alvoPersonagem){
        alvoPersonagem.pontosVida -= (this.pontosAtaque - alvoPersonagem.pontosDefesa) * 2
    }
}

module.exports = Thief