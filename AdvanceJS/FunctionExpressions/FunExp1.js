const arr = [1,2,3,4,5];
console.log("start");
const res = arr.map(function fn(eleemnt){
    return eleemnt*2;
})

console.log(res);

// custom map

function CustomMap(arr, fn){
    const result = [];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i]));
    }
    return result;
}

const res2 = CustomMap(arr, function f(ele){
    return ele*2;
});
console.log(res2);

// recursion is main in named function expression 
console.log("Named function Recursion");
const fac1 = arr.map(function f(n){
    if(n==1) return 1;
    return n*f(n-1);
})
console.log(fac1);

// anonymous function recursion calling it not recommended 
console.log("Anonymous function recursion");
const fac2 = arr.map(function (n){
    if(n==1) return 1;
    return n*arguments.callee(n-1);
})
console.log(fac2);

// arrow  function
console.log("Arrow Function");
const arr1 = arr.map(x => x*x);
console.log(arr1);

// IIFE -> Immediately invoked function expression
console.log("IIFE");
const sq = (function square(x){
    return x*x;
})(10);
console.log("square root", sq);
