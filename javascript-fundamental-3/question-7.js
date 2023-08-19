class UserInformation {
    constructor(name, age, email) {
        let user = new Map()
        user.set("name", name)
        user.set("age", age)
        user.set("email", email)
        this.user = user
    }

    getUser() {
        return this.user
    }
    add(key, value) {
        return this.user.has(key) ? this.user : this.user.set(key, value)
    }
    update(key, value) {
        return this.user.has(key) ? this.user.set(key, value) : this.user
    }
    delete(key) {
        return this.user.delete(key)
    }
}

const user = new UserInformation("sam", 20, "sam.test@gmail.com")

// ------------TEST CASES -------------
console.log(user.getUser());    //get user
console.log(user.add('family', 'dargtbvkakdv'));     //add
console.log(user.update('age', 15));     //update
console.log(user.delete("age"));     //delete
console.log(user.getUser());