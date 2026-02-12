CREATE DATABASE simulador_pqr;
USE simulador_pqr;

CREATE TABLE pqr (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_movil VARCHAR(20),
    identificacion VARCHAR(20),
    tipo_identificacion VARCHAR(10),
    nombres VARCHAR(100),
    apellidos VARCHAR(100),
    direccion VARCHAR(200),
    barrio VARCHAR(100),
    telefono VARCHAR(20),
    plan VARCHAR(100),
    departamento VARCHAR(100),
    ciudad VARCHAR(100),
    region VARCHAR(100),
    tipo_pqr VARCHAR(50),
    tipologia VARCHAR(100),
    solicitud VARCHAR(100),
    area_responsable VARCHAR(100),
    causal TEXT,
    hechos TEXT,
    requerimientos TEXT,
    comentarios TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
