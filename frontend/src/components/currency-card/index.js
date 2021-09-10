import React from "react";

export default function CurrencyCard({ key, name, code, high }) {
    return (
        <>
            <div className="card" key={key}>
                <p className="currency-name">{name}</p>
                <p className="currency-code">{code}</p>
                <p className="currency-value">R$ {high}</p>
                <p className="currency-value">R$80,00</p>
            </div>
        </>
    );
};