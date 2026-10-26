module.exports = (err, req, res, next) => {
  console.error(err.stack);

  // JSON mal formado enviado por el cliente
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ status: 'fail', message: 'JSON mal formado' });
  }

  res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
};
