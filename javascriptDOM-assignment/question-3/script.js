const increment_btn = document.querySelector("#increment")
const decrement_btn = document.querySelector("#decrement")
const counter = document.querySelector('#counter')

let count = 0

function update_display_counter() {
    counter.textContent = count
    counter.style.fontSize = "4rem"
}
function increase_count() {
    count++
    update_display_counter()
}
function decrease_count() {
    if (count > 0) {
        count--
        update_display_counter()
    } else {

        alert("Counting is going below 0")
    }

}

update_display_counter()
increment_btn.addEventListener('click', increase_count)
decrement_btn.addEventListener('click', decrease_count)
