// forma anterior de importar 
//const express = require('express')
//fomra actual de importar 
import  express  from "express"

import { router } from "../routers/Routers.js"

export class Servidor{

    constructor(){
        this.app = express() // definiendo atributo o variable
        this.atenderPeticiones //atiendo las peticiones del cliente
    }

    atenderPeticiones(){
        // atendiendo peticiones 
        this.app.use('/',router)
  
    }

    correrServidor(){
        //levantando el servidor 
        this.app.listen(process.env.PORT,function(){
            console.log("servidor corriendo"+ process.env.PORT)
})
    }

}