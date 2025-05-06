// In javaScript Function are first Class citizens
// in javascript functions can be returned from a functions and function can be passed as an argument to another function
function someFunction(){
    // compution
    return function x(){
        return 10;
    }
}

function anotherFunction(f1){
    f1();
    console.log("called f1");
}

function hello(){
    console.log("hello");
}

anotherFunction(hello);