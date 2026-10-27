<<<<<<< HEAD
const cursos = require('../data/cursos');

exports.getAllCursos = (req, res) => {
  const { creditos } = req.query;
  let resultado = cursos;
=======
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
>>>>>>> 04e949296af7b77c6901dd6ac02360e7eecc3b67

  if (creditos !== undefined) {
    resultado = cursos.filter(c => c.creditos === Number(creditos));
  }

<<<<<<< HEAD
  res.status(200).json({ status: 'success', results: resultado.length, data: resultado });
};

exports.getCursoById = (req, res) => {
  const id = Number(req.params.id);
  const curso = cursos.find(c => c.id === id);

  if (!curso) {
    return res.status(404).json({ status: 'fail', message: `No se encontró el curso con id ${id}` });
  }

  res.status(200).json({ status: 'success', data: curso });
};

exports.createCurso = (req, res) => {
  const { nombre, codigo, creditos } = req.body;

  if (!nombre || !codigo || creditos === undefined) {
    return res.status(400).json({
      status: 'fail',
      message: 'Faltan campos obligatorios: nombre, codigo, creditos'
    });
  }

  const creditosNum = Number(creditos);
  if (Number.isNaN(creditosNum) || creditosNum <= 0) {
    return res.status(400).json({ status: 'fail', message: 'creditos debe ser un número mayor que 0' });
  }

  const nuevoId = cursos.length > 0 ? Math.max(...cursos.map(c => c.id)) + 1 : 1;
  const nuevoCurso = { id: nuevoId, nombre, codigo, creditos: creditosNum };

  cursos.push(nuevoCurso);
  res.status(201).json({ status: 'success', data: nuevoCurso });
};

exports.updateCurso = (req, res) => {
  const id = Number(req.params.id);
  const curso = cursos.find(c => c.id === id);

  if (!curso) {
    return res.status(404).json({ status: 'fail', message: `No se encontró el curso con id ${id}` });
  }

  const { nombre, codigo, creditos } = req.body;
  if (nombre !== undefined) curso.nombre = nombre;
  if (codigo !== undefined) curso.codigo = codigo;
  if (creditos !== undefined) curso.creditos = Number(creditos);

  res.status(200).json({ status: 'success', data: curso });
};

exports.deleteCurso = (req, res) => {
  const id = Number(req.params.id);
  const indice = cursos.findIndex(c => c.id === id);

  if (indice === -1) {
    return res.status(404).json({ status: 'fail', message: `No se encontró el curso con id ${id}` });
  }

  const [eliminado] = cursos.splice(indice, 1);
  res.status(200).json({ status: 'success', message: `Curso ${eliminado.codigo} eliminado correctamente` });
};
=======
// ===== PERSONA 3: Eliminación =====
exports.deleteCurso = (req, res) => {
  const indice = cursos.findIndex(c => c.id === parseInt(req.params.id));
  if (indice === -1) {
    return res.status(404).json({ status: 'fail', message: 'Curso no encontrado' });
  }
  cursos.splice(indice, 1);
  res.status(200).json({ status: 'success', message: 'Curso eliminado correctamente' });
};
>>>>>>> 04e949296af7b77c6901dd6ac02360e7eecc3b67
