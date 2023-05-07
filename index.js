const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config()
const {
  handleGetAllData,
  handleGetByIdData,
  handleDeleteData,
  handleCreateData,
  handleUpdateData,
  handleGetInfo,
} = require('./controller')

const app = express();

app.use(cors())
// Middleware -> Función que se ejecuta antes de que llegue a la ruta -> Body parser
app.use(express.json())

//
app.use(morgan('dev'))


// RUTAS
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
})

// GET -> /users
app.get('/api/hotels', handleGetAllData)
// pagina info numero del arreglo y date
app.get('/api/info', handleGetInfo)



// GET -> /users/10
app.get('/api/hotels/:id', handleGetByIdData)

// POST -> /users
app.post('/api/hotels', handleCreateData)

// patch -> /users/10
app.patch('/api/hotels/:id', handleUpdateData)

// DELETE -> /users/10
app.delete('/api/hotels/:id', handleDeleteData)

//se ajusta el codigo
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});