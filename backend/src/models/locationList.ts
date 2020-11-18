import mongoose, { Schema, Document} from 'mongoose';
import {ILocation} from './location'

//Modelo de objeto que se guarda en la BBDD de MongoDB
const locationListSchema = new Schema({
    name: {
        type: String
    },
    location: [{
        type: Schema.Types.ObjectId,
        ref: Location
    }]
});

//Interfaz para tratar respuesta como documento
export interface ILocationList extends Document {
    name: string;
    location: ILocation['_id']; //Relacion con la coleccion locations
}

//Exportamos modelo para poder usarlo
export default mongoose.model<ILocationList>('Location', locationListSchema);