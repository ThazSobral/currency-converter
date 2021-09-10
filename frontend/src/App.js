import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import CurrencyCard from "./components/currency-card";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <form>
          <label htmlFor="currency">R$</label>
          <input type="number" placeholder="Insira a sua quantia aqui" />
        </form>
        <CurrencyCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
