 const currencyToFlagCode = {
    AED: "ae",
    ALL: "al",
    AMD: "am",
    AOA: "ao",
    ARS: "ar",
    AUD: "au",
    BAM: "ba",
    BDT: "bd",
    BGN: "bg",
    BHD: "bh",
    BIF: "bi",
    BRL: "br",
    BYN: "by",
    CAD: "ca",
    CHF: "ch",
    CLP: "cl",
    CNH: "cn",
    CNY: "cn",
    COP: "co",
    CZK: "cz",
    DKK: "dk",
    EGP: "eg",
    EUR: "eu",
    GBP: "gb",
    GHS: "gh",
    HKD: "hk",
    HRK: "hr",
    HUF: "hu",
    IDR: "id",
    ILS: "il",
    INR: "in",
    ISK: "is",
    JOD: "jo",
    JPY: "jp",
    KES: "ke",
    KRW: "kr",
    KWD: "kw",
    KZT: "kz",
    LBP: "lb",
    LKR: "lk",
    MAD: "ma",
    MUR: "mu",
    MXN: "mx",
    MYR: "my",
    NGN: "ng",
    NOK: "no",
    NZD: "nz",
    OMR: "om",
    PEN: "pe",
    PHP: "ph",
    PKR: "pk",
    PLN: "pl",
    QAR: "qa",
    RON: "ro",
    RUB: "ru",
    SAR: "sa",
    SEK: "se",
    SGD: "sg",
    THB: "th",
    TND: "tn",
    TRY: "tr",
    TWD: "tw",
    TZS: "tz",
    UAH: "ua",
    UGX: "ug",
    USD: "us",
    VND: "vn",
    XAF: "cm",
    XOF: "sn",
    XAG: "ag",
    XAU: "au",
    XPD: "pd",
    XPT: "pt",
    ZAR: "za",
    ZWL: "zw",
   };
 function showLoadingIndicator(loadingIndicator) {
    loadingIndicator.style.display = 'block';
}

 function hideLoadingIndicator(loadingIndicator) {
    loadingIndicator.style.display = 'none';
}

 function setFlag(flag, flagElement) {
       
       flagElement.className = "";

       const flagCode = currencyToFlagCode[flag];
   
       if (flagCode) {
    
           flagElement.classList.add("fi", `fi-${flagCode}`, "rounded-circle", "fis");
       } else {
          
           flagElement.classList.add("fi", "fi-un", "rounded-circle", "fis"); 
       }
}

 function setActiveTimeButton(selectedInterval) {
    document.querySelectorAll('#timeControls button').forEach(button => {
        button.classList.remove('active', 'btn-outline-primary');
    });
    document.querySelector(`[data-interval="${selectedInterval}"]`).classList.add('active', 'btn-outline-primary');
}

 function displayDropdownList(dropdown, currencies, defaultValue) {
    for (const [currency, country] of Object.entries(currencies)) {
        const option = document.createElement("option");
        option.value = currency;
        option.textContent = `${currency} - ${country}`;
        dropdown.appendChild(option);
    }
    if (defaultValue) {
        dropdown.value = defaultValue;
    }
}


 function calculateStartDate(interval) {
    const now = new Date();
    const londonTimeOffset = new Date(now.getTime() - 3 * 60 * 60 * 1000); 
    let startDate;

    switch (interval) {
        case '15m':
            startDate = new Date(londonTimeOffset.getTime() - 15 * 60 * 1000);
            interval = 'minute';
            break;
        case '1h':
            startDate = new Date(londonTimeOffset.getTime() - 60 * 60 * 1000);
            interval = 'minute';
            break;
        case '1D':
            startDate = new Date(londonTimeOffset.getTime() - 24 * 60 * 60 * 1000);
            interval = 'hourly';
            break;
        case '1W':
            startDate = new Date(londonTimeOffset.getTime() - 7 * 24 * 60 * 60 * 1000);
            interval = 'daily';
            break;
        case '1M':
            startDate = new Date(londonTimeOffset.setMonth(londonTimeOffset.getMonth() - 1));
            interval = 'daily';
            break;
        default:
            startDate = londonTimeOffset;
    }
    return {
        startDate: new Date(startDate.getTime() + 3 * 60 * 60 * 1000).toISOString().slice(0, 19),
        interval 
    };
}

