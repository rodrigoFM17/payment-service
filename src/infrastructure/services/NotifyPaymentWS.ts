import Payment from "../../domain/Payment";
import INotifyPayment from "../../domain/services/INotifyPayment";
import  WebSocket from 'ws'
import 'dotenv/config'

export default class NotifyPaymentWS implements INotifyPayment {

    async notifyPayment(payment: Payment): Promise<Boolean | null> {

        try{
            
            console.log(process.env.WS_URL)
            const ws = new WebSocket(process.env.WS_URL || "")
    
            ws.addEventListener('open', () => {
                
                ws.send(JSON.stringify(payment))
                ws.close()

                console.log('cerrando')
                return true
                
            })

            return true

        } catch(e: any){
            console.log(e)
            return false
        }


        
    }
    
}