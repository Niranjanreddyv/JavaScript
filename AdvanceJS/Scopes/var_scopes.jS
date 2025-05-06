// var teacher = "Sanket Singh"; // global

// function fun(){ // global
//     var teacher = "Ram"; // fun 
//     console.log(teacher); 
// }

// function gun(){ // global
//     var student = "Niranjan"; // gun 
//     console.log(student, teacher); // it goes back to one one scoe back uto global scope
// }

// fun();
// gun();
// console.log(teacher);


// 2

// var teacher = "Sanket Singh"; // global

// function fun(){ // global
//     var teacher = "Ram"; // fun
//     console.log("hello", teacher);

//     function gun(){ // fun 
//         var student = "Niranjan"; // gun 
//         console.log(student, teacher);
//     }

//     gun();
// }

// fun();


// 3


// var teacher = "Sanket Singh"; // global
// function fun (){ // gobal
//     teacher = "Ram"; // no formal declaration here so it goes to scopes back up to find varable else make a gobal variable in phase 2 execution 
//     content = "JS"; // auto global
//     console.log("Wow" , content, teacher);
// }
// fun();
// console.log(teacher);
// console.log(content);


// 4 

// var teacher = "Sanket Singh"; // global
// function fun (){ // gobal
//     teacher = "Ram"; // no formal declaration here so it goes to scopes back up to find varable else make a gobal variable in phase 2 execution 
//     content = "JS"; // auto global
//     console.log("Wow" , content, teacher);
// }
// console.log(teacher);
// console.log(content); // referance Error
// fun();


// 5

// var x = 10; // global
// if(true){
//     var x = 20; // global
//     var y = 30; // global
//     console.log(x,y);
// }

// console.log(x,y);


// 6

// var x = 10; // global
// console.log(x,y);
// if(true){
//     var x = 20; // global
//     var y = 30; // global
//     console.log(x,y);
// }

// console.log(x,y);

// 7 

// var teacher = "Sankat"; // global
// console.log("Start");
// console.log(student);
// function fun(){ // global
//     var student1 = "Ram"; fun
//     student = "Naveen"; // gobal when it call fun then 
//     console.log(student1);
// }
// fun();

// 8

var x = 10; // global
console.log(x);
function fun(){ // global
    var x = 20; // fun
    console.log(x);
}
console.log(x);
var x = 30; // same sa above x in global
fun();
console.log(x);

var y = 30;
console.log(y);
for(var y = 1; y<3; y++) console.log(y);
console.log(" y after loop" , y);

