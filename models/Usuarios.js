import {Schema, model} from "mongoose";
import bcrypt from 'bcrypt';

const UsuariosSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    token: String,
    expira: Date
});

//? Método para hashear los password
UsuariosSchema.pre('save', async function (next) {
    //* Si el password esta hasheado
    if(!this.isModified('password')) {
        return next();
    }

    //* Si no esta hasheado
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

UsuariosSchema.post('save', function (error, doc, next) {
    if(error.name === 'MongoError' && error.code === 'E11000') {
        next('Ese correo ya está registrado');
    } else {
        next(error);
    }
});

export const Usuarios = model('usuarios', UsuariosSchema);