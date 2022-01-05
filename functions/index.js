const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");

const stripe = require("stripe")('sk_test_51KD8WMSJJcX8xZaF8P2iYTTbHf0X0XBUTd6wdx6vGj49BRhbJtnIJA5H3OD4FE8H0WLXwFH2gocyxqoHZlrNUgY400zIO6rmSO')

// App COnfig
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// API Routes

app.get('/', (req,res) => res.status(200).send('hello world'));
app.post('/payments/create', async (req,res) => {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
// Listen command
exports.api = functions.https.onRequest(app);

// API : http://localhost:5001/clone-f98ee/us-central1/api