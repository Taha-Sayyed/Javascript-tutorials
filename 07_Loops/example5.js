//Example-1

const arr1=[1,2,3,4,5]
const addNum=arr1.map((num)=>{
    return num+10;
});//Creates a new array populated with result of calling a provided function on every element in the array

console.log(addNum);
addNum[0]=100
console.log(addNum);
console.log(arr1);


//Example-2: Illustration of Chaining

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
