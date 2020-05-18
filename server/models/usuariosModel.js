const mongoose = require('mongoose');

/*const bcrypt = require('bcryptjs')
const saltRounds = 12*/
const AutoIncrement = require('mongoose-sequence')(mongoose);


const UsuariosSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
        //match: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    },
    edad: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    profesionista: {
        type: Boolean,
        required: true
    }
});


UsuariosSchema.plugin(AutoIncrement, {inc_field: 'uid'});


/*UsuariosSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()
});*/


module.exports = mongoose.model('usuarios', UsuariosSchema);