class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }

    publish(){
        this.published = true
    }
}

const eragon = new Book("Trindade")
const livro2 = new Book("Nunes")

eragon.publish()

console.log(eragon)
console.log(livro2)

console.log([eragon, livro2] instanceof Array)
