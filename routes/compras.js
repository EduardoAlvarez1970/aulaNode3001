import express from 'express'
import { getHerois, postHerois } from '../controllers/compras.js'

const router = express.Router()


//listagem de informação
router.get('/herois', getHerois) // getCompras vem do controller compras

//'Criação'
router.post('/herois', postHerois) // postCompras vem do controller compras




// Exportando para importar no app.js
export default router   //como lo exporto como default, puedo luego al importalo en el otro archivo, darle otro nombre cualquiera

//   Pode ser importado sem {}
//   OBS: PODERIA SER SÓ EXPORT SEM O DEFAULT, MAS TERIA QUE ADAPTAR A IMPORTAÇÃO NO APP.JS:
//   export { router } // Precisa de {} no momento de importar