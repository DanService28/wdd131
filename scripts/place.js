let currentYear = new Date().getFullYear();  
document.getElementById("currentyear").textContent = currentYear;  

let lastModifiedDate = document.lastModified;  
document.getElementById("lastModified").textContent = `Last modification: ${lastModifiedDate}`;

const temperature = 27; 
const windSpeed = 14; 
function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) { 
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(wind, 0.16) +
            0.3965 * temp * Math.pow(wind, 0.16)
        ).toFixed(2); 
        } else {
        return 'N/A'; 
    }
}

const windChill = calculateWindChill(temperature, windSpeed);

document.addEventListener('DOMContentLoaded', () => {
    const weatherList = document.querySelector('.weather ul');
    let windChillElement = weatherList.querySelector('#wind-chill');

    windChillElement.innerHTML = `<b>Wind Chill: </b>${windChill} °C`;
});