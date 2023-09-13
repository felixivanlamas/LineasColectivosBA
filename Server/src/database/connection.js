import sql from 'mssql'

const dbSettings = {
    /* user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    server: config.dbServer, */
    user : "felix",
    password : "felix123",
    database : "ColectivosBA",
    server : "localhost",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection() {
    try {
      return await sql.connect(dbSettings);
    } catch (error) {
      console.error("Error en la conexión:", error);
    }
  }

export {sql}
