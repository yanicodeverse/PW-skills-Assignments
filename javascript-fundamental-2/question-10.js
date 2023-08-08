const sentence = "please please submit your assignment on time, your assignment are important"

function wordCounter(sentence) {
    const singleCharacters = sentence.split(" ")
    const wordCountMap = new Map()

    for (let character of singleCharacters) {
        if (wordCountMap.has(character)) {
            wordCountMap.set(character, wordCountMap.get(character) + 1)
        } else {
            wordCountMap.set(character, 1)
        }
    }

    return wordCountMap
}

const result = wordCounter(sentence)
console.log(result);