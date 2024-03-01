import ProcessPaymentUseCase from "../application/ProcessPaymentUseCase";
import ProcessPaymentController from "./controller/ProcessPaymentController";
import NotifyPaymentWS from "./services/NotifyPaymentWS";
import SendPaymentRabbitMQ from "./services/SendPaymentRabbitMQ";

const sendPaymentRabbitMQ = new SendPaymentRabbitMQ
const notifyPaymentWS = new NotifyPaymentWS

const processPaymentUseCase = new ProcessPaymentUseCase(sendPaymentRabbitMQ, notifyPaymentWS)
export const processPaymentController = new ProcessPaymentController(processPaymentUseCase)
