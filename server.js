import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const swaggerDocument = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'swagger.json'), 'utf-8'));


app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);


app.get("/", (req, res) => {
  res.send("Fundoo Notes API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs running on http://localhost:${PORT}/api-docs`);

});

connectDB();