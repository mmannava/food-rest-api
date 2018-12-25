const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
    res.send('Welcome to food rest api');
});
  
app.use(express.json());

const foods = [{
        id: 1,
        name: 'Acai Bowl'
    },
    {
        id: 2,
        name: 'Quest Protein Bar'
    },
    {
        id: 3,
        name: 'Quinoa & Brown Rice'
    }
];

app.get('/foods', (req, res) => {
    res.send(foods);
});

// get food by id
app.get('/foods/:id', (req, res) => {
    const food = foods.find(g => g.id === parseInt(req.params.id));
    if (!food) return res.status(404).send('The food with the given ID was not found.');
    res.send(food);
});

// add food
app.post('/foods', (req, res) => {
    const food = {
        id: foods.length + 1,
        name: req.body.name
    }
    foods.push(food);
    res.send(food);
});

// update a food
app.put('/foods/:id', (req, res) => {
    const food = foods.find(g => g.id === parseInt(req.params.id));
    if (!food) return res.status(404).send('The food with the given ID was not found.');
  
    food.name = req.body.name;
    res.send(food);
});

// delete a food
app.delete('/foods/:id', (req, res) => {
    const food = foods.find(g => g.id === parseInt(req.params.id));
    if (!food) return res.status(404).send('The food with the given ID was not found.');
 
    const index = foods.indexOf(food);
    foods.splice(index, 1);
 
    res.send(food);
});

const port = process.env.PORT || 5689;
app.listen(port, () => console.log(`Listening on port ${port}...`));