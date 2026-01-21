//Example-1

const arr1=[1,2,3,4,5]
const addNum=arr1.map((num)=>{
    return num+10;
});//Creates a new array populated with result of calling a provided function on every element in the array

console.log(addNum);
addNum[0]=100
console.log(addNum);
console.log(arr1);//[ 1, 2, 3, 4, 5 ]   No change

/*
    1) If the elements of the array are non primitive then reference are shared
    2) IF the element of the array are primitive then value are copied
*/

//Example-2

const arr4=[{x:1},{x:2},{x:3}]
const newArr4=arr4.filter((num)=>{
    return num;
});
newArr4[0].x=100
console.log(newArr4);
console.log(arr4);


//Example-3: Illustration of Chaining

const arr2=[1,2,3,4,5,6,7,8,9,10]

const newArr2=arr2
                .map((num)=>num*10)
                .map((num)=>num+1)
console.log(newArr2);

//Example-3

const arr3=[1,2,3,4,5,6,7,8,9,10]

const newArr3=arr3
                .filter((num)=>num>5)
                .map((num)=>num*10)
                .map((num)=>num+1)

console.log(newArr3);//[ 61, 71, 81, 91, 101 ]
console.log(arr3);

