import executeQuery from "../services/mysql.service"

const obtenerProductores= async(req,res,next) => {
    await executeQuery(
    `SELECT id_productor,
            nombre,
            apellido,
            poblacion,
            direccion,
            telefono,
            email,
            password
            FROM productor
            `).then(response => {
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
        const response = await executeQuery(
          `SELECT nombre,
                  apellido,
                  poblacion,
                  direccion,
                  telefono,
                  email,
                  tipoProducto,
                  password
          FROM productor
          WHERE productor.id_productor = ${id}`);
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
    const {nombre, apellido, poblacion, direccion, telefono, email, password} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO productor
          (
            nombre, apellido, poblacion, direccion,
            telefono, email, password
          ) VALUES
          (
            '${nombre}', '${apellido}', '${poblacion}', '${direccion}',
            '${telefono}', '${email}', '${password}'
          )`);
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }

}
const actualizarProductor=(req, res, next)  => {
    const {nombre, apellido, poblacion, direccion, telefono, email, password} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE productor SET nombre = '${nombre}',
                                         apellido = '${apellido}'
                                         poblacion = '${poblacion}',
                                         direccion = '${direccion},
                                         telefono = '${telefono},
                                         email = '${email},
                                         password = '${password}'
                                         WHERE id_productor = '${id}'`).then((response) =>{
        console.log(response);
        res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        next(error);
    });

}
const eliminarProductor=(req, res, next) => {
    executeQuery(`DELETE FROM productor WHERE id_productor = '${req.params.id}'`).then((response) => {
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
