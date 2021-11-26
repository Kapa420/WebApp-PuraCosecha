import { Router } from 'express';
import {actualizarProducto, agregarProducto, eliminarProducto, obtenerProducto, obtenerProductos} from "../controllers/controllerProducto";
import isAdmin from "../middlewares/admin";

const productoRoutes=(app)=>{
    const router=Router();
      app.use('/', router);
      router.get('/obtenerProductos', isAdmin, obtenerProductos);
      router.get('/obtenerProducto/:id',obtenerProducto);
      router.post('/agregarProducto',agregarProducto);
      router.put('/actualizarProducto/:id',actualizarProducto);
      router.delete('/eliminarProducto/:id',eliminarProducto);

}
// uso export para que pueda exportar y luego en .appts se pueda importar
export default productoRoutes
