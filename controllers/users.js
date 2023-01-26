const User = require('../models/user');
const Campground = require('../models/campground');
const Review = require('../models/review');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res) => {
    try{
    const {email, username, password} = req.body;
    const user = new User({email, username});
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, err => {
        if(err){
            return next(err)
        }
        req.flash('success', 'Welcome to Yelp Camp');
        res.redirect('/campgrounds');
    })
    
    } catch(e){
        req.flash('error', e.message);
        res.redirect('register');
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

module.exports.login = async (req, res) => {
    req.flash('success', 'Welcome Back!');
    const redirectUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = async (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
}

//renders user profile page
// quiero consultar los campamentos que matcheen la id del usuario y la id de las reviews del usuario
module.exports.renderProfile = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    const reviews = await Review.find( { author: { $eq: `${id}` } } );
    let rev = reviews.map(r => r._id);
    const campgrounds = await Campground.find( { $or: [
        {reviews: { $in: [...rev] } }, 
        { author: { $eq: `${id}` } } 
    ]});
    console.log(campgrounds)
    res.render('users/profile', {user, campgrounds, reviews});
}