const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    des: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
    },
    complete: {
        type: Boolean,
        required: true,
        default: false,
    },
});

module.exports = Task = mongoose.model('task', TaskSchema);
