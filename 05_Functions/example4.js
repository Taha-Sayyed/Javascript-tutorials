//Example-1 [Reference is passed "by value" not the object]

function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"
console.log(myCar.make); // "Toyota"

//Example-2 [Reference is passed "by value" not the array object]

function myFunc1(theArr){
    theArr[0]=30;
}

const arr=[45]
console.log(arr[0]);//45
myFunc1(arr);
console.log(arr[0]);//30

//Example-3 [Primitve data type is passed "by value"]

function myFunc2(num1){
    return num1+2;
}

const num=10;
console.log(myFunc2(num));

console.log(num);
