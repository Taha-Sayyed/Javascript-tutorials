//Spread Operator
//Example-1
const obj1={1:"a",2:"b"}

const obj2={3:"a",4:"b"}
const obj3={...obj1,...obj2}
console.log(obj3);

//Example-2

const obj4={a:1,b:2}
const obj5={b:3,d:4}
const obj6={...obj4,...obj5}
console.log(obj6);

console.log(obj6===obj4);
