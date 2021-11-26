import { Router } from 'express';
import {actualizarDetalle, agregarDetalle,
        eliminarDetalle, obtenerDetalle,
        obtenerDetalles} from "../controllers/controllerDetalle";
import isAdmin from "../middlewares/admin";

const detalleRoutes=(app)=>{
    const router=Router();
      app.use('/', router);
      router.get('/obtenerDetalles', isAdmin, obtenerDetalles);
      router.get('/obtenerDetalle/:id',obtenerDetalle);
      router.post('/agregarDetalle',agregarDetalle);
      router.put('/actualizarDetalle/:id',actualizarDetalle);
      router.delete('/eliminarDetalle/:id',eliminarDetalle);

}
export default detalleRoutes
