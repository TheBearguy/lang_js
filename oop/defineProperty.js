function User (email , password ) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function ( ) {
            return `${this._email}abc`

        },
        set : function ( value ) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function ( ) {
            return `${this._password}abc`

        },
        set : function ( value ) {
            this._password = value
        }
    })

}

const check = new User('ok@google.com', "okgoogle")
console.log(check.password);