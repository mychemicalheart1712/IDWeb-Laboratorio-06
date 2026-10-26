const cursos = require("../data/cursos");
const noImplementado = (req, res) =>
  res.status(501).json({ status: 'fail', message: 'No implementado' });

// ===== PERSONA 1: Lecturas =====
exports.getAllCursos = (req, res) => {
    const {creditos} = (req.query);
    let resultado = cursos;
    if (creditos !== undefined){
        resultado = cursos.filter(c => c.creditos === Number(creditos));
    }
    res.status(200).json({status: "success", results: resultado.length , data:resultado});
};

exports.getCursoById = (req, res) => { 
    const id = parseInt(req.params.id);
    const curso = cursos.find(c => c.id ===id);
    if (!curso) {
        return res.status(404).json({status: "fail", message: "Curso no encontrado"});
    }
    res.status(200).json({status: "success", data: curso});
};

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