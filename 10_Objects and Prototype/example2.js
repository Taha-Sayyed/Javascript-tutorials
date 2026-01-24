function createUser(username,score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`Score is ${this.score}`);
}

const user1=new createUser("Taha",100)
const user2=new createUser("Sayyed",98);


user1.increment();
user1.printMe();

user2.increment();
user2.printMe();