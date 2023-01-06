const mongoose = require('mongoose');


let bucketListSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "Must have a description"],
        maxLength: 30
    },
    isComplete: {
        type: Boolean,
        default: false
    }
});

exports.BucketModel = new mongoose.model("bucketItems", bucketListSchema);