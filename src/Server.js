import express from 'express';
import path , { dirname } from 'path';
import { fileURLToPath } from 'url';
import authmiddleware from './middleware/authmiddleware.js';
import authrouter from './router/authroutes.js'
import todorouter from './router/todoroutes.js'

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
const __dirfile = fileURLToPath(import.meta.url);
const __dirname = dirname(__dirfile);

app.use(express.static(path.join(__dirname, '../public')));

app.use('/auth' ,authrouter);
app.use('/todos',authmiddleware,todorouter);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public' , 'index.html'))
})
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', port: process.env.PORT });
});

app.listen(PORT , ()=>{
    console.log(`THE SERVER IS RUNING IN PORT ${PORT}`);
});
