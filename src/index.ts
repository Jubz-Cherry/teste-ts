import express from 'express';
import routes from './routes.js';

const app = express();

app.use(routes);


app.listen(1515, () => {
    console.log('Server is running');
});
