class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return `Email: ${this._email}`
    }

    set email(mailId){
        this._email = mailId
    }

    get password(){
        return `${this._password}panda`
    }
    set password(value){
        this._password = value
    }
    // Note that the variables in getter and setter functions are different from what had been defined in the constructor, bcoz if they are both the same then, the constructor tries to set the values as defined in it and the getter-setters try to set the value as defined in it, (which are both different), so they both race against each other as to which value to set. Therefore, the variables inside setters-getters must be different.
}

const userOne = new User('ok@google.com', 'okgoogle')

console.log(userOne.email);