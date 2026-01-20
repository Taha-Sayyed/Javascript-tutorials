//"for...in" loop on Object
const myobj1={
    js:"JavaScript",
    cpp:"C++",
    java:"Java"
};

for(const key in myobj1){
    console.log(`Key:${key} and Value:${myobj1[key]}`);
    
}


//"for...in" loop on Array
const lang=["JS","Java","Python"]
for(const key in lang){
    console.log(`Index:${key} and Value:${lang[key]}`);
}