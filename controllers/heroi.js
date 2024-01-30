// controllers/heroi.js
import database from '../database.js'

const listarHerois = async (req, res) => {
     try {
         const comandoSql = 'SELECT * FROM public.herois;'
         const heroisBanco = await database.query(comandoSql)
         res.status(200).send({data: heroisBanco.rows})
    } catch (err) {
         console.log(err)
         res.status(400).send({message: 'Erro ao inserir herói'})
    }
}