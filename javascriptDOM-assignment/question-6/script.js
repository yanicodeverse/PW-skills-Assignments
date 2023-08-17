const heading = document.createElement("h1")
heading.innerText = "Which is your favorite programming language: "
document.body.append(heading)

const dropdown = document.createElement("select")
dropdown.style.fontSize = "1.5rem"
heading.append(dropdown)

const options = ['python', 'C++', 'C#', 'javascript', 'solidity']

options.forEach((options) => {
    const optionElement = document.createElement('option')
    optionElement.innerHTML = options
    dropdown.append(optionElement)
})