import React from "react";
import { CartItemDTO } from "@/services/dto/cart.dto";

interface Props {
    orderId: number;
    items: CartItemDTO[];
    totalAmount: number;
    userId?: number;
    userBonuses?: number;
}

export const OrderSuccessTemplate: React.FC<Props> = ({
    orderId,
    items,
    totalAmount,
    userId,
    userBonuses,
}) => {
    return (
        <div
            style={{
                maxWidth: "600px",
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
                    fontSize: "24px",
                    color: "#2c3e50",
                    marginBottom: "20px",
                }}
            >
                Дякуємо за замовлення! 🍣🥢
            </h1>

            <p
                style={{
                    fontSize: "18px",
                    color: "#34495e",
                }}
            >
                Ваше замовлення #{orderId} на сумму{" "}
                <b style={{ fontWeight: 600, color: "#e74c3c" }}>
                    {totalAmount} ₴
                </b>{" "}
                успішно сплачено. Список товарів:
            </p>

            <hr />

            <ul
                style={{
                    listStyle: "none",
                    padding: 0,
                }}
            >
                {items.map((item) => (
                    <li
                        key={item.id}
                        style={{
                            backgroundColor: "#fff",
                            margin: "10px 0",
                            padding: "15px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: "16px",
                        }}
                    >
                        <span>
                            <strong>{item.productItem.product.name}</strong> -{" "}
                            {item.productItem.description}
                            {" | "}
                        </span>
                        <span>
                            {item.productItem.price} ₴ x {item.quantity} ={" "}
                            {item.productItem.price * item.quantity} ₴
                        </span>
                    </li>
                ))}
            </ul>

            {userId && (
                <>
                    <hr />

                    <p
                        style={{
                            fontSize: "18px",
                            color: "#34495e",
                        }}
                    >
                        Вам успішно нараховано{" "}
                        <b style={{ fontWeight: 600, color: "#e74c3c" }}>
                            {Math.floor(totalAmount * 0.05)}
                        </b>{" "}
                        бонусів
                    </p>

                    {userBonuses && (
                        <>
                            <hr />
                            <p
                                style={{
                                    fontSize: "18px",
                                    color: "#34495e",
                                }}
                            >
                                Було знято{" "}
                                <b
                                    style={{
                                        fontWeight: 600,
                                        color: "#e74c3c",
                                    }}
                                >
                                    {userBonuses}
                                </b>{" "}
                                бонусів
                            </p>
                        </>
                    )}
                </>
            )}
        </div>
    );
};
