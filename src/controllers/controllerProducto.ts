import executeQuery from "../services/mysql.service";

const obtenerProducto = async(req, res, next) => {
    const {id} = req.params;
    try{
    const response = await executeQuery(`SELECT * FROM producto where idProducto = ${id}`);
    const data = {
      message: `${response.length} datos encontrados`,
      data: response.length > 0 ? response[0] : null
        };
        res.json(data);
    }catch(error){
        next(error);
    }
}

const obtenerProductos = async(req, res, next) => {
    await executeQuery('SELECT * FROM producto').then(response => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(data);
    }).catch(error => {
        next(error);
    });
}

const actualizarProducto = async(req, res, next) => {
  const {nombreProducto,precio } = req.body;
  const {id} = req.params;
  executeQuery(`UPDATE producto SET nombreProducto = '${nombreProducto}',
                                   precio = '${precio}',
                                    WHERE idProducto = '${id}'`)
                                   .then((response) => {
  console.log(response);
  res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${req.params.id}`});
  }).catch((error) => {
    next(error);
  });
}


const agregarProducto = async (req, res, next) => {
  const {nombreProducto, precio} = req.body;
  try {
    const response = await executeQuery(`INSERT INTO producto
      (nombreProducto, precio) VALUES
      ('${nombreProducto}',${precio}')`);
      res.status(201).json({
        message: 'created',
        id: response.insertId
      });
  }catch (error) {
    next(error);
}}

const eliminarProducto = async (req, res, next) => {
  executeQuery(`DELETE FROM producto WHERE idProducto = '${req.params.id}'`).then((response) => {res
.json({
      message: response.affectedRows > 0 ? `deleted`: 'No existe registro con id: ${req.params.id}'}
);
    }).catch((error) => {
      next(error)
    });
}

export {
  eliminarProducto,
  agregarProducto,
  actualizarProducto,
  obtenerProductos,
  obtenerProducto}
