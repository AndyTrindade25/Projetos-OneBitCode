const Personagem = require("./Personagem");

class Mage extends Personagem{
    constructor(nomePersonagem, pontosVida, pontosAtaque, pontosDefesa, pontosMagia){
        super(nomePersonagem, pontosVida, pontosAtaque, pontosDefesa)
        this.pontosMagia = pontosMagia
    }

    ataque(alvoPersonagem){
        alvoPersonagem.pontosVida -= (this.pontosAtaque + this.pontosMagia) - alvoPersonagem.pontosDefesa
    }

    cura(alvoPersonagem){
        alvoPersonagem.pontosVida += this.pontosMagia * 2
    }
}

module.exports = Mage