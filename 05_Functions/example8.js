function func1(){
    //name="Taha";// IF I don't use let,const, var here then this line does not create a local variable
    //Here "this" refers to global object
    console.log(this.name);
    
}

func1()

console.log("------------------------------------------------------------------------");

(function func2(){
    let name="Taha";
    console.log(this.name);
})();

console.log("------------------------------------------------------------------------");

(()=>{
    let name="Sayyed"
    console.log(this.name);
    console.log(name);
})();


