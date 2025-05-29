function Event(dateOfEvent){
    this.dateOfEvent = dateOfEvent;

}

Event.prototype.bookEvent = function(){
    console.log("booking Event");
}

// console.log(Event.prototype);

function Movie(movieName, movieDate){
    Event.call(this, movieDate); // imp
    this.movieName = movieName;
    
}
// good practices
Movie.prototype = Object.create(Event.prototype); // imp
c = new Movie("deedpool", "2028-09-9");
c.bookEvent();
console.log(c);



// old implementation 
// console.log(Movie.prototype.__proto__);
// Movie.prototype.__proto__ = Event.prototype;
// console.log(Movie.prototype.__proto__);
// c = new Movie("deadpool");
// c.bookEvent();

