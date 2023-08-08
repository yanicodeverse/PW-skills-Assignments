const checkResult = (user, dataList) => {
    for (let studentObj of dataList) {
        if (studentObj.name === user) {
            if (studentObj.marks > 90) {
                return `Congratulations ${user}! You have cleared the exam.`
            } else {
                return `Sorry! ${user}, You have not cleared the exam.`
            }
        }
    }
    return `Invalid User :${user}!!!`
}

const studentDataList = [
    { name: "Mithun", marks: 95 },
    { name: "Prabir", marks: 75 },
    { name: "Alka", marks: 92 },
    { name: "Shivam", marks: 70 },
    { name: "Farman", marks: 99 },
]

console.log(checkResult("Mithun S", studentDataList))