//Example-1
const func1=(num1,num2)=>{
    return num1+num2
}

console.log(func1(2,2));

//Example-2
const func2=(num1,num2)=>{return num1+num2}//Explicit return 
console.log(func2(2,2));

//Example-3
const func3=(num1,num2)=>num1+num2//Implicit return
console.log(func3(2,2));

//Example-4
const func4=()=>({username:"Taha"})
console.log(func4());
