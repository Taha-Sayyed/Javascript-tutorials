//"for...of" loop on Array

const arr=[1,2,3,4,5]
for(const item of arr){
    console.log(item);
    
}

//"for...of" loop on Strings
const greeting="Taha";
for(const item of greeting){
    console.log(item);
    
}

//"for...of" loop on Map
const map=new Map([
    ["a",1],
    ["b",2],
])

console.log(map);
for(const key of map){
    console.log(key);
}
for(const [key] of map){
    console.log(key);
}
for(const [key,value] of map){
    console.log(`Key:${key} and Value:${value}`);
}
