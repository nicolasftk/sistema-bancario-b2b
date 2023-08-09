const { contas } = require('../bancodedados')

const listarContas = (req, res) => {
    let soma = 0
    for (let i = 0; i < contas.length; i++) {
        soma++
    }
    const textoResposta = soma === 1 ? soma + ' conta encontrada' : soma + ' contas encontradas'
    if (soma === 0) {
        return res.json({ mensagem: 'nenhuma conta encontrada' })

    }
    return res.json({ mensagem: textoResposta, contas })

}


module.exports = {
    listarContas,

}