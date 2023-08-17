const loginBtn = document.querySelector("#loginButton")
const logoutBtn = document.querySelector("#logoutButton")
const authStatus = document.querySelector("#authStatus")

if (localStorage.getItem("isLoggedIn")) authStatus.innerHTML = "User is Logged in."

loginBtn.addEventListener("click", () => {
    localStorage.setItem("isLoggedIn", "true")
    authStatus.innerHTML = "User is Logged in."
})

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem('isLoggedIn')
    authStatus.innerHTML = "User has not Logged in."
})
