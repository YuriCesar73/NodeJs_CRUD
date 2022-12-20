const express = require('express');//Importa o express

const server = express();//Variável server que chama a função express

server.use(express.json());//Faz com que o express entenda JSON

const cursos = ['C','Java','Javascript'];


//Retornar um curso
server.get('/cursos/:index',(req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});


//Retornar todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//Criar um novo curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});


//Atualizar um curso
server.put('/cursos/:index', (req,res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

//Excluir um curso
server.delete('/cursos/:index', (req,res) =>{
    const { index } = req.params;

    cursos.splice(index, 1);

    return res.json({ message: "O curso foi deletado" });
});



//Faz com que o servidor seja executado pela porta 3000 do seu localhost:3000
server.listen(3000);