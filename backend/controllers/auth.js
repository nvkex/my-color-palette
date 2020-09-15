const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.signupController = async (req, res) => {

    const emailExists = await User.findOne({email:req.body.email});

    if(emailExists){
        return res.status(400).json({error: 'Email already exists'})
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try{
        const saveUser = await newUser.save();
        res.send({name:saveUser.name});
    }
    catch(err){
        res.status(400).send(err);
    }
}

exports.loginController = async (req, res) => {

    const user = await User.findOne({
        email:req.body.email
    });

    if(!user){
        return res.status(400).json({error:'User doesnt exist'});
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){
        return res.status(400).send({error:'Invalid Password'});
    }

    const token = jwt.sign(
        {
            id: user._id,
            name: user.name
        },
        process.env.JWT_TOKEN
    );

    res.header('auth-token', token).send({token, user});
}

exports.verifyToken = (req, res) => {
    const token = req.header('auth-token');
    if(!token)
        return res.status(401).send({verified: false});
    
    try{
        const verified = jwt.verify(token, process.env.JWT_TOKEN);
        if(verified)
            return res.status(200).send({verified: true});
    }
    catch(err){
        res.status(400).send({verified: false});
    }
}