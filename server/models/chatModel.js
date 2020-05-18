const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    id: {
        type: Number, 
        unique: true,
        required: true
    },
    uidUsuario: {
        type: String,
        required: true
    },
    uidProfesionista: {
        type: String,
        required: true
    },
    mensaje: {
        type: {senderId: String, message: String},
        required: false
    }
});

module.exports = mongoose.model('chat', ChatSchema);