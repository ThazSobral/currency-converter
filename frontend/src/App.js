function App() {
  return (
    <div className="App">
      <header>
        <h1>Currenty Converter</h1>
        <p>Esta página te ajuda a converter seu dinheiro para as moedas com maior evidência no mercado atual. E tudo isso de forma simplificada.</p>
      </header>
      <main>
        <form>
          <label htmlFor="currency">R$</label>
          <input type="number" placeholder="Insira a sua quantia aqui" />
        </form>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
