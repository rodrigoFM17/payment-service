import Payment from "../domain/Payment";
import INotifyPayment from "../domain/services/INotifyPayment";
import ISendPayment from "../domain/services/ISendPayment";


export default class ProcessPaymentUseCase  {

    constructor(readonly sendPaymentService: ISendPayment, readonly notifyPaymentService: INotifyPayment){}

    run = async (payment: Payment) => {

        try{
            
            const successSendPayment = await this.sendPaymentService.sendPayment(payment)
            const successNotifyPayment = await this.notifyPaymentService.notifyPayment(payment)

            await console.log(successNotifyPayment,successSendPayment)
            return successNotifyPayment && successSendPayment


        } catch(e: any){
            console.log(e)
            return null
        }

    }
}