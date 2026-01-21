//Example-1
const arr1=[1,2,3,4]

const mytotal1=arr1.reduce(function(acc,curr){
    console.log(`acc ${acc} and curr ${curr}`);
    return acc+curr
},0)
console.log(mytotal1);

//Example-2

const arr2=[1,2,3,4]

const mytotal2=arr2.reduce((acc,curr)=>(acc+curr),0)
console.log(mytotal2);
