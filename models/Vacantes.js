import mongoose, { mongo } from "mongoose";
import slug from "slug";
import shortid from "shortid";

const {Schema} = mongoose;

const vacantesSchema = Schema({
    titulo: {
        type: String,
        required: 'El nombre de la vacante es obligatorio',
        trim: true
    },
    empresa: {
        type: String,
        trim: true
    },
    ubicacion: {
        type: String,
        trim: true,
        required: 'La ubicación es obligatoria'
    },
    salario: {
        type: String,
        trim: true,
        default: 0
    },
    contrato: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        lowercase: true
    },
    skills: [String],
    candidatos: [{
        nombre: String,
        email: String,
        cv: String
    }]
});

vacantesSchema.pre('save', function (next) {
    //* Crear url
    const url = slug(this.titulo);
    this.url = `${url}-${shortid.generate()}`;

    next();
});

const Vacantes = mongoose.model('vacantes', vacantesSchema);

export default Vacantes;