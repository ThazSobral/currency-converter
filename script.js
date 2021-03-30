var currencies
const board = document.getElementById("currencies")

function main() {
    fetch("https://economia.awesomeapi.com.br/json/all")
    .then(response => response.json())
    .then(data => {
        currencies = data
        for (const key in currencies) {
            console.log(key)
            let div = document.createElement("div")
            div.innerHTML = `
                <p id="name-${key.toLowerCase()}">${data[key].name}</p>
                <p id="value-${key.toLowerCase()}">${key} ${data[key].high}</p>
                <label for="${key.toLowerCase()}"></label>
                <input type="number" name="${key.toLowerCase()}" id="${key}" value="1" onchange="currencyConverter(this.value, this.id)">
            `
            board.appendChild(div)
        }
    })
}

function currencyConverter(value, key) {
    let currencyConverted = value * currencies[key].high
    document.getElementById(`value-${key.toLowerCase()}`).innerHTML = currencyConverted.toFixed(4)
}

main()
