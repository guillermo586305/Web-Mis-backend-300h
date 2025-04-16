const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error:', err));

// Endpoint inicial
app.get('/', (req, res) => {
  res.send('Servidor Web-Mis funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
