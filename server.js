// express
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

// crea l'applicazione
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.json({ limit: '40mb' }));
app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }));  

app.use('/images', express.static('images'));
// la porta del server
const port = 50000;

// esempio di un possibile json
const listaOrdini = [
  {
    id: 1,
    name: 'Ordine 1',
    desc: 'short description of the Order'
  },
  {
    id: 2,
    name: 'Ordine 2',
    desc: 'short description of the Order'
  },
  {
    id: 3,
    name: 'Ordine 3',
    desc: 'short description of the Order'
  },
  {
    id: 4,
    name: 'Ordine 4',
    desc: 'short description of the Order'
  },
  {
    id: 5,
    name: 'Ordine 5',
    desc: 'short description of the Order'
  }
  
]
const listaMacchine = [
  {
    id: 1,
    name: 'Macchina 1',
    desc: 'short description of the machine',
    nOrdini: '6395'
  },
  {
    id: 2,
    name: 'Macchina 2',
    desc: 'short description of the machine',
    nOrdini: '6395'
  },
  {
    id: 3,
    name: 'Macchina 3',
    desc: 'short description of the machine',
    nOrdini: '6395'
  },
  {
    id: 4,
    name: 'Macchina 4',
    desc: 'short description of the machine',
    nOrdini: '6395'
  },
  {
    id: 5,
    name: 'Macchina 5',
    desc: 'short description of the machine',
    nOrdini: '6395'
  },
  {
    id: 6,
    name: 'Macchina 6',
    desc: 'short description of the machine',
    nOrdini: '6395'
  },
  {
    id: 7,
    name: 'Macchina 7',
    desc: 'short description of the machine',
    nOrdini: '6395'
  }
]

let order = {
    mc: 0,
    id: 0,
    ag: 1000,
    bez_ag: "DRE FRA",
    lagerplatz: "C31",
    programm: "Explorer.exe",
    status: "In Arbeit",
    progress: 20,
    total: 100,
    gefertigt: 1,
    aussschuss: 0,
    text_left: "KLEMMBOLZEN Y-LENKER",
    text_right: "DREHGESTELL",
    image: "image.jpg",
    phase: "no phase yet"
  };

app.get('/:mc/orders', (req, res) => {

  let mc = req.params.mc;

  res.json(listaOrdini); 
});


app.get('/order/:mc/:id', async  (req, res) => {

  let mc = req.params.mc;
  let id = req.params.id;

  res.json(order);
})

app.get('/machines', (req, res) => {

  res.json(listaMacchine);
})

app.put("/order/:mc/:id/update", (req, res) => {

  let mc = req.params.mc;
  let id = req.params.id;

  const data = req.body;
  let tmpTotal = order.progress + data.added;
  if((tmpTotal) > order.total) {
    res.status(200).json({
      status: 'error cannot add more than total',
    })
  }else {
    order.progress = order.progress + data.added;
    res.status(200).json({
      status: 'ok'
    })
  }
})


app.put("/order/:mc/:id/phase", (req, res) => {

  let mc = req.params.mc;
  let id = req.params.id;

  const data = req.body;

  order.phase = data.phase;

  res.status(200).json({status: 'ok'})
})


app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});