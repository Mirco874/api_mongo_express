import tasksRouter from './routes/tasks'
import  './database'
import cors from 'cors'
import {CorsOptions} from 'cors'
import { corsOptions } from './config/corsOptions'

const express=require('express')
const app=express()

app.use(cors(corsOptions))//se puede pedir de cualquier origen
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/tasks',tasksRouter)

app.set("port",process.env.PORT || 3000)
app.listen(app.get('port'))






