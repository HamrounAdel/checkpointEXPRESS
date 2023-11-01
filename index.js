const express = require('express')
const app = express()
const port =3003
const datefunc=require('./middel/date')

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})

app.get('/service',datefunc,(req,res)=>{
    res.sendFile(__dirname+'/public/service.html')
})

app.listen(port,err=>{
    err?console.log(err):console.log("the running")})

