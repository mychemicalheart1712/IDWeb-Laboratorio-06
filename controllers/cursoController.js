const cursos = require('../data/cursos');
const noImplementado = (req, res) =>
  res.status(501).json({ status: 'fail', message: 'No implementado' });

// ===== PERSONA 1: Lecturas =====
exports.getAllCursos = noImplementado;
exports.getCursoById = noImplementado;

// ===== PERSONA 2: Escrituras =====
exports.createCurso = noImplementado;
exports.updateCurso = noImplementado;

// ===== PERSONA 3: Eliminación =====
exports.deleteCurso = (req, res) => {
  const indice = cursos.findIndex(c => c.id === parseInt(req.params.id));
  if (indice === -1) {
    return res.status(404).json({ status: 'fail', message: 'Curso no encontrado' });
  }
  cursos.splice(indice, 1);
  res.status(200).json({ status: 'success', message: 'Curso eliminado correctamente' });
};