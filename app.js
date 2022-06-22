var goster = document.querySelector(".time");

const zemberek = () => {
    let clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();
    let amPm ;
    if (hour > 12) {
        hour = hour - 12;
        amPm = "PM" ;        
    }else {
        amPm = "AM" ; 
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    console.log(hour, minute, second, amPm);
    
    goster.innerHTML = hour + ":" + minute + ":" + second + " " + amPm;

    console.log(second);
}

setInterval("zemberek()", 1000);
