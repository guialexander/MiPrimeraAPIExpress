const table = require("@makeitrealcamp/db-mock")

const r1 = table.insert(  {
 
    name: 'Hilton',
    city: 'Bogota',
    phone: '555-1234',
    photo: 'https://isavictoryhotelboutique.com/wp-content/uploads/2022/12/hotel-1280x720-2-1024x576.jpg',
  } )

  const r2 = table.insert(  {
    
    name: 'Centro hotel',
    city: 'Medellín',
    phone: '555-5678',
    photo: 'https://isavictoryhotelboutique.com/wp-content/uploads/2022/12/hotel-1280x720-2-1024x576.jpg',
  } )

  const r3 = table.insert(  {
    
    name: 'Dubay',
    city: 'Cartagena',
    phone: '555-9012',
    photo: 'https://www.eltiempo.com/files/article_multimedia/uploads/2020/07/15/5f0f7308626e6.jpeg',
  } )

  const r4 = table.insert(   {
    
    name: 'ALo',
    city: 'Bucaramanga',
    phone: '555-9012',
    photo: 'https://isavictoryhotelboutique.com/wp-content/uploads/2022/12/hotel-1280x720-2-1024x576.jpg',
  } )

  const r5 = table.insert(   {
   
    name: 'sanbill',
    city: 'San Cristobal',
    phone: '555-9012',
    photo: 'https://isavictoryhotelboutique.com/wp-content/uploads/2022/12/hotel-1280x720-2-1024x576.jpg',
  } )


function getAllData() {
  const records = table.findAll()

  return records
}

function getDataById(id) {
  const record = table.findById(id)

  return record
}

function createData(data) {
  const record = table.insert(data)

  return record
}

function updateData(id, data) {
  const dataToUpdate = {
    id,
    ...data,
  }

  const record = table.update(dataToUpdate)

  return record
}

function deleteData(id) {
  const record = table.remove(id)

  return record
}

function getInfo(){
    const time= new Date();
    const record = (
        {agenda: "phonebook has info for "+ hotels.length+" people",
        clock : time 
})
    return (record)
}

module.exports = {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData,
  getInfo
}