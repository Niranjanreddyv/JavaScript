const obj = {
  firstName:"Niranjan",
    greet: function(welcomeMessage, prompt){
        console.log("Hello, my name is ", this.firstName, welcomeMessage, prompt);
    }
}

// arrow function not working 
// const obj = {
//   firstName:"Niranjan",
//     great: () => {
//         console.log("Hello, my names is ", this.firstName);
//   }
// }

console.log(obj.greet());

const NewObj = {firstName:"Siva"};

console.log(obj.greet.call(NewObj)); // now call site is pointing to the NewObject

// arguments passing
console.log(obj.greet("How are yoy ?"));
console.log(obj.greet.call(NewObj, "How are you ?"));
// more than 1 parameters
console.log(obj.greet("How are yoy ?", "How can i help you?"));
console.log(obj.greet.call(NewObj, "How are you ?", "How can i help you?"));
console.log(obj.greet.call()); // it point to global object that is window

// apply
console.log(obj.greet.apply(NewObj, ["How are you ?", "How can i help you?"]));

// bind
f = obj.greet.bind(NewObj);
console.log(f("Hello", "Hii"));




// intesting case 

// node is working different here bi=ut in window it pointing global scope
let name = "Niranjan";
let obj1 = {
	name:"Siva",
	greet: function(){
		console.log("hello", this.name);
	}
}
console.log(obj1.greet.call());