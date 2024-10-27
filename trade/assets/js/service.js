

export function fetchCurrencies() {
    return axios.get('https://marketdata.tradermade.com/api/v1/live_currencies_list?api_key=i4ydISb-yX--K-I-AMjV');
}

export function fetchTimeSeries(currencyPair, startDate, endDate, selectedInterval) {
    const url = `https://marketdata.tradermade.com/api/v1/timeseries?api_key=i4ydISb-yX--K-I-AMjV&currency=${currencyPair}&format=records&start_date=${startDate}&end_date=${endDate}&interval=${selectedInterval}&period=1`;
    return axios.get(url);
}

