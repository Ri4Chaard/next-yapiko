import React from "react";

interface Props {
    code: string;
}

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => (
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
        <p
            style={{
                fontSize: "18px",
                color: "#34495e",
                marginBottom: "15px",
            }}
        >
            Код підтвердження:
        </p>

        <h2
            style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#e74c3c",
                marginBottom: "20px",
            }}
        >
            {code}
        </h2>

        <p>
            <a
                href={`http://localhost:3000/api/auth/verify?code=${code}`}
                style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#3498db",
                    color: "#fff",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "16px",
                }}
            >
                Підтвердіть реєстрацію
            </a>
        </p>
    </div>
);
