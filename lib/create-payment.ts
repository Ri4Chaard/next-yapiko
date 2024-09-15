import crypto from "crypto";

interface Props {
    description: string;
    orderId: number;
    amount: number;
}

export async function createPayment(details: Props) {
    const publicKey = process.env.LIQPAY_PUBLIC_API_KEY;
    const privateKey = process.env.LIQPAY_PRIVATE_API_KEY;

    const paymentData = {
        version: 3,
        public_key: publicKey,
        action: "pay",
        amount: details.amount,
        currency: "UAH",
        description: details.description,
        order_id: details.orderId,
        result_url: process.env.LIQPAY_CALLBACK_CLIENT_URL,
        server_url: process.env.LIQPAY_CALLBACK_SERVER_URL,
    };

    const data = Buffer.from(JSON.stringify(paymentData)).toString("base64");
    const signature = crypto
        .createHash("sha1")
        .update(privateKey + data + privateKey)
        .digest("base64");

    // Формируем URL для редиректа
    const paymentUrl = `https://www.liqpay.ua/api/3/checkout?data=${encodeURIComponent(
        data
    )}&signature=${encodeURIComponent(signature)}`;

    return paymentUrl;
}
