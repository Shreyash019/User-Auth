const UserModel = require('../model/userModel');
const ErrorHandler = require('../utils/errorHandler');
const CatchAsync = require('../middleware/catchAsync');
const authToken = require('../utils/authToken');
const crypto = require('crypto');

// 1) User Sign Up
exports.user_auth_Sign_Up = CatchAsync(async (req, res) => {
    const {name, email, password} = req.body;
    console.log(req.body)
    if(!name || !email || !password){
        return res.send('Please enter details.')
    }
    
    const userExist = await UserModel.findOne({email})
    if(userExist){
        return res.send('User already exist.');
    }

    const user = await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    return res.status(200).json({
        success: true,
        message: 'User registed.',
        user,
    })
})

// 2) User Sign In
exports.user_auth_Sign_In = CatchAsync(async (req, res, next) => {
    const {email, password} = req.body;
    console.log(req.body)
    let userCheck;
    // Checking if email and password
    if(!email || !password){
        return next(new ErrorHandler(`Please enter email and password`, 400))
    }

    // Checking if user exist
    userCheck  = await UserModel.findOne({email}).select("+password");
    console.log(userCheck.email)

    if(!userCheck || !await userCheck.correctPassword(password, userCheck.password)){
        return next(new ErrorHandler('Invalid email and password', 401))
    }
    authToken.sendToken(userCheck, 200, res)
})

// 3) User Sign Out
exports.user_auth_Sign_Out = CatchAsync(async(req, res) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })
    res.status(200).json({
        success: true,
        message: 'Logged Out.'
    })
})

// 4) User User Profile 
exports.user_auth_User_Profile = CatchAsync(async(req, res) => {
    const user = await UserModel.findById(req.user.id)
    return res.status(200).json({
        success: true,
        user
    })
})

// 5) User Profile Update
exports.user_auth_User_Profile_Update = CatchAsync(async(req, res, next)=>{

    const user = await UserModel.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        runValidators: true,
        userFindAndModify: true
    });
    res.status(200).json({
        sucess: true,
        user,
    })
})

// 6) User Password Update
exports.user_auth_User_Password_Update = CatchAsync(async(req, res, next) => {
    const user = await UserModel.findById(req.user.id).select('+password');

    const passwordMatch = await user.correctPassword(req.body.oldPassword, user.password);

    if(!passwordMatch){
        return next(new ErrorHandler('Old password is incorrect', 400))
    }

    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler('Password not matched.', 400))
    }

    user.password = req.body.newPassword;
    await user.save();

    authToken.sendToken(user, 200, res)
})

// 7) User Password Forgot
exports.user_auth_User_Password_Forgot = (req, res) => {
    return res.status(200).send('Forgot Password')
}

// 8) User Password Reset
exports.user_auth_User_Password_Reset = (req, res) => {
    return res.status(200).send('Reset Password')
}

// 9) User Account Delete
exports.user_auth_User_Account_Delete = CatchAsync(async(req, res, next)=>{
    const user = await UserModel.findById(req.user.id);
    if(!user){
        return next(new ErrorHandler(`User does not exist with ID: ${req.params.id}`))
    }

    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    const deletedUser = await user.remove()
    res.status(200).json({
        suncess: true,
        message: 'User Deleted',
        deletedUser
    })
})
