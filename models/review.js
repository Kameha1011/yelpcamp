const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
 
const reviewSchema = new Schema ({
    body: String,
    rating: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    campground: {
        type: Schema.Types.ObjectId,
        ref: 'Campgrounds'
    },
});
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;