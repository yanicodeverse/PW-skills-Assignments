const imageState = document.querySelector("#heading")
const image = document.querySelector("#image")
image.style.height = "500px"
image.style.width = "800px"
const toggleBtn = document.querySelector("#toggle_button")
toggleBtn.style.cursor = "pointer"

toggleBtn.addEventListener("click", () => {
    image.classList.toggle("hidden")
    image.classList.toggle("visible")

    if (image.classList.contains("hidden")) {
        imageState.innerHTML = "Your image is Hidden"
    } else {
        imageState.innerHTML = "Your image is Visible"
    }
})