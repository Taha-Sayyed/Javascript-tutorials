/**
//New syntax by JS
class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    
    encryptPassword(){
        return `${this.password}*#53$%$^`
    }
    
    changeUsername(username){
        this.username=username;
    }
}

const user1=new User("Taha","taha@meta","taha123");
console.log(user1.encryptPassword());
user1.changeUsername("Sayyed Taha");
console.log(user1.username);
*/

//Behind the scenes

function User(username,email,password){
    this.username=username;
    this.password=password;
    this.email=email;
}

User.prototype.encryptPassword=function(){
    return `${this.password}*#53$%$^`;
}

User.prototype.changeUsername=function(username){
    this.username=username;
}

const user1=new User("Taha","taha@fb","tahameta123343");
console.log(user1.encryptPassword());
user1.changeUsername("Sayyed Taha");
console.log(user1);




