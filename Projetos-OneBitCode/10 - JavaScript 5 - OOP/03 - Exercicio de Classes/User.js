class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password){
        if(this.email = email && this.password === password) {
            console.log("Login realizado com sucesso!")
        } else {
            console.log("Falha ao realizar o login! Email ou senha incorretos.")
        }
    }
}

const john = new User("John Doe", "anderson.trindade00@gmail.com", "123")
console.log(john)
john.login("anderson.trindade00@gmail.com", "123")
