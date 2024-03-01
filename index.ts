import express from "express";

const app = express()

app.use(express.json())

import paymentRouter from "./src/infrastructure/Payment.route";
app.use('/payment', paymentRouter)

const PORT = 4000
app.listen(PORT, () => {
    console.log('servidor escuchando en el puerto ' + PORT)
})