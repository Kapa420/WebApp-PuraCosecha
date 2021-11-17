import express from 'express';
import clienteRoutes from "./routes/cliente";
import productoresRoutes from './routes/productores';
import productoRoutes from './routes/producto';
import config from "./config/config";
import errorHandler from './middlewares/erros';
import isAdmin from './middlewares/admin';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

clienteRoutes(app)
productoresRoutes(app)
productoRoutes(app)

app.use(errorHandler);

app.get('/prueba/', async(req, res, next) => {
  res.status(404).json({ message: "todo ok. :)"});
});

app.listen(config.PORT, () => {
  return console.log(`servidor corriendo en el puerto ${config.PORT}`);
});
