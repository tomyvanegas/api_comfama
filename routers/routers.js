import  express  from "express"

//crear variable para personalizar las rutas (endpoints)
export let router = express.Router()

//escribo mis rutas (cada ruta es un servicios)

router.get('viajescomfama/v1/habitaciones',function (req, res) {
    res.send('Hello World')
})

router.get('viajescomfama/v1/habitacion/id',function (req, res) {
    res.send('Hello World')
})

router.post('viajescomfama/v1/reserva',function (req, res) {
    res.send('Hello World')
})

router.put('viajescomfama/v1/reserva/id',function (req, res) {
    res.send('Hello World')
})

router.delete('viajescomfama/v1/cancelacion/id',function (req, res) {
    res.send('Hello World')
})