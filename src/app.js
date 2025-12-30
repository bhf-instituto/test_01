import express from 'express';
import userRouter from './routes/user.route.js'

const app = express();

// esto parsea las request
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Soy la respuesta 01")
})

app.use('/user', userRouter)

export default app;
