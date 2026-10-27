const cursos = require("../data/cursos");

// ===== PERSONA 1: Lecturas =====
exports.getAllCursos = (req, res) => {
  const { creditos } = req.query;
  let resultado = cursos;
  if (creditos !== undefined) {
    resultado = cursos.filter(c => c.creditos === Number(creditos));
  }
  res.status(200).json({ status: "success", results: resultado.length, data: resultado });
};

exports.getCursoById = (req, res) => {
  const id = parseInt(req.params.id);
  const curso = cursos.find(c => c.id === id);
  if (!curso) {
    return res.status(404).json({ status: "fail", message: "Curso no encontrado" });
  }
  res.status(200).json({ status: "success", data: curso });
};

// ===== PERSONA 2: Escrituras =====
exports.createCurso = (req, res) => {
  const { nombre, codigo, creditos } = req.body;
  if (!nombre || !codigo || !creditos) {
    return res.status(400).json({
      status: "fail",
      message: "Faltan campos obligatorios (nombre, codigo, creditos)"
    });
  }
  const nuevoId = cursos.length ? Math.max(...cursos.map(c => c.id)) + 1 : 1;
  const nuevo = { id: nuevoId, nombre, codigo, creditos: Number(creditos) };
  cursos.push(nuevo);
  res.status(201).json({ status: "success", data: nuevo });
};

exports.updateCurso = (req, res) => {
  const curso = cursos.find(c => c.id === parseInt(req.params.id));
  if (!curso) {
    return res.status(404).json({ status: "fail", message: "Curso no encontrado" });
  }
  const { nombre, codigo, creditos } = req.body;
  if (nombre) curso.nombre = nombre;
  if (codigo) curso.codigo = codigo;
  if (creditos) curso.creditos = Number(creditos);
  res.status(200).json({ status: "success", data: curso });
};

// ===== PERSONA 3: Eliminación =====
exports.deleteCurso = (req, res) => {
  const indice = cursos.findIndex(c => c.id === parseInt(req.params.id));
  if (indice === -1) {
    return res.status(404).json({ status: "fail", message: "Curso no encontrado" });
  }
  cursos.splice(indice, 1);
  res.status(200).json({ status: "success", message: "Curso eliminado correctamente" });
};