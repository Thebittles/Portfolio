const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
// Base

//Bring in our data - How we bring it out object? - Destructure
const { characters } = require('./fakeData')
//console.log(characters)

// Use our public folder
app.use(express.static('public'))
// Set view engine
app.set("view engine", "ejs")

// With more than one / in route
app.use('/character', express.static(__dirname + '/public'))



// Routes
app.get('/', (req, res) => {
    // modify when building req.query to send data
    // will use this to build our form
    res.render("home", {data: characters})
})

// Display all characters
app.get('/characters', (req, res) => {
    res.render("characters", {data: characters})
})

// Display a character 
app.get('/character/:id', (req, res) => {
    // Could say req.params.id - again destructure
    const { id } = req.params
    //console.log(characters[id])
    res.render("character", { data: characters[id]})
})


// Display a character using req.query through form
app.get("/id", (req, res) => {
    const { id } = req.query
    res.render("character", {data: characters[id]})
})


// Listener
app.listen(PORT, () => {console.log(`App listening on port: ${PORT}`)})
