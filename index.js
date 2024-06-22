import 'dotenv/config'
import express from 'express'
import { conn } from './DB/connection.js';
import { Appinit } from './src/Appinit.js';

const app = express()
const PORT = 3000;

conn();
Appinit(app,express)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})