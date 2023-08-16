document.title = "question-1"

const body = document.body
const input = document.createElement('input')
const h2 = document.createElement("h2")
input.type = "file"
input.innerHTML = "choose file"
h2.textContent = "Your profile picture"
body.append(input)
body.append(h2)

const div = document.createElement("div")
const image = document.createElement("img")

div.innerHTML = "No picture selected"
body.append(div)

input.addEventListener("change", (event) => {
    const selectedImage = event.target.files[0]
    // console.log(selectedImage);
    if (selectedImage) {
        let reader = new FileReader()
        reader.onload = (e) => {
            image.src = e.target.result
            image.style.maxWidth = "500px"
            image.style.height = "400px"
            div.innerHTML = ""
            div.append(image)
        }
        reader.readAsDataURL(selectedImage)
    }
})