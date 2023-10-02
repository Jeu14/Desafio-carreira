const express = require('express')
const app = express()
app.use(express.json())

const alunos = [

        {
            nome: "João",
            id: 1,
            senha: 1234,
            nota: 5
        },
        {
            nome: "Anthony",
            id: 2,
            senha: 4321,
            nota: 7
        },
        {
            nome: "Paulo",
            id: 3,
            senha: 2533,
            nota: 10
        }
]

app.get('/consultar', (req, res) => {
    const {senha, id } = req.query
    if (!senha || !id) {
        return res.json({mensagem: "Senha ou id não inserido. Por favor, preencha todos os requisítos"})
    }
    const identificarAluno = alunos.find(aluno => aluno.id === Number(id))
    if (!identificarAluno || identificarAluno.id > alunos.length) {
        return res.json({mensagem: "Aluno não identificado"})
    }
    if (identificarAluno.senha !== Number(senha)) {
        return res.json({mensagem: "Senha incorreta"})
    }
    const aluno = identificarAluno.nota
    return res.json("Nota: " +aluno)
})

app.listen(3000, () => {
    console.log('iniciando servidor');
})