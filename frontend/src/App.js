import React, { useState } from "react";
// import axios from "axios";
import Header from "./components/header";
import Footer from "./components/footer";
import CurrencyCard from "./components/currency-card";

function App() {
  const [currency, setCurrency] = useState("");
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
          // <p id="name-${key.toLowerCase()}">${data[key].name}</p>
          // <p id="value-${key.toLowerCase()}">${key} ${data[key].high}</p>
          // <label for="${key.toLowerCase()}"></label>
          // <input type="number" name="${key.toLowerCase()}" id="${key}" value="1" onchange="currencyConverter(this.value, this.id)">
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
          <input type="submit" value="Converter" />
        </form>
        <div>
          {currencies.map((currency, key) => {
            return (
              <CurrencyCard key={key} name={currency.name} code={currency.code} high={currency.high} />
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
