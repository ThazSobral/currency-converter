import React, { useState } from "react";
// import axios from "axios";
import Header from "./components/header";
import Footer from "./components/footer";
import CurrencyCard from "./components/currency-card";

function App() {
  const [currency, setCurrency] = useState(1);
  const [currencies, setCurrencies] = useState([]);

  function changeCurrency(event) {
    setCurrency(event.target.value);
  }

  window.onload = getCurrency;

  function getCurrency() {
    fetch("https://economia.awesomeapi.com.br/json/all")
      .then(response => response.json())
      .then(data => {
        let currencies = [];
        for (const key in data) {
          currencies.push({
            name: data[key].name,
            code: data[key].code,
            high: data[key].high
          })
        };
        setCurrencies(currencies);
      })
  }


  return (
    <div className="App">
      <Header />
      <main>
        <form>
          <label htmlFor="currency">R$</label>
          <input type="number" value={currency} onChange={changeCurrency} placeholder="Insira a sua quantia aqui" />
        </form>
        {currency}
        <div>
          {
            currencies.map((currencyData, key) => {
              return (
                <CurrencyCard
                  key={key}
                  name={currencyData.name}
                  code={currencyData.code}
                  high={currencyData.high}
                  value={currency}
                />
              );
            })
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
