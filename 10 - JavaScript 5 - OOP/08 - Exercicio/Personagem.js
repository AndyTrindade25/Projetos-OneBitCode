class Personagem{
    constructor(nomePersonagem, pontosVida, pontosAtaque, pontosDefesa){
        this.nomePersonagem = nomePersonagem
        this.pontosVida = pontosVida
        this.pontosAtaque = pontosAtaque
        this.pontosDefesa = pontosDefesa
    }

    ataque(alvoPersonagem){
        alvoPersonagem.pontosVida -= this.pontosAtaque - alvoPersonagem.pontosDefesa
    }
}

module.exports = Personagem
