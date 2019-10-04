const mongoose = require('mongoose');
// const User = require('../model/Users');
// const Task = require('../models/Task');
const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api';

const connectDB = async () => {
    try {
        mongoose.connect(connectionURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;

// const you = new User({
//     name: 'Shamim',
//     email: 'abulhossain@gmail.com',
// });

// you.save()
//     .then(() => {
//         console.log(you);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// const tasks = new Task({
//     des: 'this is trial description',
//     password: 'Abul12345566',
//     complete: true,
// });

// tasks
//     .save()
//     .then(() => {
//         console.log(tasks);
//     })
//     .catch(err => {
//         console.error(err);
//     });
