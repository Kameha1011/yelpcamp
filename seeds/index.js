const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');

//mongoose connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/yelp-camp');
};

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 150; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '6383bbeb80876d9942f154aa',
            location: `${cities[random1000].city}. ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem earum odit facere eveniet natus ut corrupti nam, animi tenetur rerum eligendi? Quibusdam veritatis molestias saepe. Tempora harum quia inventore quidem',
            price,
            geometry: {
              type: 'Point',
              coordinates: [
                cities[random1000].longitude,
                cities[random1000].latitude
              ]
            },
            images:  [
                {
                  url: 'https://res.cloudinary.com/dfak1gwqu/image/upload/v1669833811/YelpCamp/vspmdojz9nyscajekapd.jpg',
                  filename: 'YelpCamp/vspmdojz9nyscajekapd',
                },
                {
                  url: 'https://res.cloudinary.com/dfak1gwqu/image/upload/v1669833811/YelpCamp/ipozwafr96ogt1pfuh3p.jpg',
                  filename: 'YelpCamp/ipozwafr96ogt1pfuh3p',
                }
            ]  
        });
        await camp.save();
    }
};
seedDB().then(() => {
    mongoose.connection.close();
});