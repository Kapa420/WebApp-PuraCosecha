import executeQuery from "../services/mysql.service";

const obtenerCliente = async(req, res, next) => {
    const {id} = req.params;
    try{
    const response = await executeQuery(`SELECT * FROM cliente where idCliente = ${id}`);
    const data = {
      message: `${response.length} datos encontrados`,
      data: response.length > 0 ? response[0] : null
        };
        res.json(data);
    }catch(error){
        next(error);
    }
}

const obtenerClientes = async(req, res, next) => {
    await executeQuery('SELECT * FROM cliente').then(response => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(data);
    }).catch(error => {
        next(error);
    });
}

const actualizarCliente = async(req, res, next) => {
  const {nombre, telefono, Email, direccion, municipio} = req.body;
  const {id} = req.params;
  executeQuery(`UPDATE cliente SET nombre = '${nombre}',
                                   telefono = '${telefono}',
                                   Email = '${Email}',
                                   direccion = '${direccion}',
                                   municipio = '${municipio}'
                                   WHERE idCliente = '${id}'`)
                                   .then((response) => {
  console.log(response);
  res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${req.params.id}`});
  }).catch((error) => {
    next(error);
  });
}

const agregarCliente = async (req, res, next) => {
  const {nombre, telefono, Email, direccion, municipio} = req.body;
  try {
    const response = await executeQuery(`INSERT INTO cliente
      (nombre, telefono, Email, direccion, municipio) VALUES
      ('${nombre}',${telefono}', '${Email}', '${direccion}', '${municipio}')`);
      res.status(201).json({
        message: 'created',
        id: response.insertId
      });
  }catch (error) {
    next(error);
  }
}

const eliminarCliente = async (req, res, next) => {
  executeQuery(`DELETE FROM usuario WHERE idCliente = '${req.params.id}'`).then((response) => {res.json({
      message: response.affectedRows > 0 ? `deleted`: 'No existe registro con id: ${req.params.id}'});
    }).catch((error) => {
      next(error)
    });
}

export {eliminarCliente, agregarCliente, actualizarCliente, obtenerCliente, obtenerClientes}
