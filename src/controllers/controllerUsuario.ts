import executeQuery from "../services/mysql.service";

const obtenerCliente = asyc(req, res, next) => {
    await executeQuery('SELECT * FROM cliente').then(response => {
        const data = {
            message: `${response.lenght} datos encontrados`,
            data: response.lenght > 0 ? response : null 
        };
        res.json(data);
    }).catch(error => {
        next(error);
    });
}