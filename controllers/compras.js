// aqui solo creamos las funciones que van a usar las rutas


// ejemplo padrao >>>  const compras = [{ id: 1, descricao: 'PS5', preco: 4000 }]
// vamos a usar:

const compras = [
  {
    produto: 'coxinha',
    preco: 5
  },
  {
    produto: 'coca',
    preco: 10
  },
  {
    produto: 'bala',
    preco: 8
  }
]

const getCompras = (req, res) => {
  // Lógica necessária
     res.status(200).send({ dados: compras })
 }


const postCompras = (req, res) => {
  // Lógica necessária
    res.status(201).send({ mensagem: "Produto adicionado com sucesso"})
 }


// Exportando para importar nas rotas
export { getCompras, postCompras, putCompras, deleteCompras }