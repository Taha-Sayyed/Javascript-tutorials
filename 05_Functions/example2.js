const user={
    username:"Taha",
    age:18,
    location:"Mumbai"
}

function handleObj(anyObj){
    return `Username is ${anyObj.username} and location is ${anyObj.location}`
}

console.log(handleObj(user));
