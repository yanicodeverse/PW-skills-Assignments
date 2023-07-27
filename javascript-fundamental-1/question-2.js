// Question-2

function validate(username, password) {
  if (username === "admin" && password === "12345") return "Login Successful";
  return "invalid credential";
}

let username = "admin";
let password = "12345";

console.log(validate(username, password));
