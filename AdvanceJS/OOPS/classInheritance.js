class Event{
    constructor(dataOfEvent){
        this.dataOfEvent = dataOfEvent;
    }
    bookEvent(){
        console.log("booked Event");
    }
}

class Movie extends Event{
    constructor(movieName, movieDate){
        super(movieDate);
        this.movieName = movieName;
    }

}

let dp = new Movie("deadpool", "2026-07-19");
console.log(dp);
dp.bookEvent();




// let m = new Movie("deedpool", "2026-07-19");
// console.log(Movie.prototype);
// console.log(Movie.prototype.__proto__);
// console.log(m.showTime());
// console.log(m.bookEvent());