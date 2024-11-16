let currentYear = new Date().getFullYear();  
document.getElementById("currentyear").textContent = currentYear;  

let lastModifiedDate = document.lastModified;  
document.getElementById("lastModified").textContent = `Last modification: ${lastModifiedDate}`; 

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});