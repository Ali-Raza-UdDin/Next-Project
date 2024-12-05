import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true   }
))

app.use(express.json({
    limit: '16kb',
}))



app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))

app.use(cookieParser())

export {app}



//cookieParser basically ish liya use hota hai ka jab ap CRUD operation perform ker paye

//files and folder save kerna hai

//cookier parser ka kam ya hai ka ush ki cookie ma set bi ker pao aur brower perh set bi ker pao server hi read ker sakta hai 

// request.params url sa jab bi koi data ata hai url sa data jab bi ata hai wo params sa hi ata hai ? => query params

//request ma kab kab data a raha mera pass

//response ma muja kiya kiya bajna hai

// req.body => form data => json data => raw data

//cookies => req.cookies server ka brower sa cookies li jati hai aur aur parse ki jati client ka brower perh

//cookie parser => req.cookies => client ka brower perh cookies li jati hai 

//cors cors origin resource sharing  setting kerni deta hai

//middleware bi use kerta hai app.use() jab bi koi setting wegira kerni hai

// bi apna ap ma aik brower ka data kaise share karna chahie => cross origin resource sharing

//url sa jab bi data ata hai hitest %20 special character (url encoded data)



