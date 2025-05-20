class obj{
    #x;
    #y;
    constructor(a,b){
        this.#x = a;
        this.#y = b;
    }
    fun(){

        console.log(this.#x,this.#y);
        this.#x = 100;
        console.log(this.#x,this.#y);
    }
}
const i = new obj(10,20);
console.log(i);
console.log(i.fun());
console.log(i);
