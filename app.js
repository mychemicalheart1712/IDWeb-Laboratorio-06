const express = require('express');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();

app.use(express.json());          // 1. parser JSON
app.use(logger);                  // 2. logger
app.use('/api/cursos', cursoRoutes); // 3. rutas
app.use(errorHandler);            // 4. errores (siempre al final)

app.listen(3000, () => console.log('API Express en puerto 3000'));