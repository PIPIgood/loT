const express = require("express")
const router = express.Router()
const ComponenteModel = require("../../modelos/Componente");   

/* Router functions here */ 
router.get('/api', (req, res) => {res.send('hola REST API!')})

//Get specific component in the database    
router.get('/api/componentes/:id', (req, res) => {
     const {id} = req.params;
     ComponenteModel
     .findById(id)
     .then((nuevoComponente)=>res.json(componente))
     .catch((error)=>res.json({message:error})); 

})

//Get all components records in the database 
router.get('/api/componentes', (req, res) => {
    const {id} = req.params;
     ComponenteModel
     .find()
     .then((componente)=>res.json(componente))
     .catch((error)=>res.json({message:error})); 

})

//New Component Route 
router.post("/api/componentes/nuevoComponente", (req, res) => { 
 const componente = ComponenteModel(req.body); 
 componente.save()
 .then((nuevoComponente)=>res.json(nuevoComponente))
 .catch((error)=>res.json({message:error}));
 })


//Update component record 
router.put('/api/componentes/:id',(req, res) => {
     const {id} =req.params
     const {componente_id,descripcion,ubicacion,activo,tipo,valor} = req.body
     ComponenteModel
     .then((componente)=>res.json(componente))   
     .catch((error)=>res.json({message:error})); 
})


//Delete specific component record 

router.delete('/api/componentes/:id', (req, res) => {
     const {id} = req.params;
     ComponenteModel
     .remove({_id:id})
     .then((componente)=>res.json(componente))
     .catch((error)=>res.json({message:error})); 
})

module.exports = router


