import { Router } from 'express';
import {actualizarCliente, agregarCliente, eliminarCliente, obtenerCliente, obtenerClientes} from "../controllers/controllerCliente";
import isAdmin from "../middlewares/admin";

const clienteRoutes=(app)=>{
    const router=Router();
      app.use('/', router);
      router.get('/obtenerClientes', isAdmin, obtenerClientes);
      router.get('/obtenerCliente/:id',obtenerCliente);
      router.post('/agregarCliente',agregarCliente);
      router.put('/actualizarCliente/:id',actualizarCliente);
      router.delete('/eliminarCliente/:id',eliminarCliente);

}
// uso export para que pueda exportar y luego en .appts se pueda importar
export default clienteRoutes
