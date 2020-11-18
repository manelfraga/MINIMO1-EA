import mongoose, { Schema, Document} from 'mongoose';

const locationSchema = new Schema({
    nombre: {
        type: String
    },
    estado: {
        type: String
    },
    densidad:{
        type: String
    },
    latitud: {
        type: String
    },
    longitud: {
        type: String
    }
});

//Interfaz para tratar respuesta como documento
export interface ILocation extends Document {
    nombre: string;
    estado: string;
    densidad: string;
    latitud: string;
    longitud: string;
}

//Exportamos modelo para poder usarlo
export default mongoose.model<ILocation>('Location', locationSchema);