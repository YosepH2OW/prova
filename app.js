const express = require('express');
const request = require('request');
const cors = require('cors'); // Importa il modulo cors
const app = express();
const port = 3000;

// Abilita il middleware cors
app.use(cors());

app.get('/getGoldData', (req, res) => {
    const apiUrl = 'https://data.nasdaq.com/api/v3/datasets/LBMA/GOLD/data.json?api_key=3R9UkR8hwjrCUJ6qsPXe';

    request(apiUrl, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            res.setHeader('Content-Type', 'application/json');
            res.send(body);
        } else {
            res.status(500).send('Errore durante la richiesta dei dati');
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
