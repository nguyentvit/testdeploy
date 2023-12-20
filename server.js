const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;



app.get('/api', (req, res) => {
    res.send({
        people:" asdasd"
    })
})

app.get('/.well-known/pki-validation/', (req, res) => {
    res.sendFile(path.join(__dirname, 'BA5506CE7CAA3179262CEDC197D50FA8.txt'))
})

app.listen(port, () => console.log("helo kitty"))