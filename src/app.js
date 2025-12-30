import express from 'express';
import userRouter from './routes/user.route.js'
import dbConnection from './config/connectionMySQL.js'

const app = express();

// esto parsea las request
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Soy la respuesta 01")
})

app.get("/health/db", async (req, res) => {
  try {
    const [rows] = await dbConnection.query("SELECT 1");
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use('/user', userRouter)

export default app;
