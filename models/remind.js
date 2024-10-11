const mongoose = require('mongoose');

const remindSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Shopping List', 'House Chores', 'Fitness Tracker', 'Things to not Forget', 'Movies to watch'],
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
});

const Remind = mongoose.model('Remind', remindSchema);

module.exports = Remind;