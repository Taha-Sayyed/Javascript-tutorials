//Example-1
const coding=["JS","Python","Ruby"]

coding.forEach(function(item){
    console.log(item);
});

//Example-2
const lang=["Java","Python","C++"]

lang.forEach((val)=>console.log(val));

//Exampl-3: Array of Object
const myCoding=[
    {
        langname:"Java",
        filename:"test.java"
    },
    {
        langname:"Python",
        filename:"test.py"
    }
]

myCoding.forEach((item)=>{console.log(`Language name: ${item.langname} and Filename:${item.filename}`)});