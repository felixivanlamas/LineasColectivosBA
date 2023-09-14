import { getConnection } from "../database/connection.js";

class LineasController {

    getAll = async (req, res) => {
        const pool = await getConnection()
        const result = await pool.request()
            .query('SELECT * FROM Lineas')
        res.json(result.recordset)
    }

    // Obtener una línea por su ID
    getById = async (req, res) => {
        const { id } = req.params;
        const pool = await getConnection();

        try {
            const result = await pool.request()
                .input('idLinea', id)
                .query('SELECT * FROM Lineas WHERE id = @idLinea');

            if (result.recordset.length === 0) {
                return res.status(404).json({ message: 'Línea no encontrada' });
            }

            res.json(result.recordset[0]);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la línea', error: error.message });
        }
    }

    // Crear una nueva línea
/*     create = async (req, res) => {
        const { nombre } = req.body;
        const pool = await getConnection();
        try {
            await pool.request()
                .input('nombreLinea', nombre)
                .query('INSERT INTO Lineas (nombre) VALUES (@nombreLinea)');

            res.status(201).json({ message: 'Línea creada exitosamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear la línea', error: error.message });
        }
    } */
    create = async (req, res) => {
        const { nombre } = req.body;
        const pool = await getConnection();
      
        try {
          // Ejecuta la inserción en la base de datos
          await pool.request()
            .input('nombreLinea', nombre)
            .query('INSERT INTO Lineas (nombre) VALUES (@nombreLinea)');
      
          // Consulta la fila recién creada
          const result = await pool.request()
            .query('SELECT * FROM Lineas WHERE nombre = @nombreLinea');
      
          // Comprueba si se encontró la fila recién creada
          if (result.recordset.length > 0) {
            const lineaCreada = result.recordset[0];
            res.status(201).json({ message: 'Línea creada exitosamente', data: lineaCreada });
          } else {
            res.status(500).json({ message: 'Error al crear la línea', error: 'No se pudo encontrar la línea recién creada.' });
          }
        } catch (error) {
          res.status(500).json({ message: 'Error al crear la línea', error: error.message });
        }
      }

    // Eliminar una línea por su ID
    delete = async (req, res) => {
        const { id } = req.params;
        const pool = await getConnection();

        try {
            const result = await pool.request()
                .input('id', id)
                .query('DELETE FROM Lineas WHERE id = @id');

            if (result.rowsAffected[0] === 0) {
                // Si no se encontró ninguna línea para eliminar
                res.status(404).json({ message: 'No se encontró ninguna línea con el ID proporcionado' });
            } else {
                res.json({ message: 'Línea eliminada exitosamente' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar la línea', error: error.message });
        }
    }


    // Editar una línea por su ID
    edit = async (req, res) => {
        const { id } = req.params;
        const datosLinea = req.body;
        const pool = await getConnection();

        try {
            const result = await pool.request()
                .input('id', id)
                .input('nombre', datosLinea.nombre)
                .query('UPDATE Lineas SET nombre = @nombre WHERE id = @id');

            if (result.rowsAffected[0] === 0) {
                // Si no se encontró ninguna línea para editar
                res.status(404).json({ message: 'No se encontró ninguna línea con el ID proporcionado' });
            } else {
                res.json({ message: 'Línea editada exitosamente' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al editar la línea', error: error.message });
        }
    }

}

export default LineasController