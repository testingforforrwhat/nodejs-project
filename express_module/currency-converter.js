// api
// exchange rate: http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1
// countries: https://restcountries.eu/rest/v2/currency/${currencyCode}


const axios = require('axios');  // 通过 require 语法引入 axios


// 1st function - getExchangeRate
const getExchangeRate = async (fromCurrency, toCurrency) => {  
    const response = await axios.get('http://data.fixer.io/api/latest?    access_key=[yourAccessKey]&format=1');
    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];

    return exchangeRate;
}

// 2nd function - getCountries
const getCountries = async (currencyCode) => {
const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

return response.data.map(country => country.name);
}

// 3rd function - convertCurrency

// Call convert currency to get meaningful data.