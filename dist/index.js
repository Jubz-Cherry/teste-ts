import express from 'express';
import routes from './routes.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(routes);
app.listen(1515, () => {
    console.log('Server is running');
});
//# sourceMappingURL=index.js.map