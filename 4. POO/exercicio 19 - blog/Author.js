const Post = require("./Post")

class Author{
    constructor(nome){
        this.nome=nome
        this.posts=[]
    }

    addPost(titulo,descricao){
        const post = new Post(titulo,descricao,this)
        this.posts.push(post)
        return post
    }
}

module.exports = Author