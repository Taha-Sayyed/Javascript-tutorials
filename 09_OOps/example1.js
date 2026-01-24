//Example of Constructor function
//This is how JavaScript did “classes” before the class keyword was introduced in ES6.

function User(username,loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=()=>{
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const user1=new User("Taha Sayyed",1,true);
console.log(user1);
const const_ref=user1.constructor;//returns a reference to the constructor function that created the instance object

console.log(const_ref);
