//time in seconds
const title = document.getElementById("title");
const targetDate = new Date("06/10/2021").getTime();
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
function convertTime(totalSeconds) {
    let days = Math.floor(totalSeconds / (24 * 60 * 60));
    let daysRest = totalSeconds % (24 * 60 * 60);
    let hours = Math.floor(daysRest / (60 * 60));
    let hoursRest = totalSeconds % (60 * 60);
    let minutes = Math.floor(hoursRest / 60);
    let seconds = hoursRest % 60;
    return [days, hours, minutes, seconds];
}

let oneSecLoop = setInterval(function () {
    let now = new Date().getTime();
    let difference = Math.floor((targetDate - now) / 1000);
    let timeArr = convertTime(difference);
    if (difference < 0) {
        clearInterval(oneSecLoop);
        title.innerText = "Countdown is over!";
        return;
    }
    // let elementsArr = [days, hours, minutes, seconds];
    // (function() {
    //     let i = 0;
    //     elementsArr.forEach(element => {
    //         if (element.innerText != timeArr[i]) {
    //             console.log(`#${element.id} ~ .top-card`);
    //             document.querySelector(`#${element.id} ~ .top-card`).style.transform = "rotateX(-180deg)";
    //         }
    //         i++;
    //     })
    // })();
    days.innerText = timeArr[0];
    hours.innerText = timeArr[1];
    minutes.innerText = timeArr[2];
    seconds.innerText = timeArr[3];
}, 1000)



// let days = cdTime[0];
// let hours = cdTime[1];
// let minutes = cdTime[2];
// let seconds = cdTime[3];