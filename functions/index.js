const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('')

//setting up API

//---------App config-------------
const app = express();

//Middlewares
app.use(cors({origin : true}));
app.use(express.json());

//API Routes
app.get('/', (request, response) => 
    response.status(200)
    .send('Hello world!')
)

//Listen command
exports.api = functions.https.onRequest(app);