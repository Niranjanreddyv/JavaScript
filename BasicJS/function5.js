function test(){
    let x = 10;
    x += 2;
    return function(){
        let y = 10;
        console.log(x);
        return x*x;
    }
    // return x;
    // if no return function -> undefinde -> ans 
}
let ans = test();
console.log(ans)
console.log(ans()); 
