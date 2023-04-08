const express = require('express');
const router = express.Router();
const user_auth = require('../controller/userController');

// User Authentication Routes
router.route('/signup').post(user_auth.user_auth_Sign_Up)
router.route('/signin').post(user_auth.user_auth_Sign_In)
router.route('/logout').get(user_auth.user_auth_Sign_Out)

// User Profile Routes
router.route('/profile').get(user_auth.user_auth_User_Profile)
router.route('/profile/update').put(user_auth.user_auth_User_Profile_Update)
router.route('/account/delete').delete(user_auth.user_auth_User_Profile_Update)

// User Password Routes
router.route('/password/update').put(user_auth.user_auth_User_Password_Update)
router.route('/password/forgot').post(user_auth.user_auth_User_Password_Forgot)
router.route('/password/reset/:token').put(user_auth.user_auth_User_Password_Reset)

module.exports = router