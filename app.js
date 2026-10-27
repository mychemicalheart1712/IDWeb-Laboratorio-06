const express = require('express');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();

<<<<<<< HEAD
app.use(express.json());
app.use(logger);
app.use('/api/cursos', cursoRoutes);
app.get('/api/error', () => { throw new Error('Error de prueba'); });
app.use(errorHandler);
=======
app.use(express.json());          // 1. parser JSON
app.use(logger);                  // 2. logger
app.use('/api/cursos', cursoRoutes); // 3. rutas
app.use(errorHandler);            // 4. errores (siempre al final)
>>>>>>> 04e949296af7b77c6901dd6ac02360e7eecc3b67

app.listen(3000, () => console.log('API Express en puerto 3000'));