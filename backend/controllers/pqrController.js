const PQR = require("../models/pqrModel");

exports.crear = (req, res) => {
  PQR.crearPQR(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });

    res.json({
      mensaje: "Radicación Exitosa",
      id: result.insertId
    });
  });
};
