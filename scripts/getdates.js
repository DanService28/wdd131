let currentYear = new Date().getFullYear();  
document.getElementById("currentyear").textContent = currentYear;  

let lastModifiedDate = document.lastModified;  
document.getElementById("lastModified").textContent = `Last modification: ${lastModifiedDate}`; 