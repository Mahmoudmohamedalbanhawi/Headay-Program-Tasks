
export function showLoadingIndicator(loadingIndicator) {
    loadingIndicator.style.display = 'block';
}

export function hideLoadingIndicator(loadingIndicator) {
    loadingIndicator.style.display = 'none';
}

export function setFlag(flag, flagElement) {
    flagElement.className = "";
    flagElement.classList.add("flag-icon", "flag-icon-squared", `flag-icon-${flag}`);
}

export function setActiveTimeButton(selectedInterval) {
    document.querySelectorAll('#timeControls button').forEach(button => {
        button.classList.remove('active', 'btn-outline-primary');
    });
    document.querySelector(`[data-interval="${selectedInterval}"]`).classList.add('active', 'btn-outline-primary');
}

export function displayDropdownList(dropdown, currencies, defaultValue) {
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


export function calculateStartDate(interval) {
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

