//Example-1 on "this" keyword

const user={
    username:"Taha",
    age:18,
    welcomeMessage:function(){
        console.log(`Welcome ${this.username}`);
        console.log(this);//Here this refer to the whole Object user
        
    }
}

user.welcomeMessage();
user.username="Sayyed";
user.welcomeMessage();
