const axios = require('axios');
const colors = require('colors');

class cryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
    }

    async getPriceData(coinOption, curOption) {
        try {
            // Making the API call to get cryptocurrency data
            const res = await axios.get(`${this.baseUrl}`, {
                params: {
                    symbol: coinOption,
                    convert: curOption
                },
                headers: {
                    'X-CMC_PRO_API_KEY': this.apiKey
                }
            });

            // Check if `res.data` is defined before proceeding
            if (!res.data || !res.data.data) {
                throw new Error('Unexpected response format');
            }

            // Get the `data` object from the response, which contains the coin data
            const coinData = res.data.data;

            let output = '';

            // Loop through the coin data object using `for...in` or Object.keys()
            for (const coin in coinData) {
                const coinInfo = coinData[coin];
                const price = coinInfo.quote[curOption].price;
                const rank = coinInfo.cmc_rank;

                output += `Coin: ${coinInfo.symbol.yellow} (${coinInfo.name}) | Price: ${price.toFixed(2).green} | Rank: ${rank.toString().blue}\n`;
            }

            return output;

        } catch (err) {
            // If an error is returned from the API, print out the response and the error message
            console.error('Error fetching price data:', err.message.red);
            
            // Check if the error is due to an issue with the response object
            if (err.response && err.response.data) {
                console.error('API Response Error:', JSON.stringify(err.response.data).red);
            }

            return 'Failed to retrieve price data. Please try again.';
        }
    }
}

module.exports = cryptoAPI;
