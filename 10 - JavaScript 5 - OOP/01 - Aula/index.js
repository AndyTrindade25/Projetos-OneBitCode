// const book = {
//     title: "JavaScript",
//     pages: 500,
//     published: true,
//     inStock: 30,
//     tags: ["fantasy", "adventure", "medieval"],
//     author: {
//         name: "Anderson Trindade"
//     },
//     addOnStock(quantity){
//         this.inStock += quantity
//     }
// }
function Book(title, pages, tags, author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0;
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    }
    this.save = function(){
        //salva no banco de dados.
    }
}

const author = {name: "Anderson Trindade"}
const tags = ["fantasy", "adventure"]
const eragon = new Book("Anderson", 468, tags, author)


const eldest = new Book("Nunes", 644, tags, author)

console.log(eldest, eragon)