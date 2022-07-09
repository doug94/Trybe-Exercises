const API_URL = `https://api.coincap.io/v2/assets`;
const USDBRLAPI = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json';

const fetchData = async () => {
    const response = await fetch(API_URL);
    const obj = await response.json();
    const { data } = obj;
    return data;
}

const fetchUsdToBrl = async (usd) => {
    const response = await fetch(USDBRLAPI);
    const obj = await response.json();
    const { brl } = obj;
    return brl * usd;
}

const showData = async () => {
    const result = await fetchData();
    const ul = document.querySelector('ul');
    result.filter((item) => item.rank <= 10).forEach(async ({ name, symbol, priceUsd }) => {
        const li = document.createElement('li');
        const priceBrl = await fetchUsdToBrl(priceUsd);
        li.innerHTML = `${name} (${symbol}): R$${priceBrl}`;
        ul.appendChild(li);
    })
}

window.onload = showData;