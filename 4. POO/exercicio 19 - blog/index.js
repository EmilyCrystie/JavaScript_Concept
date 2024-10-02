const Author = require("./Author");

const novo_autor = new Author("Emily")

const post = novo_autor.addPost("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Isaac", "Muito bom!")
post.addComment("Lucas", "Achei interessante.")

console.log(novo_autor)
console.log(post)