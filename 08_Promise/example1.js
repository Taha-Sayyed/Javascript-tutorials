//Example-1

//creating a promise
const promiseOne=new Promise(function(resolve,reject){
    
    setTimeout(function(){
        console.log("Async task-1");
        resolve()
    },2000)

});

//consuming the promise

promiseOne.then(function(){
    console.log("Promise consumed for Async task-1");
});

//Example-2

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task-2");
        resolve()
    },4000)
}).then(function(){
    console.log("Promise consumed for Async task-2");
})

//Example-3

const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"Taha",
            age:22
        })
    },1000)
});

promiseTwo.then(function(obj){
    console.log(obj);
    
})