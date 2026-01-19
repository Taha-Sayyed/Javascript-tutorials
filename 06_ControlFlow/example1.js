//Example-1: Inside a If block, there is a separate scope and its variable is only accessible inside its own scope 
const score=200

if(score>100){
    const power="fly"
    console.log(`${power}`);
}
//console.log(power);// Throw this error: power is not defined

console.log("---------------------------------------------------------------------------------------");

//Example-2: Implcit scope
const balance=1000
if(balance>500)console.log("Balance more then 500");
