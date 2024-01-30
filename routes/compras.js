import express from 'express'
import { getCompras, postCompras } from '../controllers/compras.js'

const router = express.Router()

router.get('/compras', getCompras) // getCompras vem do controller compras
router.post('/compras', postCompras) // postCompras vem do controller compras

// Exportando para importar no app.js
export default router   //como lo exporto como default, puedo luego al importalo en el otro archivo, darle otro nombre cualquiera

//   Pode ser importado sem {}
//   OBS: PODERIA SER SÓ EXPORT SEM O DEFAULT, MAS TERIA QUE ADAPTAR A IMPORTAÇÃO NO APP.JS:
//   export { router } // Precisa de {} no momento de importar