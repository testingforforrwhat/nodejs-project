// api
// exchange rate: http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1
// countries: https://restcountries.eu/rest/v2/currency/${currencyCode}


const axios = require('axios');  // 通过 require 语法引入 axios


// 1st function - getExchangeRate
const getExchangeRate = async (fromCurrency, toCurrency) => {  
    try {    
        const response = await       axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1');    
        const rate = response.data.rates;    
        const euro = 1 / rate[fromCurrency];    
        const exchangeRate = euro * rate[toCurrency];    
        
        return exchangeRate;  } 
        catch (error) {    
            throw new Error(`Unable to get currency ${fromCurrency} and  ${toCurrency}`);  
        }
    };

// 2nd function - getCountries
const getCountries = async (toCurrency) => {  
    try {    
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${toCurrency}`);
        
        return response.data.map(country => country.name);  } 
        catch (error) {    
            throw new Error(`Unable to get countries that use ${toCurrency}`);  
        }
    };

// 3rd function - convertCurrency
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const countries = await getCountries(toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(2); 

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
}

// Call convert currency to get meaningful data.
convertCurrency('USD', 'HRK', 20)  
    .then((message) => {    
        console.log(message);  
})
    .catch((error) => {    
        console.log(error.message);  
    });