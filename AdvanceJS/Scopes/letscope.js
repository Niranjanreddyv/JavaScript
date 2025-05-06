// var 
// function fun(){
//     console.log(x);
//     var x = 10;
//     console.log(x);
// }
// fun();

// let
// function fun(){
//     console.log(x);
//     let x = 10;
//     console.log(x);
// }
// fun();

// // const
// function fun(){
//     console.log(x);
//     const x = 10;
//     console.log(x);
// }
// fun();


// function gun(){
//     {
//         console.log(z);
//         const z; // Compilation Error -> SyntaxError: Missing initializer in const declaration
//         z = 5;
//         console.log(z);
//     }
// }
// console.log("start");
// gun();

// function gun(){
//     {
//         console.log(z); // ReferenceError: Cannot access 'z' before initialization
//         const z = 5;
//         console.log(z);
//     }
// }
// console.log("start"); // executed 
// gun();

// function gun(){
//     {
//           // Runtime Error
//         console.log(z); // TDZ - > Temporal Dead Zone -> ReferenceError: Cannot access 'z' before initialization 
//         let z; 
//         z = 5;
//         console.log(z);
//     }
// }
// console.log("start");
// gun();


//  compile time error phase1 
// let x = 10;
// console.log(x);
// let x = 20;
// console.log(x);

// 
// var x = 10; // gobal 
// console.log(x);
// let x = 20; // error
// console.log(x);

function gun(){
    let z;
    console.log(z);
}
gun()

