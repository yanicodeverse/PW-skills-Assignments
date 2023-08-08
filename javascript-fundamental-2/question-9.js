function uniqueCharacterCheck(username) {
    const charSet = new Set()
    for (let char of username) {
        if (charSet.has(char)) return "The input string contain duplicates"
        charSet.add(char)
    }
    return "The input string contain unique characters"
}

console.log(uniqueCharacterCheck("Mithun"))