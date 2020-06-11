import express  from 'express';
import cors from 'cors';
import path  from 'path';
import routes from './routes';

const app = express();

app.use(cors());//colocar o domonio do site.
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')))


app.listen(3333)


//npm install cors
//npm install @types/cors -D