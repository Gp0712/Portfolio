
function inputReset() {
    document.getElementById("outputBirthday").innerHTML = null;
    document.getElementById("outputDate").innerHTML = null;
    document.getElementById('birthday').value = null;
    document.getElementById('date').value = null;
  }
  
/* Arab-Roman Calculator ///////////////////// */
function calculate ( ) {
    a = document.getElementById('number').value;
if(a > 0){
    let b = [];
    let i = 0;
    while((a - 1000) >= 0){
        b[i] = 'M';
        a = a - 1000;
        i++; 
    }
    while((a - 900) >= 0){
        b[i] = 'CM';
        a = a - 900;
        i++; 
    }
    while((a - 500) >= 0){
        b[i] = 'D';
        a = a - 500;
        i++; 
    }
    while((a - 400) >= 0){
        b[i] = 'CD';
        a = a - 400;
        i++; 
    }
    while((a - 100) >= 0){
        b[i] = 'C';
        a = a - 100;
        i++; 
    }
    while((a - 90) >= 0){
        b[i] = 'XC';
        a = a - 90;
        i++; 
    }
    while((a - 50) >= 0){
        b[i] = 'L';
        a = a - 50;
        i++; 
    }
    while((a - 40) >= 0){
        b[i] = 'XL';
        a = a - 40;
        i++; 
    }
    while((a - 10) >= 0){
        b[i] = 'X';
        a = a - 10;
        i++; 
    }
    while((a - 9) >= 0){
        b[i] = 'IX';
        a = a - 9;
        i++; 
    }
    while((a - 5) >= 0){
        b[i] = 'V';
        a = a - 5;
        i++; 
    }
    while((a - 4) >= 0){
        b[i] = 'IV';
        a = a - 4;
        i++; 
    }
    while((a - 1) >= 0){
        b[i] = 'I';
        a = a - 1;
        i++; 
    }
    let c = b.join('');
    document.getElementById("output").innerHTML = c;
} else { 
     alert('Enter a valid number please!')
    }
}
   
 /* Birthday ////////////////////////// */
const getBirthday = () =>{
    const givenDate = document.getElementById('birthday').value;
    const dateObject = new Date(givenDate);
    const now = new Date();
    let different = now - dateObject;
if(different > 0){    
    const result = new Date(different);
    const years = result.getUTCFullYear() - 1970;
    const months = result.getUTCMonth();
    const days = result.getUTCDate() - 1;
    const output = `You are ${years} years, ${months} months, and ${days} days.`;
    document.getElementById("outputBirthday").innerHTML = output;
} else { 
    alert('Enter a valid date please!');
    document.getElementById('birthday').value = null;
}
}


/* Xmas ////////////////////////////// */
const getTimeToXmas = () =>{
    const xmasDate = new Date('24 December 2023 23:59');
    const now = new Date();
    let different = xmasDate-now;
    const result = new Date(different);
    const years = result.getUTCFullYear() - 1970;
    const months = result.getUTCMonth();
    const days = result.getUTCDate() - 1;
    const hours = result.getUTCHours() - 1;
    const mins = result.getUTCMinutes() + 1;
    let sec = result.getUTCSeconds() + 1;
    if(sec === 0) sec += 60;
    sec = (sec < 10) ? "0" + sec : sec;
    const output = `We are ${months} months, ${days} days, ${hours} hours, ${mins} minutes and ${sec} seconds away from Christmas.`;
    document.getElementById("outputXmas").innerHTML = output;
}

setInterval(getTimeToXmas, 1000);


/* New Year ///////////////////////// */
const getTimeToNewYear = () =>{
    const xmasDate = new Date('31 December 2023 23:59');
    const now = new Date();
    let different = xmasDate-now;
    const result = new Date(different);
    const years = result.getUTCFullYear() - 1970;
    const months = result.getUTCMonth();
    const days = result.getUTCDate() - 1;
    const hours = result.getUTCHours() - 1;
    const mins = result.getUTCMinutes() + 1;
    let sec = result.getUTCSeconds() + 1;
    if(sec === 0) sec += 60;
    sec = (sec < 10) ? "0" + sec : sec;
    const output = `We are ${months} months, ${days} days, ${hours} hours, ${mins} minutes and ${sec} seconds away from New Year's Eve.`;
    document.getElementById("outputNewYear").innerHTML = output;
}

setInterval(getTimeToNewYear, 1000);


/* Own Date ////////////////////////// */
    const getOwnDate = () =>{
    const givenDate = document.getElementById('date').value;
const dateObject = new Date(givenDate);
    const now = new Date();
    let different = dateObject - now;
if(different > 0){ 
    const result = new Date(different);
    const years = result.getUTCFullYear() - 1970;
    const months = result.getUTCMonth();
    const days = result.getUTCDate() - 1;
    const output = `You have to wait ${years} years, ${months} months, and ${days} days until the specified date.`;
    document.getElementById("outputDate").innerHTML = output;
} else { 
    alert('Enter a valid date please!');
    document.getElementById('date').value = null;
}
}

/* Today date ////////////////////////////// */
const setDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = document.getElementById('today');
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;
    let dayName = days[date.getDay()];
    today.innerHTML = `${dayName}<br>${day} . ${month} . ${year} `;
}
setInterval(setDate);
// setDate();

/* Analog clock //////////////////////////// */
const setClock = () => {
    const hourHand = document.querySelector('.handHour');
    const minHand = document.querySelector('.handMin');
    const secHand = document.querySelector('.handSec');
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const hourDegrees = ((hour/12*360)+90);
    const minDegrees = ((min/60*360)+90);
    const secDegrees = ((sec/60*360)+90);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    secHand.style.transform = `rotate(${secDegrees}deg)`;
}

 setInterval(setClock, 1000);


 /* Digital clock ////////////////////// */
const setTime = () => {
    const time = document.getElementById('digitalClock');
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    time.innerHTML = `${hour} : ${min} : ${sec} `;
}

setInterval(setTime, 1000);