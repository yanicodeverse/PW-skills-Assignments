function isUserPresent(user, userList) {
    for (let i = 0; i < userList.length; i++) {
        if (userList[i] === user) {
            return `Yes, ${user} is a valid user.`
        }
    }
    return `No, ${user} is a valid user.`
}

const usernameList = ["Mithun", "bob", "alice", "shanky", "rishi"]

console.log(isUserPresent("Someone", usernameList))