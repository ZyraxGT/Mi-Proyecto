const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/miapp');

const Usuario = mongoose.model('Usuario', new mongoose.Schema({
  usuario: String,
  contrasena: String
}));

const Empleado = mongoose.model('Empleado', new mongoose.Schema({
  nombre: String,
  cargo: String
}));

// Rutas de autenticación
app.post('/api/registro', async (req, res) => {
  const { usuario, contrasena } = req.body;
  const existe = await Usuario.findOne({ usuario });
  if (existe) return res.status(400).send('Usuario ya registrado');
  await new Usuario({ usuario, contrasena }).save();
  res.send('Registrado correctamente');
});

app.post('/api/login', async (req, res) => {
  const { usuario, contrasena } = req.body;
  const user = await Usuario.findOne({ usuario, contrasena });
  if (user) return res.send('Login correcto');
  res.status(401).send('Credenciales inválidas');
});

// Rutas de empleados
app.get('/api/empleados', async (req, res) => {
  const empleados = await Empleado.find();
  res.json(empleados);
});

app.post('/api/empleados', async (req, res) => {
  const nuevo = new Empleado(req.body);
  await nuevo.save();
  res.send('Empleado agregado');
});

app.delete('/api/empleados/:id', async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);
  res.send('Empleado eliminado');
});

app.listen(3001, () => console.log('Servidor backend en http://localhost:3001'));