import { Request, Response } from "express";
import ProcessPaymentUseCase from "../../application/ProcessPaymentUseCase";
import Payment from "../../domain/Payment";
import crypto from 'node:crypto'

export default class ProcessPaymentController {

    constructor(readonly processPaymentUseCase: ProcessPaymentUseCase){}

    run = async (req: Request, res: Response) => {

        try{

            const id = crypto.randomUUID()
            const {payConcept} = req.body
            const payment = new Payment(id, payConcept.price ,payConcept)

            const success = await this.processPaymentUseCase.run(payment)

            success ? 
            res.status(200).json({
                message: "pago guardado correctamente"
            })
            :
            res.status(200).json({
                message: "no se pudo procesar el pago"
            })

        } catch(e){
            console.log(e)
            return res.status(500).json({
                message: 'error al intentar consumir la orden de pago'
            })
        }
    }
}