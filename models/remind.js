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
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    categoryid: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true

    }
});

const Remind = mongoose.model('Remind', remindSchema);

module.exports = Remind;