//Setup Express
import express from 'express';
const app = express();

//Serve public folder as static
app.use(express.static('public'));


import pageRouter from './routers/pagesRouter.js';

app.use(pageRouter);


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log('Server started in port ', server.address().port);
});
