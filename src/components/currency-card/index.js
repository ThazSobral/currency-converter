import React from "react";
import "./style.css"

export default function CurrencyCard({ name, code, high, value }) {
    return (
        <>
            <div className="card">
                <h3 className="currency-name">{name}</h3>
                <p className="currency-value">{code}$ 1.00 = R$ {parseFloat(high).toFixed(2)}</p>
                <p className="currency-converted">{code}$ {(value/high).toFixed(2)}</p>
            </div>
        </>
    );
};
