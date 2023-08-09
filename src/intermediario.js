const { banco, contas } = require('./bancodedados')

const autenticarSenhaBanco = (req, res, next) => {
    const { senha_banco } = req.query

    if (!senha_banco) {
        return res.status(401).json({ mensagem: 'A senha não foi informada.' })
    }
    if (senha_banco !== banco.senha) {
        return res.status(401).json({ mensagem: 'Senha incorreta.' })
    }

    next()
}
const autenticarSenhaUsuario = (req, res, next) => {
    const { numero_conta, senha } = req.body
    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })
    if (!numero_conta) {
        return res.status(400).json({ mensagem: 'O número da conta é obrigatório.' })
    }
    if (!conta) {
        return res.status(404).json({ mensagem: 'O número da conta não existe.' })
    }
    if (!senha) {
        return res.status(401).json({ mensagem: 'A senha não foi informada.' })
    }
    if (senha !== conta.usuario.senha) {
        return res.status(401).json({ mensagem: 'Senha incorreta.' })
    }

    next()
}
const autenticarOrigem = (req, res, next) => {
    const { numero_conta_origem, senha } = req.body
    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem)
    })
    if (!numero_conta_origem) {
        return res.status(400).json({ mensagem: 'O número da conta é obrigatório.' })
    }
    if (!conta) {
        return res.status(404).json({ mensagem: 'O número da conta não existe.' })
    }
    if (!senha) {
        return res.status(401).json({ mensagem: 'A senha não foi informada.' })
    }
    if (senha !== conta.usuario.senha) {
        return res.status(401).json({ mensagem: 'Senha incorreta.' })
    }

    next()
}
const autenticadorSaldoExtrato = (req, res, next) => {
    const { numero_conta, senha } = req.query
    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })
    if (!numero_conta) {
        return res.status(400).json({ mensagem: 'O número da conta é obrigatório.' })
    }
    if (!conta) {
        return res.status(404).json({ mensagem: 'O número da conta não existe.' })
    }
    if (!senha) {
        return res.status(401).json({ mensagem: 'A senha não foi informada.' })
    }
    if (senha !== conta.usuario.senha) {
        return res.status(401).json({ mensagem: 'Senha incorreta.' })
    }

    next()
}

module.exports = {
    autenticarSenhaBanco,
    autenticarSenhaUsuario,
    autenticarOrigem,
    autenticadorSaldoExtrato
}