const express = require('express')
const app = express()
const port = 3000

/* I'm not familier with json files, didn't had the time to access the json file via functions.
implementing getMovies(), getTheaters(), buyTicket(), isValidTicket() should be straigh forward search by strings.
should have written in the json file each complex with its theaters, and the orderd tickets' IDs.
*/


//API1
app.get('/movie', (req, res) => {
    let movie = req.query.movie;
    let date = req.query.date;
    let theaters = getTheaters(movie, date);
    res.send(theaters);
});

function getTheaters(movie, date){
//TODO
}


//API2
app.get('/cinema', (req, res) => {
    let complex = req.query.movie;
    let date = req.query.date;
    let movies = getMovies(complex, date);
    res.send(movies);
});

function getMovies(complex, date){
//TODO
}

//API3
app.post('/ticket', (req, res) => {
    let movie = req.query.movie;
    let date = req.query.date;
    let theater = req.query.theater;
    buyTicket(movie, date, theater);
    res.send("bought new ticket: " + ticketID);
});

function buyTicket(movie, date, theater){
//TODO
}

//API4
app.get('/ticket', (req, res) => {
    let ticketID = req.query.ticketID;

    res.send(theaters);
});

function isValidTicket(ticketID){
//TODO
}



app.listen(port, () => {
  console.log(`Cinema app listening on port ${port}`);
});


