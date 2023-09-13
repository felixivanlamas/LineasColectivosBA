import { getConnection } from "../database/connection.js";

function validarDatosChofer(datosChofer) {
  if (!datosChofer.nombre || !datosChofer.apellido || !datosChofer.documento) {
    // Si falta alguno de los campos requeridos, retorna un mensaje de error
    return {
      valido: false,
      mensaje: "Todos los campos (nombre, apellido, documento) son requeridos.",
    };
  }

  // Si todos los campos requeridos están presentes y no son nulos/vacíos, retorna válido
  return { valido: true };
}

class ChoferesController {
  getAll = async (req, res) => {
    const pool = await getConnection();
    try {
      const result = await pool.request().query("SELECT * FROM Choferes");
      res.json(result.recordset);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error al obtener los choferes",
          error: error.message,
        });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    const pool = await getConnection();

    try {
      const result = await pool
        .request()
        .input("idChofer", id)
        .query("SELECT * FROM Choferes WHERE id = @idChofer");

      if (result.recordset.length === 0) {
        return res.status(404).json({ message: "Chofer no encontrado" });
      }

      res.json(result.recordset[0]);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener el chofer", error: error.message });
    }
  };

  create = async (req, res) => {
    const datosChofer = req.body;
    const validacion = validarDatosChofer(datosChofer);
    if (!validacion.valido) {
      return res.status(400).json({ mensaje: validacion.mensaje });
    }
    const pool = await getConnection();
    try {
      await pool
        .request()
        .input("nombreChofer", datosChofer.nombre)
        .input("apellidoChofer", datosChofer.apellido)
        .input("documentoChofer", datosChofer.documento)
        .query(
          "INSERT INTO Choferes (nombre, apellido, documento) VALUES (@nombreChofer, @apellidoChofer, @documentoChofer)"
        );

      res.status(201).json({ message: "Chofer creado exitosamente" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al crear el chofer", error: error.message });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;
    const pool = await getConnection();
    try {
      const result = await pool
        .request()
        .input("idChofer", id)
        .query("DELETE FROM Choferes WHERE id = @idChofer");

      if (result.rowsAffected[0] === 0) {
        res
          .status(404)
          .json({
            message: "No se encontró ningún chofer con el ID proporcionado",
          });
      } else {
        res.json({ message: "Chofer eliminado exitosamente" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al eliminar el chofer", error: error.message });
    }
  };

  edit = async (req, res) => {
    const { id } = req.params;
    const datosChofer = req.body;
    const validacion = validarDatosChofer(datosChofer);
    if (!validacion.valido) {
      return res.status(400).json({ mensaje: validacion.mensaje });
    }
    const pool = await getConnection();
    try {
      const result = await pool
        .request()
        .input("idChofer", id)
        .input("nombreChofer", datosChofer.nombre)
        .input("apellidoChofer", datosChofer.apellido)
        .input("documentoChofer", datosChofer.documento)
        .query(
          "UPDATE Choferes SET nombre = @nombreChofer, apellido = @apellidoChofer, documento = @documentoChofer WHERE id = @idChofer"
        );

      if (result.rowsAffected[0] === 0) {
        res
          .status(404)
          .json({
            message: "No se encontró ningún chofer con el ID proporcionado",
          });
      } else {
        res.json({ message: "Chofer editado exitosamente" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al editar el chofer", error: error.message });
    }
  };
}

export default ChoferesController;
