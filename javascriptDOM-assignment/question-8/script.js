const seconds_span = document.querySelector('#seconds')
const minutes_span = document.querySelector("#minutes")
const hours_span = document.querySelector("#hours")

function convertToHex(value) {
    const hexValue = value.toString(16)
    return hexValue.length === 1 ? '0' + hexValue : hexValue
}

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

    let hexColor = `#${convertToHex(hr)}${convertToHex(min)}${convertToHex(sec)}`
    console.log(hexColor)
    document.body.style.backgroundColor = hexColor
}

setInterval(duration, 100)
