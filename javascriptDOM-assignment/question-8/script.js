const seconds_span = document.querySelector('#seconds')
const minutes_span = document.querySelector("#minutes")
const hours_span = document.querySelector("#hours")

function duration() {
    const date = new Date()
    let sec = date.getSeconds()
    let min = date.getMinutes()
    let hr = date.getHours()

    if (hr < 10) hr = "0" + hr
    if (min < 10) min = "0" + min
    if (sec < 10) sec = "0" + sec

    hours_span.innerHTML = hr
    minutes_span.innerHTML = min
    seconds_span.innerHTML = sec
}

setInterval(duration, 100)
