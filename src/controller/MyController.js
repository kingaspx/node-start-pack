const db = require("../config/database");
const path = require('path')

module.exports = {
  async listData(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Listar dados'
    // #swagger.description = 'Listar dados de todos os usuários.'
    // #swagger.id = 'id_user'
    const { rows } = await db.query("SELECT * FROM table", [val1, val2]);
    return res.status(200).json(result.rows);
  },
  async insertData(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Inserir dados'
    // #swagger.description = 'Inserir dados de todos os usuários.'

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Para dar certo, insira o body.',
            required: true,
            schema: { $ref: "#/definitions/InserirUsuario" }
    } */

    const { val1, val2 } = req.body;
    await db.query("INSERT INTO  table (val1, val2) VALUES ($1,$2)", [val1, val2], (error, result) => {
      if (error) {
        return res.status(500).json({ status: 'error', message: error });
      }

      res.status(200).json(result.rows);
    });
  },
  async insertImage(req, res) {
    const { val1, val2 } = req.body
    const { filename: image } = req.file;

    let caminho = ''

    path.resolve(req.file.destination, 'resized', image)
    caminho = `http://localhost:1234/${image}`

    await db.query("INSERT INTO  table (val1, val2, val3) VALUES ($1, $2, $3)", [val1, val2, caminho], (error, result) => {
      if (error) {
        return res.status(500).json({ status: 'error', message: error });
      }

      res.status(200).json(result.rows);
    });
  },
  async updateData(req, res) {
    const { val1, val2, val3 } = req.body
    await db.query("UPDATE table SET val1=$1, val2=$2 WHERE val3=$3", [val1, val2, val3], (error, result) => {
      if (error) {
        return res.status(500).json({ status: 'error', message: error });
      }

      res.status(200).json(result.rows);
    });
  },
  async deleteData(req, res) {
    const { val1 } = req.body
    await db.query("DELETE FROM table WHERE val1=$1", [val1], (error, result) => {
      if (error) {
        return res.status(500).json({ status: 'error', message: error });
      }

      res.status(200).json(result.rows);
    });
  },
};