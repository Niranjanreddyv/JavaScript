class Event{
    bookEvent(){
        console.log("your booked");
    }
}

class Movie extends Event{
    showTime(){
        console.log("show time");
    }
}
m = new Movie();
console.log(Movie.prototype);
console.log(Movie.prototype.__proto__);
console.log(m.showTime());
console.log(m.bookEvent());