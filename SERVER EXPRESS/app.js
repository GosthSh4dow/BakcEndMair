const express = require('express');
const paradasRoutes = require('./routes/paradasRoutes');
const gruposRoutes = require('./routes/gruposRoutes');
const sociosRoutes = require('./routes/sociosRoutes');
const choferesRoutes = require('./routes/choferesRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const reportajeController = require('./routes/reportajesRoutes');
const hojasDeRutaRoutes = require('./routes/hojasDeRutaRoutes');
const reservasRoutes = require('./routes/reservasRoutes');
const viajesRoutes = require('./routes/viajesRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://192.168.100.66:3000'); // Reemplaza con el origen de tu aplicación React
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next(); 
});

app.use(express.json());
app.use('/api', sociosRoutes);
app.use('/api', gruposRoutes); 
app.use('/api', paradasRoutes);
app.use('/api', choferesRoutes); 
app.use('/api', usuariosRoutes);
app.use('/api', reportajeController);
app.use('/api', hojasDeRutaRoutes);
app.use('/api', reservasRoutes);
app.use('/api', viajesRoutes);
app.use('/api', clienteRoutes);
// Escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor API REST corriendo en el puerto http://localhost:${PORT}`);
});
