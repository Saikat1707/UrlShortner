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

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
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