const app = require('express')();
const PORT = process.env.PORT || 3000

app.use("/", (req, res, next) => {
    req.headers["test-header"] = 1234;
    next();
},
    (req, res, next) => {
        console.log(`Request has test header: ${!!req.headers["test-header"]}`);
        next();
    }
)


app.get('/', (req, res) => {
    res.send("Root Route")
})


app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`)})