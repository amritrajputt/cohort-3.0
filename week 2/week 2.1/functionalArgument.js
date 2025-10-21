// functional arguments :- passing a function to another function as an argument

const sum = (a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
    return a-b;
}
const mul = (a,b)=>{
    return a*b;
}
const div = (a,b)=>{
    return a/b;
}

const doOperation = (a,b,op) =>{
    return op(a,b)
}

const ans =  doOperation(1,2,sub) // here we are passing sub as an argument to doOperation dunction and here sub is also a function
console.log(ans);
