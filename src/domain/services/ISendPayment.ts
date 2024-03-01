import Payment from "../Payment";

export default interface ISendPayment {
    sendPayment(payment: Payment): Promise<Boolean | null>
}