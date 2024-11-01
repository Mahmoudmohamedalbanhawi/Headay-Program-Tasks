const baseUrl = "https://marketdata.tradermade.com/api/v1/";
const apiKey = "i4ydISb-yX--K-I-AMjV";

 function fetchCurrencies() {
    return axios.get(`${baseUrl}live_currencies_list?api_key=${apiKey}`);
}

 function fetchTimeSeries(currencyPair, startDate, endDate, selectedInterval) {
    const url = `${baseUrl}timeseries?api_key=${apiKey}&currency=${currencyPair}&format=records&start_date=${startDate}&end_date=${endDate}&interval=${selectedInterval}&period=1`;
    return axios.get(url);
}

