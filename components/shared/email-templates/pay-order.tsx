import React from "react";

interface Props {
    orderId: number;
    totalAmount: number;
    paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({
    orderId,
    totalAmount,
    paymentUrl,
}) => (
    <div
        style={{
            maxWidth: "500px",
            margin: "0 auto",
            padding: "20px",
            border: "2px solid #eaeaea",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
        }}
    >
        <h1
            style={{
                fontSize: "22px",
                color: "#2c3e50",
                marginBottom: "15px",
            }}
        >
            Замовлення номер #{orderId}
        </h1>

        <p
            style={{
                fontSize: "18px",
                color: "#34495e",
            }}
        >
            Сплатіть замовлення на суму{" "}
            <b style={{ fontWeight: 600, color: "#e74c3c" }}>{totalAmount} ₴</b>
            . Перейдіть{" "}
            <a
                href={paymentUrl}
                style={{
                    color: "#3498db",
                    textDecoration: "none",
                    fontWeight: "bold",
                }}
            >
                за цим посиланням
            </a>{" "}
            для оплати замовлення.
        </p>
    </div>
);
