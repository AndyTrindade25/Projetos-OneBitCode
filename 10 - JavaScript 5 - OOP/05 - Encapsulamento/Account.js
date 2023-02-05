class Account {
    #password
    #balance = 0
    constructor(user){
        this.email = user.email
        this.#password = user.password
    }
    getBalance(email, password){
        if(this.email === email && this.#password === password){
            return this.#balance;
        } else {
            return null
        }
    }
}

const user = {
    email: "anderson.trindade00@gmail.com",
    password: "123"
}

const myAccount = new Account(user)
console.log(myAccount)
console.log(myAccount.getBalance("anderson.trindade00@gmail.com", "123"))
