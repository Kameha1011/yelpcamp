const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({  
        url: String,
        filename: String
});

ImagesSchema.virtual('thumbnail').get(function() {
   return this.url.replace('/upload', '/upload/c_scale,h_400,w_400')
});

const opts = { toJSON: { virtuals: true } };

const CampgroundSchema = new Schema({
    title: {
        type: String
    },
    images: [ImagesSchema],
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates:{
            type: [Number],
            required: true
        }
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, opts);
CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return "<strong>"+"<a href='/campgrounds/"+this._id+"'>"+this.title+"</a>"+"</strong>"
            +"<p>"+this.description.substring(0,20)+"...</p>"
})
CampgroundSchema.post('findOneAndDelete', async function (doc) {
    if(doc){
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

const Campground = mongoose.model('Campground', CampgroundSchema);
module.exports = Campground;