# Sistema Bancário B2B - README

Este é um projeto de sistema bancário desenvolvido como parte de um projeto do curso de Desenvolvimento de Software Back-End da Cubos Academy. O sistema permite a criação de contas, exclusão de contas, realização de depósitos, saques e transferências entre contas.

## Funcionalidades

O sistema bancário possui as seguintes funcionalidades:

### Criação de Contas:

Os usuários podem criar novas contas fornecendo os seguintes dados:
- Nome
- CPF
- Data de nascimento
- Telefone
- Email
- Senha

### Exclusão de Conta:

Os usuários podem excluir suas contas, informando o número da conta a ser excluída.

### Depósitos:

Os usuários podem realizar depósitos em suas contas, informando o número da conta e o valor a ser depositado.

### Saques:

Os usuários podem realizar saques em suas contas, informando o número da conta e o valor a ser sacado.

### Transferências:

Os usuários podem realizar transferências entre suas contas e contas de terceiros, informando o número da conta de origem, o número da conta de destino e o valor a ser transferido.

### Extrato Bancário:

Os usuários podem visualizar o extrato bancário de suas contas, contendo a lista de depósitos, saques e transferências realizadas.

## Endpoints

O sistema possui os seguintes endpoints para interação:

- `POST /contas`: Cria uma nova conta.
- `DELETE /contas/:numeroConta`: Exclui uma conta específica.
- `GET /contas`: Retorna a lista de todas as contas cadastradas.
- `GET /contas/:numeroConta`: Retorna os detalhes da conta com o número especificado.
- `POST /transacoes/depositar`: Realiza um depósito em uma conta específica.
- `POST /transacoes/sacar`: Realiza um saque em uma conta específica.
- `POST /transacoes/transferir`: Realiza uma transferência entre contas.
- `GET /contas/extrato`: Retorna o extrato bancário de uma conta específica.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express.js
- JavaScript
- Date-fns (para formatação de datas)
- Insomnia (para testar as rotas)

## Instruções de Uso

1. Faça o clone deste repositório em sua máquina local.
2. Certifique-se de ter o Node.js instalado em sua máquina.
3. Abra o terminal na pasta raiz do projeto e execute o comando `npm install` para instalar as dependências.
4. Inicie o servidor com o comando `npm run dev`.
5. Utilize o Insomnia ou outra ferramenta similar para testar as rotas do sistema bancário.

## Desenvolvedor

Este projeto foi desenvolvido por Nicholas Fortunato omo parte de um projeto do curso de Desenvolvimento de Software Back-End da Cubos Academy.

## Licença

Este projeto está licenciado sob a MIT License.
