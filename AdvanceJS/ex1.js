// let x = 10;

// function fun(){
//     console.log(x);
// }

// function gun(){
//     for(let i = 0; i < x ; i++){} 
// }

// fun();
// gun();

// console.log(x);





function fun(){
    let x = 10;
    console.log(x);
}

function gun(){
    for(let i = 0; i < x ; i++){}  // x is not visiable here
}

fun();
gun();

console.log(x); // x is not visiable here

// ReferenceError: x is not defined