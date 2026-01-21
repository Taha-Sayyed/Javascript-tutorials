//Example-1

const myNums=[1,2,3,4,5,6,7,8,9,10];
const arr=[]
const filteredNums=myNums.filter((num)=>{
    if(num>5){
        arr.push(num)
        return true;
    }
    return false;
});
//console.log(arr);

console.log(filteredNums);



//Example-2

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let historyBook=books.filter((book)=>{
    return book.genre==="History"
});
console.log(historyBook);

// Example-3 to illustrate that filter() method of Array instance creates a shallow copy of portion of a given array

const objArr=[
    {x:1},
    {x:2},
    {x:3}
]

const filteredArr=objArr.filter((obj)=>{
    if(obj.x>1){
        return true;
    }
    return false;
})


console.log(filteredArr);
filteredArr[0].x="Taha"//changed the original array ie objArr
console.log(filteredArr);
console.log(objArr);








