import {Router} from "express"; 
import locationController from '../controllers/location.contoller'

//Router nos permite gestionar rutas de la API
const router = Router();

/*
- listado de asignaturas (CU_1)
- añadir alumno en una asignatura (CU_2)
- ver detalle de una asignatura (CU_3)
- ver detalle de un alumno dentro de una asignatura (CU_4)*/

router.get('/all', locationController.getLocations);
router.get('/todo', locationController.getLocation);
router.post('/new',locationController.newLocation);


//Exportamos router para usar rutas en app.ts
export default router;