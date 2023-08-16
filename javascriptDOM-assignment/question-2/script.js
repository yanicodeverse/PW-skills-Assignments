const toggle_button = document.querySelector('#toggle--btn')
toggle_button.addEventListener("click", () => {
    document.body.classList.toggle("dark--mode")
    document.body.classList.toggle("light--mode")
})