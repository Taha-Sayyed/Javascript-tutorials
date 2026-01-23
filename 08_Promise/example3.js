//Using try catch method 

async function getAllUser(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=response
        console.log(data);
        
    }
    catch(err){
        console.log("Err: ",err);
    }
}

getAllUser()


//Using .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})