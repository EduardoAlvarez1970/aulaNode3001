import pg from 'pg'

const database = new pg.Client(BANCO_DE_DADOS)

database.connect((erro) => {
    if(erro) {
        console.log(`Erro ao conectar ao banco: ${erro}`)
   } else {
        console.log(`Banco conectado com sucesso`)
   }
})

export default database