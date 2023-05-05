const express = require('express');

const {
  handleGetAllData,
  handleGetByIdData,
  handleDeleteData,
  handleCreateData,
  handleUpdateData,
  handleGetInfo,
} = require('./controller')

const app = express();

// Middleware -> Función que se ejecuta antes de que llegue a la ruta -> Body parser
app.use(express.json())


// RUTAS
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
})

// GET -> /users
app.get('/api/persons', handleGetAllData)
// pagina info numero del arreglo y date
app.get('/api/info', handleGetInfo)



// GET -> /users/10
app.get('/api/persons/:id', handleGetByIdData)

// POST -> /users
app.post('/api/persons', handleCreateData)

// patch -> /users/10
app.patch('/api/users/:id', handleUpdateData)

// DELETE -> /users/10
app.delete('/api/persons/:id', handleDeleteData)


const port = 3001
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});