const target={
    a:1,
    b:2
}

const source={
    b:4,
    c:5
}

//const returnedTarget=Object.assign(target,source)
const returnedTarget=Object.assign(target,source)
console.log(returnedTarget);
console.log(target===returnedTarget);

console.log("-------------------------------------------------");
console.log("\n");

const target2="Taha"
const returnedTarget2=Object.assign(target2) // If a primitive value is provided as the target, it will be converted to an object.
console.log(returnedTarget2);
