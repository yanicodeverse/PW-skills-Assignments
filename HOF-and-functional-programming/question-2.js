let delay = 3
function generateRandomNumber() {
    const interval = setInterval(() => {
        console.log(`random number will generate in ${delay--}`);
    }, 1000)

    setTimeout(() => {
        clearInterval(interval)
        console.log(`YOUR RANDOM NUMBER IS  : ${Math.floor(Math.random() * 10)}`);
    }, (delay + 1) * 1000)
}
generateRandomNumber()