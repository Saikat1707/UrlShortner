import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import urlRoutes from '../Backend/src/routes/url.routes.js'
import userRoutes from '../Backend/src/routes/user.routes.js'
import connectDB from '../Backend/src/services/DBconfig.js'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import {attachUser} from '../Backend/src/utils/attachUser.js'

const app = express();
await connectDB();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const allowedOrigins = [
  'https://url-shortner-mocha-tau.vercel.app',
  'http://localhost:5173',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(cookieParser())
app.use(morgan('dev'));


app.use("/api",urlRoutes)
app.use("/",urlRoutes)

app.use("/api/auth",userRoutes)

const port = process.env.PORT;
app.listen(port,(req,res)=>{
    console.log(`Server is running on http://localhost:${port}/`);
})