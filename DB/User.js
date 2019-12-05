const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({

    firstName:{
        type:String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastName:{
        type:String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250
    },
    confirmpassword: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250
    }

}));

function validateUser(user) {
    const schema = {
        firstName: Joi.string().min(5).max(50).required(),
        lastName: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        confirmpassword: Joi.string().min(5).max(255).required()
        //confirmpassword: Joi.any().valid(Joi.ref('password')).required().label(this.refs.confirmPassword.props.label)
    };
    return Joi.validate(user, schema);
}



//module.exports = User = mongoose.model('user',user);

exports.User = User;
exports.validate = validateUser;
