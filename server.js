const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
    res.send('Welcome to food rest api');
});
  
app.get('/foods', (req, res) => {
    res.send(['Acai Bowl', 'Quest Protein Bar', 'Quinoa & Brown Rice']);
});

app.listen(5689, () => console.log('Listening on port 5689'));
