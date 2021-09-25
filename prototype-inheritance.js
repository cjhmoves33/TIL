let superObj = new Object()
superObj.intro = "i'm superObj"

let subObj = Object.create(superObj)
subObj.greet = "hi,"

// let superObj = {
//     intro : "i'm superObj!"
// }

// let subObj = {
//     greet : "hi,",
//     __proto__ : superObj
// }

debugger;