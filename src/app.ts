import express from 'express';
import clienteRoutes from "./routes/cliente";
import productoresRoutes from './routes/productores';
import config from "./config/config";
import errorHandler from './middlewares/erros';
import isAdmin from './middlewares/admin';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

clienteRoutes(app)
productoresRoutes(app)

app.use(errorHandler);
app.get(`\aguacate`, async(req, res) => {
  res.status(404).json({message: "Todo corre normal. :)"});
})

app.listen(config.PORT, () => {
  return console.log(`servidor corriendo en el puerto ${config.PORT}`);
});
