import pg from 'pg'

const database = new pg.Client('COLAR O LINK DE CONEXÃO DO ELEPHANT')

database.connect((erro) => {
    if(erro) {
        console.log(`Erro ao conectar ao banco: ${erro}`)
   } else {
        console.log(`Banco conectado com sucesso`)
   }
})

export default database