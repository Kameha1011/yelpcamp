const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthorized, validateCampground } = require('../middleware');
const campgrounds = require('../controllers/campgrounds');
const Campground = require('../models/campground');

router.route('/')
.get( catchAsync(campgrounds.index))
.post( isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground));


router.get('/new', isLoggedIn, campgrounds.renderNewForm);


router.route('/:id')
.get(catchAsync(campgrounds.showCampground))
.put(isLoggedIn, isAuthorized, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground))
.delete(isAuthorized, catchAsync(campgrounds.deleteCampground));


router.get('/:id/edit', isLoggedIn, isAuthorized, catchAsync(campgrounds.renderEditForm))




module.exports = router;