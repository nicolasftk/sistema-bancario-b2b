const { contas } = require('../bancodedados')
const { format, parse } = require('date-fns')

const criarConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' })

    }
    let numeroInicial = 0
    for (const conta of contas) {
        if (conta.numero > numeroInicial) {
            numeroInicial = conta.numero
        }
    }
    const dataHifen = data_nascimento.replace(/\-/g, '/')
    const dataFormatada = format(parse(dataHifen, 'dd/MM/yyyy', new Date()), 'yyyy-MM-dd')
    const novaConta = {
        numero: numeroInicial + 1,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento: dataFormatada,
            telefone,
            email,
            senha

        }
    }
    contas.push(novaConta)
    return res.status(201).json(novaConta)

}
module.exports = {
    criarConta
}