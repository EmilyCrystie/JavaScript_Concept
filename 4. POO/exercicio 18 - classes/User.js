class User{
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email,password){
        if(this.email === email && this.password === password){
            console.log('Entrou, login realizado com sucesso');
        } else {
            console.log('Usuário e/ou senha incorretos');
        }
    }
}

const user1 = new User("John Doe", "aaa@hotmail.com", "1568742")
console.log(user1)

user1.login("aaa@hotmail.com", "1234")
user1.login("aaa@hotmail.com", "1568742")