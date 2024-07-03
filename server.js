import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectToDb from './src/utils/connectToDb.js';
import 'dotenv/config';
import logger from 'morgan';
// import contactsRouter from "./routes/api/contacts.js";
import authRouter from './src/router/api/auth.js';
import { STATUS_CODES } from './src/utils/constants.js';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(cors());
app.use(json());

connectToDb(); // Conectarea la MongoDB

// Folosim router-ul pentru autentificare și înregistrare
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use('/api/contacts', contactsRouter);
app.use('/api/users', authRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(STATUS_CODES.error).json({ message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
