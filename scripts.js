const button = document.getElementById('convert-money')
const select = document.getElementById('convert-currency')

const dolar = 5.2
const euro =5.9
const bitcoin = 302.618

const convertValues = () => {
    const inputReais = document.getElementById('input-value-convert').value
    const textRealValue = document.getElementById('real-text-value')
    const textCurrencyValue = document.getElementById('currency-text-value')
    
    textRealValue.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(inputReais)

    if(select.value === 'US$ Dólar americano'){
        textCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
        {
            style: 'currency',
            currency: 'USD'
        }
    ).format(inputReais / dolar)
    }

    if(select.value === '€ Euro'){
        textCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
        {
            style: 'currency',
            currency: 'EUR'
        }
    ).format(inputReais / euro)
    }

    if(select.value === 'Bitcoin'){
        textCurrencyValue.innerHTML = new Intl.NumberFormat('BTC',
        {
            currency: 'BTC'
        }
    ).format(inputReais / bitcoin)
    }

}

const changeSelectCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './ASSETS/estados-unidos (1) 1.png'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './ASSETS/Design sem nome 1.png'
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './ASSETS/img-bitcoin.png'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeSelectCurrency)