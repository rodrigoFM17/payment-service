
import express from 'express'

const paymentRouter = express.Router()

import { processPaymentController } from './dependencies'

paymentRouter.post('/', processPaymentController.run.bind(processPaymentController))

export default paymentRouter