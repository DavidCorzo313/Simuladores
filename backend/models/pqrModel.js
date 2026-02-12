const db = require("../config/db");

exports.crearPQR = (data, callback) => {
  const sql = `
    INSERT INTO pqr
    (numero_movil, identificacion, tipo_identificacion, nombres, apellidos,
     direccion, barrio, telefono, plan, departamento, ciudad, region,
     tipo_pqr, tipologia, solicitud, area_responsable,
     causal, hechos, requerimientos, comentarios)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `;

  db.query(sql, Object.values(data), callback);
};
