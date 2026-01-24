//Inheritance with older syntax
//Example-1
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__: TeachingSupport,
    isTASupportAvailable:()=>{
        console.log(TeachingSupport.isAvailable);
    }
}

console.log(TASupport);
TASupport.isTASupportAvailable();

//Example-2

const Student1={
    studentName:"Taha",
    age:18
}

const Teacher1={
    teacherName:"Sayyed",
    Branch:"Computer Science"
}

Teacher1.__proto__=Student1

console.log(`Name of Student is ${Teacher1.studentName}`);


// Inheritance using Modern syntax

//Example-1

const Student2={
    studentName:"Taha",
    age:18
}

const Teacher2={
    teacherName:"Sayyed",
    Branch:"Computer Science"
}

Object.setPrototypeOf(Teacher2,Student2)

console.log(Teacher2.studentName);

