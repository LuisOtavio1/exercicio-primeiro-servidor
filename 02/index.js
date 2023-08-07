const express = require('express');
const app = express();
let segundos = 0;
let minutos = 0;
let tempoCorrendo = false;
let intervalo = null;
let cronometroLigado = false;


app.get('/', (req, res) => {
    res.send(`${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`);
})

app.get('/iniciar', (req, res) => {
    cronometroLigado = true;
    iniciarOuContinuar();
    res.send('Cronômetro iniciado!');
}) 


app.get('/parar', (req, res) => {
    if (tempoCorrendo) {
        clearInterval(intervalo);
        tempoCorrendo = false;
        res.send(`Cronômetro pausado!`);
    }
})

app.get('/continuar', (req, res) => {

    if (cronometroLigado) {
        iniciarOuContinuar();
        res.send('Cronômetro continuando!');
    } else {
        res.send('Ligue o cronometro primeiro');
    }
})

app.get('/zerar', (req, res) => {
    minutos = 0;
    segundos = 0;
    res.send('Cronômetro zerado!');
});

function iniciarOuContinuar() {
    if (!tempoCorrendo) {
        tempoCorrendo = true;
        intervalo = setInterval(() => {
            segundos++;
        
            if (segundos === 60) {
                segundos = 0;
                minutos++;
            }
        
        }, 1000);
}
}

app.listen(8000);