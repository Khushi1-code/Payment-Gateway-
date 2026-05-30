const express = require("express");

require("dotenv").config();

const Razorpay = require("razorpay");

const app = express();

const razorpay = new Razorpay({

    key_id: process.env.KEY_ID,

    key_secret: process.env.KEY_SECRET

});

app.use(express.json());

app.use(express.static("public"));

app.post("/create-payment", async (req, res) => {

    const options = {

        amount: 50000,

        currency: "INR"

    };

    const order = await razorpay.orders.create(options);

    res.json(order);

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});