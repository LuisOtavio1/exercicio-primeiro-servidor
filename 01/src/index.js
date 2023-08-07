const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contadorReq = 0;

app.use('/', (req, res, prox) => {
    prox();
    contadorReq++;
});

app.get('/', (req, res) => {
    if (contadorReq < jogadores.length) {
        res.send(`É a vez de ${jogadores[contadorReq]} jogar!`);
    } else {
        contadorReq = 0;
        res.send(`É a vez de ${jogadores[contadorReq]} jogar!`);
    }
});

app.listen(3000);