import express from 'express';
import placeRoutes from './routes/placeRoutes';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { swagger } from './swagger';  

const app = express();


const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        msg: 'Too many requests, please try again later',
        code: 429,
        data: null
    }
});


app.use(express.json());
app.use(cors());
app.use(limiter);

// Add Swagger documentation route

app.use(placeRoutes);

swagger(app);
const server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running on port ${process.env.PORT || 8080}`);
});

export { server };
export default app;