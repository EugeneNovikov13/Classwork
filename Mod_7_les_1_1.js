'use strict';
// let person = {
//     firstName: 'Andrey',
//     lastName: 'Ivanov',
//     age: 20,
//     isStudent: true,
//     contactInfo: {
//                 'phone': '098-556-33-41',
//                 'e-mail': 'AndreyIvanov@gmail.com'
//                 },
//     disciples: ['Programming', 'Machine engineering', 'English']
// }
// let jsonPerson = JSON.stringify(person);
// document.write(`<h1 style="color: blue">` + jsonPerson + `</h1>`)

// function checkAge(key, value) {
//     if (key === "age" && value >= 18) {
//         return undefined;
//     }
//     return value;
// }

// let jsonPerson2 = JSON.stringify(person, checkAge);
// document.write(`<h1 style="color: red">` + jsonPerson2 + `</h1>`)

// let jsonPerson3 = JSON.stringify(person, ["firstName", "lastName"])
// document.write(`<h1 style="color: green">` + jsonPerson3 + `</h1>`)
// console.log(jsonPerson3)

// let jsonPerson4 = JSON.stringify(person, null, 2);
// document.write(`<h1 style="color: blueviolet">` + jsonPerson4 + `</h1>`)
// console.log(jsonPerson4)

// let jsonPerson5 = JSON.stringify(person)
// console.log(jsonPerson5)

// let personStr = '{"firstName":"Andrey","lastName":"Ivanov","age":20,"isStudent":true,"contactInfo":{"phone":"098-556-33-41","e-mail":"AndreyIvanov@gmail.com"},"disciples":["Programming","Machine engineering","English"]}'

// console.log(typeof(personStr))
//
// let person = JSON.parse(personStr);
// console.log(typeof(person))
// console.log(person)
//
// alert(person.firstName)
// alert(person.contactInfo.phone)

// function checkIsStudent(key, value) {
//     if (key === "isStudent" && value === true) {
//         return undefined;
//     }
//     return value;
// }
// let person2 = JSON.parse(personStr, checkIsStudent)
// alert(person2.isStudent)
// console.log(person2)

let model = {
    name: "BMW",
    autopilot: undefined,
    toJSON() {
        let jsonStr = `{"name": "${this.name}", "autopilot": `;
        if (this.autopilot === undefined) {
            jsonStr += `"Not"}`
        }
        else {
            jsonStr += `"${this.autopilot}"`
        }
    return jsonStr;
    }
}
let car = {
    color: "Black",
    engine: "diesel",
    model
}
let carJSON = JSON.stringify(car)
alert(carJSON)
document.write(`<h1 style="color: darkorange">` + carJSON + `</h1>`)
