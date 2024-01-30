// Importação de pacotes e arquivos
import express from 'express'
import comprasRouter from './routes/compras.js' //podes usar el nombre somprasRouter pues se ha exportado en el otro archivo como Default

// Inicializando o pacote express
const app = express()

// Configurando o reconhecimento de JSON
app.use(express.json())

// Utilizando o arquivo de rotas importado na linha 3
app.use(comprasRouter)

// Iniciando o servidor na porta 3000
app.listen(3000, () => console.log('Servidor iniciado'))