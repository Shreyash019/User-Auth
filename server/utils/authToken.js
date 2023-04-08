const jwt = require('jsonwebtoken');
const UserModel = require('../model/userModel');

// JWT Token creation
exports.signToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.sendToken = (user, statusCode, res) => {
    // 1) Token Generation
    const token = this.signToken(user._id);
     
    // 2) Options for cookie
    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }
    
    // 3) Cookie seting in response
    res.cookie('token', token, options);

    // 4) Sending response
    res.status(statusCode).json({
        success: true,
        user,
        token
    }) 
}

exports.isUserAuthenticated = async(req, res, next)=>{
    const {token} = req.cookies;

    // 1) Checking if cookie
    if(!token){
        return res.status(401).send(`Please login again.`)
    }

    // 2) Decoding user
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3) Setting User
    req.user = await UserModel.findById(decoded.id);

    // 5) Calling next
    next();
}
