import { Router } from 'express';
import {actualizarCliente, agregarCliente,
        eliminarCliente, obtenerCliente,
        obtenerClientes, iniciarSesion} from "../controllers/controllerCliente";
/*import isAdmin from "../middlewares/admin";*/

const clienteRoutes=(app)=>{
    const router=Router();
      app.use('/', router);
      router.get('/obtenerClientes',/*isAdmin,*/ obtenerClientes);
      router.get('/obtenerCliente/:id',obtenerCliente);
      router.post('/agregarCliente',agregarCliente);
      router.put('/actualizarCliente/:id',actualizarCliente);
      router.delete('/eliminarCliente/:id',eliminarCliente);
      router.get('/iniciarSesion/:email', iniciarSesion)

}
export default clienteRoutes
