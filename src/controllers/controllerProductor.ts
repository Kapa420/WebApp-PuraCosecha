import executeQuery from "../services/mysql.service"

const obtenerProductores= async(req,res,next) => {
    await executeQuery('SELECT * FROM productores').then(response => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(data);
    }).catch(error => {
        next(error);
    });

}
const obtenerProductor= async(req, res, next) => {
    const {id} = req.params;
    try{
        const response = await executeQuery(`SELECT * FROM productores WHERE idProductores = ${id}`);
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response[0] : null
        };
        res.json(data);
    }catch(error){
        next(error);
    }

}

const agregarProductor= async (req, res, next) => {
    const {nombre, poblacion, municipio, direccion, telefono, Email, tipoProducto, idProducto} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO productores
          (
            nombre, poblacion, municipio, direccion, telefono,
            Email, tipoProducto, idProducto
          ) VALUES
          (
            '${nombre}', '${poblacion}', '${municipio}', '${direccion}',
            '${telefono}', '${Email}', '${tipoProducto}', '${idProducto}'
          )`);
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }

}
const actualizarProductor=(req, res, next)  => {
    const {nombre, poblacion, municipio, direccion, telefono,
           Email, tipoProducto, idProducto} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE productores SET nombre = '${nombre}',
                                         poblacion = '${poblacion}',
                                         municipio = '${municipio}',
                                         direccion = '${direccion},
                                         telefono = '${telefono},
                                         Email = '${Email},
                                         tipoProducto = '${tipoProducto},
                                         WHERE idProductores = '${id}'`).then((response) =>{
        console.log(response);
        res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        next(error);
    });

}
const eliminarProductor=(req, res, next) => {
    executeQuery(`DELETE FROM productores WHERE idProductor = '${req.params.id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'deleted' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        next(error)
    });

}

export {obtenerProductores,
  obtenerProductor,
  agregarProductor,
  actualizarProductor,
  eliminarProductor}
