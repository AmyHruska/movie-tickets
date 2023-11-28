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

Ticket.prototype.agePriceAdjustment = function(userAge) {
    if(userAge >= 65 || userAge <= 12){
      this.basePrice = this.basePrice * .85;
    }
    return this.basePrice.toFixed(2);
}

Ticket.prototype.timePriceAdjustment = function(matinee) {
    if(matinee === "0"){
      this.basePrice = this.basePrice * .85;
    }
    return this.basePrice;
}

// UI logic
let moviesList = new Movies(); // faux database
let movie1 = new Ticket("Love Actually", 35); // faux entry
let movie2 = new Ticket("Home Alone", 20); // faux entry
moviesList.addTicket(movie1); // inputting faux entry into faux database
moviesList.addTicket(movie2); // inputting faux entry into faux database

function movieFormHandler(event) {
    event.preventDefault();
    const movieId = document.getElementById("movieName").value;
    const matinee = document.getElementById("timeOfDay").value;
    const userAge = parseInt(document.getElementById("age").value);
    moviesList.tickets[movieId].timePriceAdjustment(matinee);
    moviesList.tickets[movieId].agePriceAdjustment(userAge);
    moviesList.tickets[movieId].basePrice.toFixed(2);
    console.log(moviesList.tickets[movieId].basePrice);
}

window.addEventListener("load", function() {
    document.querySelector("#form").addEventListener("submit", movieFormHandler);
}); 