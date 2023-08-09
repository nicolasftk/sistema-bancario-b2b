const { contas } = require('../bancodedados')

const atualizarDados = (req, res) => {
    const { nome, email, cpf, data_nascimento, telefone, senha } = req.body
    const { numeroConta } = req.params
    const usuarios = contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })

    if (nome !== undefined && nome.trim().length >= 1) {
        usuarios.usuario.nome = nome
    }
    if (email !== undefined && email.trim().length >= 1) {
        usuarios.usuario.email = email
    }
    if (cpf !== undefined && cpf.trim().length >= 1) {
        usuarios.usuario.cpf = cpf
    }
    if (data_nascimento !== undefined && data_nascimento.trim().length >= 1) {
        usuarios.usuario.data_nascimento = data_nascimento
    }
    if (telefone !== undefined && telefone.trim().length >= 1) {
        usuarios.usuario.telefone = telefone
    }
    if (senha !== undefined && senha.trim().length >= 1) {
        usuarios.usuario.senha = senha
    }
    return res.status(201).json({ mensagem: 'Dados atualizados com sucesso.' })

}

module.exports = {
    atualizarDados
}