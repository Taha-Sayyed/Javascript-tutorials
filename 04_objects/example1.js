const jsuser1={
    name:"Taha",
    age:22,
    location:"Mumbai",
    "Qualification in":"Bachelor in Engineering"
}

console.log(jsuser1.age);
console.log(jsuser1["age"]);
//console.log(jsuser."Qualification in"); Wrong syntax
console.log(jsuser1["Qualification in"]);



console.log("---------------------------------------------------");
console.log("\n");

//Question: pass Symbol in the Object as key

const mySymbol=Symbol("key1")

const jsuser2={
    name:"Sayyed",
    age:18,
    [mySymbol]:"mykey1",
    location:"Mumbai",
    "Qualification in":"Bachelor in Commerce"
}

console.log(typeof jsuser2.age);//number
console.log(typeof jsuser2.location);//string
console.log(typeof jsuser2[mySymbol]);//doubt hai yaha pe? Not giving me 'Symbol'
console.log(jsuser2[mySymbol]);
console.log(jsuser2);

console.log("-----------------------------------");
console.log("\n");


const jsuser3={
    name:"Ashraf",
    age:45,
    location:"Mumbai",
    "Qualification in":"MBA"
}

//adding a method to the object using the jsuser3 reference.
jsuser3.greeting=function(){
    console.log("Hello JS user");
}
//adding a method to the object using the jsuser3 reference.
jsuser3.greetingTwo=function(){
    console.log(`Hello ${jsuser3.name}`);
    
}

console.log(jsuser3.greeting());
console.log(jsuser3.greetingTwo());

console.log(jsuser3);

