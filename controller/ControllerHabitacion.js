export class ControllerHabitacion{

    constructor(){}

    // buscar habitaciones

    buscarHabitaciones(request,response){
        
        //Intento resolver peticion
        try{
            
            response.status(200).json({
            
                mensaje:"exito en la consulta",
                datos:["habitacion 1","2000USD","tv satelital"]

            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

                mensaje:"fallo en la consulta" + error,
                datos:null        

            })
        }
    }

    // buscar habitacion por id

    buscarHabitacionPorId(request,response){
        let identificador = request.params.id
        console.log(identificador)
        try{
            
            
            response.status(200).json({
               
                mensaje:"exito en la consulta "+ identificador,
                datos:["habitacion 1","2000USD","tv satelital"]

                
            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

                mensaje:"fallo en la consulta" + error,
                datos:null

            })
        }
    }

    // agregar habitacion

    agregarHabitacion(request,response){
        let cuerpo = request.body
        console.log(cuerpo) 

        //Intento resolver peticion
        try{

            response.status(200).json({

                mensaje:"exito agregando la habitacion",
                datos : cuerpo


            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

                mensaje:"fallo en la consulta" + error,
                datos:null

            })
        }
    }    

    // editar habitacion

    editarHabitacion(request,response){
        
        //recibir el id 
        let id = request.params.id

        //recibir los datos con los que voy a editar (body)
        let datos = request.body
         
        //Intento resolver peticion
        try{

            response.status(200).json({

                mensaje:"exito editando la habitacion" + id,
                datos : datos


            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

                mensaje:"fallo editando habitacion " + error,
                datos:null

            })
        }
    }

    // eliminar habitacion

    eliminarReserva(request,response){
         
        //Intento resolver peticion
        try{

            response.status(200).json({

            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

            })
        }
    }
}