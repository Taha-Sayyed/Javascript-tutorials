// Using older syntax 

function User(email,password){
    this._email=email
    this._password=password

    Object.defineProperty(this,"email",{
        set:function(value){
            this._email=value;
        },

        get:function(){
            return this._email.toLowerCase();
        }
    })
    
    Object.defineProperty(this,"password",{
        set:function(value){
            this._password=value;
        },

        get:function(){
            return `Password cannot be shared due to security reason`;
        }
    })
}


const user1=new User("Taha@meta","Taha213");
console.log(user1._email);
console.log(user1.password);//Call the getter function 
console.log(user1._password);

