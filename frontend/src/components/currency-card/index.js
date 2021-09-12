import React from "react";

export default function CurrencyCard({ name, code, high, value }) {
    return (
        <>
            <div className="card">
                <p className="currency-name">{name}</p>
                <p className="currency-code">{code}</p>
                <p className="currency-value">R$ {high}</p>
                <p className="currency-converted">R$ {(value*high).toFixed(2)}</p>
            </div>
        </>
    );
};