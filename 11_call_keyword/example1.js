function setUsername(username){
    console.log("func called");
    
    this.username=username;
}

function createuser(username,email,password){
    setUsername.call(this,username);
    this.email=email;
    this.password=password;
}

const chai=new createuser("Taha","taha@fb","123")
console.log(chai);
