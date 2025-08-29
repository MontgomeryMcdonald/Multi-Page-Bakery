const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, "public")))

// middleware to serve static files (above)

// middleware is a function that sits between the request from the client and the response from the server - think of it as a gatekeeper or pipeline every request and response goes through

console.log(__dirname)

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/contact.html',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})
app.get('/locations.html',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'location.html'))
})
app.get('/menu.html',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'menu.html'))
})
app.get('/menu.json',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'menu.json'))
})
app.get((req, res)=>{
    res.sendFile(path.join(__dirname, 'public', '404.html'))
})

app.listen(5000, ()=>{console.log('server is running on https://localhost:5000')})
