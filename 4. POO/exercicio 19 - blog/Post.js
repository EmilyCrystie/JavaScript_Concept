const Comment = require("./Comment")

class Post{
    constructor(titulo,descricao,autor){
        this.titulo=titulo
        this.descricao=descricao
        this.autor=autor
        this.comentarios=[]
    }

    addComment(usuario,descricao){
        this.comentarios.push(new Comment(usuario, descricao))
    }
}

module.exports= Post