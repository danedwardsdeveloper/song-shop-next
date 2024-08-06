import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
console.log(allowedOrigins);
export default function setupCors(app) {
    app.use(cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        optionsSuccessStatus: 200,
    }));
}
