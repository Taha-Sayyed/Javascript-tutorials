class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`Course is added by the Teacher ${this.username}`);
    }
}

const teacher1=new Teacher("Taha Sayyed","taha@harvard","tahaharvard786");
teacher1.addCourse();
teacher1.logMe();
console.log(teacher1 instanceof Teacher);
console.log(teacher1 instanceof User);
