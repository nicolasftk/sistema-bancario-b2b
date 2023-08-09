const { format } = require('date-fns')
const { contas, saques } = require('../bancodedados')

const sacar = (req, res) => {
    const { numero_conta, valor } = req.body
    const saqueConta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (!valor) {
        return res.status(400).json({ mensagem: 'Valor é obrigatório.' })
    }
    if (!valor || valor < 0) {
        return res.status(400).json({ mensagem: 'Valor de deposito é obrigatório e não pode ser negativo.' })
    }
    if (valor > saqueConta.saldo) {
        return res.status(400).json({ mensagem: 'O valor do saque não pode ser maior do que o saldo.' })
    }
    let dataHora = new Date()
    const dataFormatada = format(dataHora, 'yyyy-MM-dd HH:mm:ss')
    const saque = {
        data: dataFormatada,
        numero_conta,
        valor
    }
    saqueConta.saldo -= valor
    saques.push(saque)
    return res.json({ mensagem: 'Saque realizado com sucesso' })

}

module.exports = {
    sacar
}