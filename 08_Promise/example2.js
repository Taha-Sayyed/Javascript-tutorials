//Example-1

const promiseOne=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true;
        if(error===false){
            resolve({
                username:"Taha",
                Education:"Btech in AIML"
            })
        }else{
            reject("Error: Something Went Wrong")
        }
    },2000)
})

promiseOne.then((obj)=>{
    return obj.username;
}).then((objReturn)=>{
    console.log(objReturn);  
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Finally called");
    
})

//Example-2

const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({
            username:"Taha",
            age:22,
            Education:"BTech in AIML"
        })
    },2000)
})

//consumer function using aysnc await
async function consumepromiseTwo(){
    try{
        const response=await promiseTwo
        console.log(response.username);
        console.log(response.Education);
        console.log(response.age);
        
        
    }
    catch(err){
        console.log(err);
        
    }
}

consumepromiseTwo();
