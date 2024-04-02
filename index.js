const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Quote = require('./models/Quote')

const app = express()
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended : true}))

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/pages'));

// To load env file
dotenv.config()

//using enviroement variable
const port = process.env.PORT || 5000;
const mongo_db_url = process.env.MONGO_DB_URL;

// Connect with MongoDB
try{
  mongoose.connect(mongo_db_url);
  mongoose.connection.on('connected', () => {
    console.log("Succesfully Connected to DB")
  })
}
catch(error)
{
  console.log("Not Connected to DB")
}

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
  res.sendFile("pages/recruitment.html", {root: __dirname})
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

//Endpoints for APIs
app.post('/saveFreeQuote', async(req, res) => {
  const { userToken } = req.body
  console.log(req.body);
  let quote = await Quote.create(req.body)
  res.status(200).json({success:true, quote: quote})
})

app.post('/getAllFreeQuotes', (req, res) => {
  const { userToken } = req.body
  res.sendFile("pages/recruitment.html", {root: __dirname})
})


app.listen(port || 5000, () => {
  console.log(`App listening on port http://localhost:${port}`)
})