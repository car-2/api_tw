const mongoose = require('mongoose');

const TypeProjectSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    dateCreate: {
        type: Date,
        default: Date.now
    },
    dateUpdate: {   
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('TypeProject', TypeProjectSchema);