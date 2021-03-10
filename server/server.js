const express = require('express');
const apiRouter = require('./routes')

let app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRouter)


const port = 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
