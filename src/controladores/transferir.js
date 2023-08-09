const { format } = require('date-fns')
const { contas, transferencias } = require('../bancodedados')

const transferencia = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, } = req.body

    let dataHora = new Date()

    const dataFormatada = format(dataHora, 'yyyy-MM-dd HH:mm:ss')

    const localizarOrigem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem)
    })

    const localizarDestino = contas.find((conta) => {
        return conta.numero === Number(numero_conta_destino)
    })
    if (!valor) {
        return res.status(400).json({ mensagem: 'Valor é obrigatório.' })
    }
    if (valor < 0) {
        return res.status(400).json({ mensagem: 'Valor de transferência é obrigatório e não pode ser negativo.' })
    }
    if (valor > localizarOrigem.saldo) {
        return res.status(400).json({ mensagem: 'O valor da transferência não pode ser maior do que o saldo.' })
    }
    if (numero_conta_origem === numero_conta_destino) {
        return res.status(400).json({ mensagem: 'Não é possível realizar transferências para conta destino igual a origem.' })


    }
    const transacao = {
        data: dataFormatada,
        numero_conta_origem,
        numero_conta_destino,
        valor

    }
    localizarOrigem.saldo -= valor
    transferencias.push(transacao)
    localizarDestino.saldo += valor
    return res.json({ mensagem: 'Transferência realizada com sucesso.' })
}

module.exports = {
    transferencia
}