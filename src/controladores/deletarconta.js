const { contas } = require('../bancodedados')


const excluirConta = (req, res) => {
    const { numeroConta } = req.params
    const pegarConta = contas.findIndex((conta) => conta.numero === Number(numeroConta))
    const percorrerConta = contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })
    if (pegarConta === -1) {
        return res.status(404).json({ mensagem: 'Conta não existe.' })
    }
    if (percorrerConta.saldo > 0) {
        return res.status(400).json({ mensagem: 'Necessário zerar o saldo da conta para exclusão.' })

    }
    contas.splice(pegarConta, 1)
    return res.status(200).json({ mensagem: 'Conta excluída com sucesso' })
}

module.exports = {
    excluirConta
}