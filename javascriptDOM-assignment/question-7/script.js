const input = document.querySelector('#input_text')
const itemList = document.querySelector('#items_list')
const items = itemList.querySelectorAll('li')

input.addEventListener("input", () => {
    const filterText = input.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
        const listItemText = items[i].innerHTML.toLowerCase();
        if (listItemText.includes(filterText)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
})