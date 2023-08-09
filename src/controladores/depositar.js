const { format } = require('date-fns')
const { contas, depositos } = require('../bancodedados')

const deposito = (req, res) => {
    const { numero_conta, valor } = req.body
    let dataHora = new Date()
    const dataFormatada = format(dataHora, 'yyyy-MM-dd HH:mm:ss')
    if (!numero_conta) {
        return res.status(400).json({ mensagem: 'Número da conta obrigatório.' })
    }
    if (!valor) {
        return res.status(400).json({ mensagem: 'Valor do depósito é obrigatório.' })
    }
    if (valor < 0) {
        return res.status(400).json({ mensagem: 'Valor de deposito não pode ser negativo.' })
    }
    const depositarConta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    const novoDeposito = {
        data: dataFormatada,
        numero_conta,
        valor
    }
    depositarConta.saldo += valor
    depositos.push(novoDeposito)
    return res.json({ mensagem: 'Depósito realizado com sucesso' })
}
module.exports = {
    deposito
}