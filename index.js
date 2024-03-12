// console.log("Hello World! in production mode");

// import express from "express"; // ES6 (common JS)

require('dotenv').config()

const express = require('express') //installed the dep
const app = express()
const port = 3000 //computer has lots of port and virtual port likely 65000

     //home route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home',(req, res)=>{
    res.send('<h1>SiD_Sidduganesh</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2><a href="https://stackblitz.com/@hiteshchoudhary/collections/chai-aur-javascript">Practice JavaScript Projects by hitesh choudhary.</a></h2>')
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })