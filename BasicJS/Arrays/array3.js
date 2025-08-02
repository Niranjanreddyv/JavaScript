let arr =[
    {name:"nir", age : 22},
    {name:"ram", age : 23},
    {name:"raju", age : 24},
    {name:"priya", age : 22},
    {name:"sai", age : 20},
    {name:"siva", age : 23},
    {name:"gani", age : 12},
    {name:"sonu", age : 22}
]

arr.map((details) => {
    // if(details.age <= 20){
    //     details.age = 10;
    // }
    console.log("I am ",details.name, " My age is ", details.age);

})
// console.log(arr);
