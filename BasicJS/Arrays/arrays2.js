let arr = [1,2,3,4,5];

console.log(arr.length); // length is not function it is property/key

arr.push(10); // add element at end
console.log(arr);

arr.pop(); // remove element at end
console.log(arr);

arr.shift(); // remove element at start
console.log(arr);

arr.unshift(1); // add element at the start
console.log(arr)

arr.reverse();
console.log(arr);

console.log(arr.indexOf(1)); // return the index of elemnt else not present then -1
