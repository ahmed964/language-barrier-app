const express = require('express');
const mongoose = require('mongoose')

const app = express()
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended : true}))
const port = process.env.PORT || 5000;

// Connect with MongoDB

// try{
//   mongoose.connect('mongodb+srv://ahmedmazhar964:DCo5WQId56NeHCPi@staticappsdb.g5rd04a.mongodb.net/LB_DevData_26032024');
//   console.log("Succesfully Connected to DB")
// }
// catch(error)
// {
//   console.log("Not Connected to DB")
// }

//Endpoints for HTML
app.get('/', (req, res) => {
  res.sendFile("pages/index.html", {root: __dirname})
})
app.get('/home', (req, res) => {
  res.sendFile("pages/index.html", {root: __dirname})
})
app.get('/language', (req, res) => {
  res.sendFile("pages/language.html", {root: __dirname})
})
app.get('/feature', (req, res) => {
  res.sendFile("pages/feature.html", {root: __dirname})
})
app.get('/contact', (req, res) => {
  res.sendFile("pages/contact.html", {root: __dirname})
})
app.get('/recruitment', (req, res) => {
  res.sendFile("pages/detail.html", {root: __dirname})
})
app.get('/quote', (req, res) => {
  res.sendFile("pages/quote.html", {root: __dirname})
})
app.get('/rate', (req, res) => {
  res.sendFile("pages/rate.html", {root: __dirname})
})
app.get('/service', (req, res) => {
  res.sendFile("pages/service.html", {root: __dirname})
})
app.get('/detail', (req, res) => {
  res.sendFile("pages/detail.html", {root: __dirname})
})

//Endpoints for APIs
app.post('/saveContactDetails', (req, res) => {
  const { userToken } = req.body
  res.sendFile("pages/detail.html", {root: __dirname})
})

app.post('/saveFreeQuote', (req, res) => {
  const { userToken } = req.body
  res.sendFile("pages/detail.html", {root: __dirname})
})

app.post('/getAllContactDetails', (req, res) => {
  const { userToken } = req.body
  res.sendFile("pages/detail.html", {root: __dirname})
})

app.post('/getAllFreeQuotes', (req, res) => {
  const { userToken } = req.body
  res.sendFile("pages/detail.html", {root: __dirname})
})

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/pages'));


app.listen(port || 5000, () => {
  console.log(`App listening on port http://localhost:${port}`)
})