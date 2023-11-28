// Movies Business Logic
function Movies() {
    this.tickets = {};
    this.currentId = 0;
}

Movies.prototype.addTicket = function(ticket) {
    ticket.id = this.assignId();
    this.tickets[ticket.id] = ticket;
};  

Movies.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

// Ticket Business Logic
function Ticket(movie, basePrice){
  this.movie = movie;
  this.basePrice = basePrice;
}

Ticket.prototype.agePriceAdjustment = function() {
    if(userAge >= 65 || userAge <= 12){
      this.basePrice = this.basePrice * .85;
    }
    return this.basePrice.toFixed(2);
}

Ticket.prototype.timePriceAdjustment = function() {
    if(matinee === true){
      this.basePrice = this.basePrice * .85;
    }
    return this.basePrice.toFixed(2);
}

// UI logic
let moviesList = new Movies(); // faux database
let movie1 = new Ticket("Love Actually", 35); // faux entry
let movie2 = new Ticket("Home Alone", 20); // faux entry
moviesList.addTicket(movie1); // inputting faux entry into faux database
moviesList.addTicket(movie2); // inputting faux entry into faux database

function movieFormHandler(event) {
    event.preventDefault();
    const movieName = document.getElementById("movieName").value;
    const timeOfDay = document.getElementById("timeOfDay").value;
    const age = parseInt(document.getElementById("age").value);
    let newMovie = new Ticket(movieName, timeOfDay, age);
    moviesList.addTicket(newMovie);
    console.log(moviesList)
}

window.addEventListener("load", function() {
    document.querySelector("#form").addEventListener("submit", movieFormHandler);
}); 