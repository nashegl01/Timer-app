const hourSelect = document.getElementById("hours");
const minuteSelect = document.getElementById("minutes");
const secondsSelect = document.getElementById("seconds");
const setAlarmButton = document.getElementById("setAlarm");
const timerDisplay = document.getElementById("timerDisplay");

setAlarmButton.addEventListener("click", function () {

    const hour = hourSelect.value;
    const minute = minuteSelect.value;
    const seconds = secondsSelect.value;

    console.log(hour);
    console.log(minute);
    console.log(seconds);

    let totalSeconds =
    (hour * 3600) +
    (minute * 60) +
    Number(seconds);

    const timer = setInterval(function () {
        totalSeconds = totalSeconds - 1;
        
        const hours = Math.floor(totalSeconds / 3600);
        const remainingSeconds = totalSeconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        const secondsLeft = remainingSeconds % 60;
    
        console.log(hours, minutes, secondsLeft);
    
        timerDisplay.textContent = `${hours}:${minutes}:${secondsLeft}`;

        if (totalSeconds === 0) {
            clearInterval(timer);
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
});
