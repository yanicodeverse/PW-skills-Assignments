const prompt = require('prompt-sync')({ sigint: true })

const studentInformation = {
    name: 'sam',
    age: 23,
    grade: 67
}

function printDetails(info) {
    console.log("\nBefore Update:- \n");
    for (let key in info) {
        console.log(`${key}: ${info[key]}`);
    }

    const choice = prompt('Do you want to update grade ? [y/n]:')
    if (choice === 'y') {
        let newGrade = prompt("enter new grade: ")
        info.grade = newGrade
        console.log("\n After update:- \n");
        for (let key in info) {
            console.log(`${key}: ${info[key]}`);
        }
    } else {
        console.log("ok");
    }
}

printDetails(studentInformation)