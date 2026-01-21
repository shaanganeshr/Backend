import express from 'express';

const app = express(); // Create an instance of an Express application

app.use(express.json()); // Middleware to parse JSON request bodies

import userRouter from './routes/user.routes.js';

//example route: http://localhost:4000/api/v1/users/register

app.use("/api/v1/users", userRouter);

export default app; 
