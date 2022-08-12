


class controllerHabitacion{

    constructor(){}

    // buscar habitaciones

    buscarHabitacion(request,response){
        
        //Intento resolver peticion
        try{

            response.status(200).json({

            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

            })
        }
    }

    // buscar habitacion por id

    buscarHabitacionPorId(request,response){
        
        try{

            response.status(200).json({
                
            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

            })
        }
    }

    // agregar habitacion

    agregarHabitacion(request,response){
         
        //Intento resolver peticion
        try{

            response.status(200).json({

            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

            })
        }
    }    

    // editar habitacion

    editarHabitacion(request,response){
         
        //Intento resolver peticion
        try{

            response.status(200).json({

            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

            })
        }
    }

    // eliminar habitacion

    eliminarHabitacion(request,response){
         
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