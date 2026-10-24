const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

// Ruta temporal para probar el error 500 (debe ir ANTES de '/:id')
router.get('/error', (req, res, next) => {
  next(new Error('Error de prueba'));
});

router.get('/', cursoController.getAllCursos);
router.get('/:id', cursoController.getCursoById);
router.post('/', cursoController.createCurso);
router.put('/:id', cursoController.updateCurso);
router.delete('/:id', cursoController.deleteCurso);

module.exports = router;