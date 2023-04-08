
// 1) User Sign Up
exports.user_auth_Sign_Up = (req, res) => {
    return res.status(200).send('Sign Up')
}

// 2) User Sign In
exports.user_auth_Sign_In = (req, res) => {
    return res.status(200).send('Sign In')
}

// 3) User Sign Out
exports.user_auth_Sign_Out = (req, res) => {
    return res.status(200).send('Sign Out')
}

// 4) User User Profile 
exports.user_auth_User_Profile = (req, res) => {
    return res.status(200).send('User Profile')
}

// 5) User Profile Update
exports.user_auth_User_Profile_Update = (req, res) => {
    return res.status(200).send('User Profile Update')
}

// 6) User Password Update
exports.user_auth_User_Password_Update = (req, res) => {
    return res.status(200).send('Password update')
}

// 7) User Password Forgot
exports.user_auth_User_Password_Forgot = (req, res) => {
    return res.status(200).send('Forgot Password')
}

// 8) User Password Reset
exports.user_auth_User_Password_Reset = (req, res) => {
    return res.status(200).send('Reset Password')
}

// 9) User Account Delete
exports.user_auth_User_Account_Delete = (req, res) => {
    return res.status(200).send('User Account Delete')
}
