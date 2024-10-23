import "./utils/mongodb.mjs"
import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import routes from "./routes/index.mjs"

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(json());
app.use(cookieParser());

app.use('/api/v1', routes);

const PORT = process.env.PORT || 5002

app.listen(PORT, () => console.log(`server running on port : ${PORT}`))

export default app;
