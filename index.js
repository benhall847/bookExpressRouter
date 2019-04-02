const express = require('express');
const port = 1337;
const app = express();
const booksRoute = require('./routes/books')

app.use('/books', booksRoute);


app.listen(port,()=>{
    console.log(`listening on port: ${port}`)
})


