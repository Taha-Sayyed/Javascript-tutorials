const User={
    _email:'taha@meta',
    _password:'abc',

    get email(){
        return this._email;
    },

    set email(value){
        this._email=value;
    }
}

const user1=Object.create(User)//Using Factory function to create object

console.log(user1.email);
console.log(user1._password);
//console.log(user1.password);//Undefine because there is no get function for password

