// test

import { Validator } from "./field-validator/index.js"

const validator = new Validator
// form.addEventListener('submit', event => {
//     event.preventDefault()
//     let string = window.location.search
//     // validator.getFormFields(event.target)
//     validator.getStringFields(string)
//     validator.field('name').min(4).max(8)
//     validator.validate()
//     document.querySelector('#errors').innerHTML = ''
//     validator.getErrors().forEach(error => {
//         document.querySelector('#errors').innerHTML += `
//             <div>
//                 <p>${error.fieldName}: ${error.message}</p>
//             </div>
//         `
//     })
//     validator.reset()
// })

let string = window.location.search
// validator.getFormFields(event.target)
validator.getStringFields(string)
validator.field('name').min(4).max(8)
validator.validate()
document.querySelector('#errors').innerHTML = ''
validator.getErrors().forEach(error => {
    document.querySelector('#errors').innerHTML += `
        <div>
            <p>${error.fieldName}: ${error.message}</p>
        </div>
    `
})