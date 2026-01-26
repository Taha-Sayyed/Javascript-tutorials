class User{
    constructor(username,email,passsword){
        this.username=username;
        this.email=email;
        this.passsword=passsword;
    }

    set username(value){
        this._username=value;
    }

    get username(){
        return this._username;
    }

    set passsword(value){
        this._password=value;
    }

    get passsword(){
        return `Password cannot be returned due to security issue`;
    }

}

const user1=new User("Taha","taha@meta","213");
console.log(user1.username);//Calls the getter function
console.log(user1.passsword);//Calls the getter function

