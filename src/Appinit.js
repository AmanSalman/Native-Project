import authRouter from './modules/auth/auth.router.js'
import userRouter from './modules/user/user.router.js'
import cors from 'cors'
export const Appinit =  (app,express)=>{
  app.use(express.json())
  const allowedOrigins = ["http://localhost:5173","http://localhost:5174", "https://admindashboard-8bwy.onrender.com"];
  app.use(cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,POST,PUT,DELETE,HEAD,PATCH',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // Set to true if you're passing cookies or authorization headers
    preflightContinue: false
    
  }));
  app.get('/', (req,res)=>{
      return res.status(200).json({message:"Welcome"})
   })
  app.use('/auth', authRouter)
  app.use('/user', userRouter)
}