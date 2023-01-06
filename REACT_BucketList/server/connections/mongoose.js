require('dotenv').config()
const mongoose = require("mongoose");


const {DB, URI, DB_PASS, DB_USER} = process.env

let url = `${URI}/${DB}`

let connectionObj = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
    user: DB_USER,
    pass: DB_PASS
}

mongoose.set('strictQuery', false);


mongoose
  .connect(url, connectionObj)
  .then(() => console.log(`Connected to ${DB} database`))
  .catch((err) => console.log(`Error connecting to ${DB} database: `,  err));