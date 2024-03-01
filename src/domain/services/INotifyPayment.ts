import Payment from "../Payment";


export default interface INotifyPayment{

    notifyPayment(payment: Payment): Promise<Boolean | null>
}