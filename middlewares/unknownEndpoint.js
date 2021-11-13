exports.unknownEndpoint = (req, res, next) => {
  // if i got to this middleware then i missed endpoint
  res.status(404).json({ error: 'unknown endpoint' });
};
