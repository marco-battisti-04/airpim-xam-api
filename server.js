// express
const express = require('express');

// crea l'applicazione
const app = express();

// la porta del server
const port = 50000;

// esempio di un possibile json
const listaOrdini = [
    { id: 1, titolo: 'Ordine 1' },
    { id: 2, titolo: 'Ordine 2' },
    { id: 3, titolo: 'Ordine 3' },
    { id: 4, titolo: 'Ordine 4' }
];

app.get('/ordini', (req, res) => {


  res.json(listaOrdini); 
});


app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});