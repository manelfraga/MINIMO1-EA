import { Request, Response} from "express";
import Location from '../models/location';
import LocationList from '../models/locationList';

const getLocations = async (req: Request, res: Response) => {
    try{
        const results = await LocationList.find({}).populate('locations');
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}
const getLocation = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    try{
        const results = await Location.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}
const newLocation = async (req: Request, res: Response) => {
    try{
    let location = new Location({
        "nombre" : req.body.nombre,
        "estado" : req.body.estado,
        "densidad" : req.body.densidad,
        "latitud" : req.body.latitud,
        "longitud" : req.body.longitud,
    });
    location.save().then((data) => {
        return res.status(201).json(data);
    });
    } catch(err) {
        return res.status(500).json(err);
    }
}



export default { getLocations, getLocation, newLocation };