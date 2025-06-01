// src/app.ts
import express from 'express'
import cors from 'cors'
import userRoute from './routes/user.routes'
import postRoutes from './routes/post.route';

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/user',userRoute);
app.use('/api/posts', postRoutes);


export default app
