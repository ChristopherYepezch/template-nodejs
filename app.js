const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.redirect('/');
})

app.get('/myhome',(req,res) => {
    res.status(200).send({message:"Funcionando"});
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
