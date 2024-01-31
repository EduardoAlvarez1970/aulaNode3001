import { Heroi } from '../models/Heroi.js'

const cadastrarHeroi = async (req, res) => {

try {
  const { nome, pontosDePoder } = req.body

if (nome && pontosDePoder) {
  const heroi = await Heroi.create({ nome, pontosDePoder })
  res.status(201).send({ message: "Heroi cadastrado", data: heroi })
} else {
  res.status(400).send({ message: "Favor informar nome e pontosDePoder" })
}

} catch (err) {
  console.log(err)
  res.status(500).send({ message: "Erro ao cadastrar Heroi" })
  }
}