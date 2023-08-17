const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = form.querySelector("#name").value
    const password = form.querySelector("#password").value
    const email = form.querySelector("#email").value

    if (username.length >= 3 && password.length >= 8 && email) {
        alert('form validation successful!')
    } else {
        alert('form validation failed!')
    }
})