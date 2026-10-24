const express = require('express');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();

app.use(express.json());
app.use(logger);
app.use('/api/cursos', cursoRoutes);
app.use(errorHandler);

app.listen(3000, () => console.log('API Express en puerto 3000'));