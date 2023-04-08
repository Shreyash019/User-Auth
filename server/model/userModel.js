const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter your name."],
    },
    email: {
        type: String,
        require: [true, "Please enter email address."],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Please enter password."],
        select: false,
    },
    address: {
        type: String,
    },
    contact: {
        type: Number,
    },
    joined_At: {
        type: Date,
    },
    date_of_birth: {
        type: Date,
    },
    profileImage: {
        public_id: {
          type: String,
        },
        url: {
            type: String,
            default: "https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?pid=ImgDet&rs=1",
        }
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword)
}

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;