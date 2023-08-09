const { contas } = require('./bancodedados')

const validarCPF = (req, res, next) => {
    const { cpf } = req.body
    if (contas.some((conta) => conta.usuario.cpf === cpf)) {
        return res.status(400).json({ mensagem: 'CPF já cadastrado.' })
    }
    next()
}
const validarEmail = (req, res, next) => {
    const { email } = req.body
    if (contas.some((conta) => conta.usuario.email === email)) {
        return res.status(400).json({ mensagem: 'Email já cadastrado.' })
    }
    next()
}
const verificarPropriedade = (req, res, next) => {
    let objetos = false

    for (const obj in req.body) {
        objetos = true
        break
    }
    if (!objetos) {
        return res.status(400).json({ mensagem: 'É preciso informar pelo menos uma propriedade na requisição.' })
    }
    next()
}
const localizarNumeroConta = (req, res, next) => {
    const { numeroConta } = req.params
    const localizarUsuario = contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })
    if (isNaN(numeroConta)) {
        return res.status(400).json({ mensagem: 'Para localizar a conta precisa ser informado um número válido.' })
    }
    if (!localizarUsuario) {
        return res.status(404).json({ mensagem: 'Conta não existe.' })
    }
    next()
}
const localizarNumero_conta = (req, res, next) => {
    const { numero_conta } = req.body
    const localizarNaConta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (isNaN(Number(numero_conta))) {
        return res.status(400).json({ mensagem: 'Conta inválida, o número da conta não pode conter letras, apenas números.' })
    }
    if (!localizarNaConta) {
        return res.status(404).json({ mensagem: 'Conta para depósito não existe.' })
    }
    next()
}
const localizarNumeroOrigem = (req, res, next) => {
    const { numero_conta_origem } = req.body
    const localizarOrigem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem)
    })
    if (isNaN(numero_conta_origem)) {
        return res.status(400).json({ mensagem: 'Para localizar a conta precisa ser informado um número válido.' })
    }
    if (!localizarOrigem) {
        return res.status(404).json({ mensagem: 'Conta não existe.' })
    }
    next()
}
const localizarNumeroDestino = (req, res, next) => {
    const { numero_conta_destino } = req.body
    const localizarDestino = contas.find((conta) => {
        return conta.numero === Number(numero_conta_destino)
    })
    if (isNaN(numero_conta_destino)) {
        return res.status(400).json({ mensagem: 'Conta inválida, o número da conta não pode conter letras, apenas números.' })
    }
    if (!localizarDestino) {
        return res.status(404).json({ mensagem: 'Conta não existe.' })
    }
    next()
}

module.exports = {
    validarCPF,
    validarEmail,
    verificarPropriedade,
    localizarNumeroConta,
    localizarNumero_conta,
    localizarNumeroOrigem,
    localizarNumeroDestino
}