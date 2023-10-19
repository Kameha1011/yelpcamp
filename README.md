# Yelpcamp

**Yelpcamp** is a comprehensive web application developed as part of the Full Stack Web Developer course by [Colt Steele](https://www.coltsteele.com/). I followed his tutorials and added some additional features to create a platform for exploring campgrounds, reading reviews, and checking availability. This project was built using Node.js (Express.js), MongoDB, Mongoose, EJS, and Bootstrap.

## Prerequisites

Before you get started with this app, ensure you have the following prerequisites:

- Node.js and NPM: Make sure you have the latest LTS versions installed.
- MongoDB: Follow the installation instructions [here](https://www.mongodb.com/docs/manual/installation/) or consider using MongoDB Atlas.
- Accounts on [Cloudinary](https://cloudinary.com/) and [Mapbox](https://www.mapbox.com/) for storing API keys and secrets. You'll need these for your .env file.

## Installation

If you've successfully set up MongoDB or are using MongoDB Atlas:

1. Clone the project repository by running the following command: `git clone https://github.com/Kameha1011/yelpcamp`.
2. Navigate to the project directory: `cd yelpcamp/`.
3. Install the required dependencies by running: `npm install`.
4. Ensure you have your `.env` file ready following the `.env.example`.
5. Finally, start the development server by running: `node app.js`.
6. Once the server is running, open your web browser and visit [localhost:3000](http://localhost:3000/) to explore the app.

Congratulations! You now have the app up and running on your local machine, and you're ready to make any customizations you desire.

## Project Structure

- **cloudinary**: Contains the Cloudinary configuration file.
- **controllers**: Includes files responsible for handling incoming requests and returning responses to the client, organized by the model name.
- **models**: Contains files defining the structure of the database collections.
- **public**: Houses the following folders:
  - **images**: Stores static images.
  - **js**: Contains JavaScript files used in the frontend.
  - **stylesheets**: Holds CSS files.
- **routes**: Defines routes and specifies the methods and middlewares used for those routes.
- **seeds**: Contains seed configurations and the `index.js` file for seeding the database.
- **uploads**: This is where uploads from Cloudinary are stored.
- **utils**: Contains function declarations used throughout the app.
- **views**: Contains EJS templates.
- **app.js**: The main file that initializes the app and includes additional configurations.
- **middleware.js**: Houses declarations of all middlewares.
- **schemas.js**: Contains Joi schemas.

## Main Features

- Sign Up and Sign In:
![Sign In](https://lh3.googleusercontent.com/pw/ADCreHcUUz8F_eputSAlpIs6HlZYLZkM-T8X2vOx_f02YRJUCJAsMIRMQgkbaYAPMNaj4SCOp6idtz_F68nJwtleiZGf8q7qt9q-3ko9SFplVji5RDFs7zg_9WIXEkyaNzSMAnltX6mpQ6iXV4XWo1ZvSYLV=w1420-h741-s-no?authuser=0)
![Sign Up](https://lh3.googleusercontent.com/pw/ADCreHcmskdEbJaVE1KAdtKk-sIoxLSWiUl2aNTBWh9B5iMwW2tgJNgmewfd-bKEP-Sen1-QnJIDmWwUBaJbyuGDkXGS28RnXv7-xDCtkVC4vxev2Asa3NiB8C6r0mJHGMoWTuXJBiUWgXf6Wsc5SKNIZh9B=w1436-h746-s-no?authuser=0)

- Interactive Map Showing Campgrounds Worldwide:
![Interactive Map](https://lh3.googleusercontent.com/pw/ADCreHe-7EkumNWimiXEvIYWTfSiAKJnun3S_SG6kA5-Ro5wzv5zOp3Z6TdCvKv0Hk0Uf5uNJAQNYPkqzE7SfCvLfStc1_ahQ--nqiMh6E4RS2jDaa4bsVtWWq7uV5pS9hgP-YIqb9mLDW66MU0tJ4CIv3nL=w1419-h742-s-no?authuser=0)

- Create, Edit, or Delete Reviews:
![Reviews](https://lh3.googleusercontent.com/pw/ADCreHeLIcAbroyasIKMjAoAUpwebk9BTSFnu6p9EnfO4or4MYPsC98gHzkwvfwW51V7FGhAcWJiDGkEm18EPE6v9xJ5dv6faMC8Ie_GVoplG13FyTXsq71hQ43f26tbaECRuiFpGgsa_cRbbgRtX4N7_NID=w1424-h743-s-no?authuser=0)

- Create, Edit, or Delete Campgrounds:
![Campgrounds](https://lh3.googleusercontent.com/pw/ADCreHfJngXuFOuk9b32YOzTf31UkRLb9ngo3KrA7Fr4hhN91MgbwI0LaLzxtXWKHDa_Zd7b2DRn1azu5WQgcAZx79Uj8TCSqKm-z0AeC5c6wE_5BRXwk4OB5OTrJVTQVKzrNXCRPYvZnC8AF_hCgjj85eZD=w1438-h746-s-no?authuser=0)

Feel free to explore and customize the application to meet your needs!
