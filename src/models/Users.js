const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valide');
            }
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        lowercase: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Pass word can not contain "password"');
            }
        },
    },
    age: {
        type: Number,
        required: true,
        default: 0,
    },
});

UserSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Unable to login');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
        throw new Error('Unable to login');
    }
    // const isMatch = await bcrypt.compare('billal223344','$2a$08$pefbczyvp/mx5sk9azc0fe2ljjwxngxqseryqlzdyjpt.vq.so5pm');
    console.log(isMatch);
    return user;
};

UserSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    console.log(`just before saving`);
    next();
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
