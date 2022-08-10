import {Servidor} from './servidor/servidor.js'

import 'dotenv/config' 

//PARA UTILIZAR UNA CLASE SE DEBE INSTANCIAR
//PARA USAR UNA CLASE DEBO CREAR UN OBJETO (ES UNA VARIABLE)
//PARA USAR UNA CLASE LE DEBO SACAR COPIA

let servidor_Comfama = new Servidor()

//ENCIENDO EL SERVIDOR
servidor_Comfama.correrServidor()
