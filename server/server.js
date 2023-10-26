const express = require( 'express' );
const cors = require('cors');

const { add, search, update, get, delete: deleteById }  = require('./controllers/address')

const app = express();

const corsOptions = {
  origin: "http://localhost:3000"
}

app.use(express.json());
app.use(cors(corsOptions));

app.get('/addresses', (req, res) => {
  search(req.query.search)
    .then(results => res.send(results))
});

app.post('/addresses', (req, res) => {
  const address = req.body;
  add(address)
    .then(addedAddress => res.send(addedAddress))
    .catch(e => res.status(400).send({message: e.message}))
});

app.put('/addresses/:id', (req, res) => {
  const id = req.params.id;
  const address = req.body;

  update(id, address)
    .then(() => res.send(address))
    .catch(e => res.status(400).send({message: e.message}))
});

// GET /addresses/:id, DELETE /addresses/:id
app.get('/addresses/:id', (req, res) => {
  get(req.params.id)
    .then(address => address ? res.send(address) : res.sendStatus(404))
    .catch(e => res.status(400).send({message: e.message}))
});

app.delete('/addresses/:id', (req, res) => {
   deleteById(req.params.id)
    .then(()=>res.sendStatus(200))
    .catch(e => res.status(400).send({message: e.message})) //placeholder
});

app.listen( process.env.PORT );
