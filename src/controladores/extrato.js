const { depositos, saques, transferencias } = require('../bancodedados')


const extratoBancario = (req, res) => {
    const { numero_conta } = req.query
    const transferenciasEnviadas = []
    const transferenciasRecebidas = []
    for (const transferencia of transferencias) {
        if (transferencia.numero_conta_origem === numero_conta) {
            transferenciasEnviadas.push(transferencia)
        }
        if (transferencia.numero_conta_destino === numero_conta) {
            transferenciasRecebidas.push(transferencia)
        }
    }

    return res.json({ depositos, saques, transferenciasEnviadas, transferenciasRecebidas })

}

module.exports = {
    extratoBancario
}