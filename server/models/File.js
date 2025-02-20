const { Schema, model } = require('mongoose');

const fileSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    fileId: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    }
});

const File = model('File', fileSchema);

module.exports = File;
