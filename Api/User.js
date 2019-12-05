const express = require('express');

const mongoose = require('mongoose');
const { User, validate } = require('../DB/User');
const route = express.Router();

route.post('/',async (req,res)=>{
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {


        if (req.body.password != req.body.confirmpassword) {
            return res.status(400).send('password do not match');
        } else {
            
            user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword
            });


        await user.save();
        res.send(user);
    }
        // user = new User({
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
        //     email: req.body.email,
        //     password: req.body.password
        // });
    }

    //     if (req.body.password != req.body.confirmpassword) {
    //         return res.status(400).send('password do not match');
    //     } else {
            
    //         user = new User({
    //             firstName: req.body.firstName,
    //             lastName: req.body.lastName,
    //             email: req.body.email,
    //             password: req.body.password,
    //             confirmpassword: req.body.confirmpassword
    //         });


    //     await user.save();
    //     res.send(user);
    // }

});


module.exports = route;
//module.exports = router;