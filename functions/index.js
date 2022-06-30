const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('');

//setting up API

//-----App config
const app = express();

//----middlewares
app.use(cors({origin: true}));
app.use(express.json());

//----API routes
app.get('/', (request, response) => {
    response.status(200).send('Hello world!');
})

//----listen command
// app.listen(80, function(){
//     console.log("running on port 80");
// })

exports.api = functions.https.onRequest(app)