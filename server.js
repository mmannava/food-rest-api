const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
    res.send('Welcome to food rest api');
});
 
app.listen(5689, () => console.log('Listening on port 5689'));
