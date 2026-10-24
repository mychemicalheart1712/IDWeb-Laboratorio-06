const noImplementado = (req, res) =>
  res.status(501).json({ status: 'fail', message: 'No implementado' });

// ===== PERSONA 1: Lecturas =====
exports.getAllCursos = noImplementado;
exports.getCursoById = noImplementado;

// ===== PERSONA 2: Escrituras =====
exports.createCurso = noImplementado;
exports.updateCurso = noImplementado;

// ===== PERSONA 3: Eliminación =====
exports.deleteCurso = noImplementado;