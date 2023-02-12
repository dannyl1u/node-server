const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json())

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
) 

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'w',
        size: 'large'
    })
})

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ messge: 'We need a logo!' })
    }

    res.send({
        tshirt: `shirt with your ${logo} and id of ${id}`
    })
})