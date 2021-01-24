// required modeules
const mongoose = require('mongoose');

// define Docuemnt Schema of my note model
const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
} );

// export the NoteSchema for usage
module.exports = mongoose.model('Note', NoteSchema);