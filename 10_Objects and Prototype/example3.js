//In the given below example, we define a method on Object.prototype, allowing all objects and arrays to inherit and access the sayHelloToUser function via the prototype chain

Object.prototype.sayHelloToUser=function(username){
    console.log(`Hello ${username}`);
}

const userObj={
    name:"Taha",
    Education:"Btech"
}

userObj.sayHelloToUser(userObj.name)

//Array
const userArr1=[
    {
        name:"Taha Sayyed",
        Education:"BTech in AIML"
    }
]

userArr1.sayHelloToUser(userArr1[0].name)


//Example-2
//Here we define method on Array.prototype, allowing only Array object to inherit and access sayHelloToArrayUser function

Array.prototype.sayHelloToArrayUser=(userArray)=>{
    console.log(userArray);
}

userArr2=["Taha","Sayyed","Ashraf"]
userArr2.sayHelloToArrayUser(userArr2);

//Example-3

String.prototype.trueLength=function(){
    console.log(this.trim().length);
}

const username="Taha Sayyed          "
username.trueLength();