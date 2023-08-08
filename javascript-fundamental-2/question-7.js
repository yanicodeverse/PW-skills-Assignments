function generateOTP() {
    let otp = ''
    for (let i = 0; i < 4; ++i) {
        let randomNumber = Math.floor(Math.random() * 9)
        otp += randomNumber
    }
    return otp
}

console.log(`Here is your otp ${generateOTP()}`)