const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;

require('./connections/mongoose');
const { BucketModel } = require('./models/BucketModel')

app.use(express.static('../client'));
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded( { extended: false } ));
app.use(cors());



app.get('/', (req, res) => {
    res.redirect('/bucket');
})

//Read
app.get('/bucket', (req, res) => {
    BucketModel.find({}, (error, result) => {
        if(error) {
            res.status(404).send({ message: "Error: Something went wrong getting the Bucket List Please try again."});
            console.log("Error: ", error);
        } else {
            res.json(result)
        }
    })
})

//Create
app.post('/bucket', (req, res) => {
    BucketModel.create( { description: req.body.description} , (error, result) => {
        if(error) {
            res.status(404).send({ message: "Error: Unable to add Bucket List Item, Please try again."})
            console.log("Error: ", error);
        } else {
            res.json(result)
        }
    })
})

// Update
app.put('/bucket/:id', (req, res) => {
    const id = req.params.id
    BucketModel.findById({ _id: id}, (error, result ) => {
        if(error){
            res.status(404).send({ message: "Error retrieving document through update" });
        } else {
            result.isComplete = !result.isComplete

            result.save((error, updatedResult) => {
                if (error) {
                    res.status(404).send({ message: "Error saving while updating. Please update again"})
                } else {
                    res.json(updatedResult)
                }
            })
        }
    })
})


//Delete
app.delete('/bucket/:id', (req, res) => {
    const id = req.params.id
    BucketModel.findByIdAndDelete({ _id: id}, (error, result) => {
        if(error){
            res.status(404).send({ message: "Error Delete BucketList Item."})
        } else {
            res.json(result)
        }
    })
})




app.listen(PORT, () => { console.log(`App listening on port: ${PORT}`)})



