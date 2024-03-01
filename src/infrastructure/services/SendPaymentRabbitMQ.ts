import Payment from "../../domain/Payment";
import ISendPayment from "../../domain/services/ISendPayment";
import amqp from 'amqplib/callback_api'
import 'dotenv/config'

export default class sendPaymentRabbitMQ implements ISendPayment{

    async sendPayment(payment: Payment): Promise<Boolean | null> {

        try{

            const options = {
                username: process.env.USER_AMQP,
                password: process.env.PASSWORD_AMQP,
                port: 5672
            }

            const urlAMQP = process.env.URL_AMQP || ""

            amqp.connect(urlAMQP,options, (error, connection) => {
                if (error)
                throw error

                connection.createChannel((error, channel) => {
                    if(error)
                    throw error
                    
                    const queue = process.env.QUEUE_AMQP || ''
                    
                    channel.assertQueue(queue,{ 
                        durable: true
                    })

                    console.log('mandando mensaje')
                    return channel.sendToQueue(queue, Buffer.from(JSON.stringify(payment)))
                })
            })

            return true

        } catch(e: any){
            console.log(e)
            return false
        }
        
    }
}