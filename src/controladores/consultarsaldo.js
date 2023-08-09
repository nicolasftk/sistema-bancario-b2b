const { contas } = require('../bancodedados')

const consultarSaldo = (req, res) => {
    const { numero_conta } = req.query
    const mostrarSaldo = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })
    return res.json({ saldo: mostrarSaldo.saldo })
}

module.exports = {
    consultarSaldo
}