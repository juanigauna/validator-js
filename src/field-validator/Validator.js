import Field from "./Field.js"

class Validator {
    constructor(data = {}) {
        this.data = data
        this.collection = []
        this.errors = []
    }

    getFormFields(form) {
        for (const key in form.children) {
            if (Object.hasOwnProperty.call(form.children, key)) {
                const element = form.children[key]
                this.data[element.name] = element.value
            }
        }
    }

    getStringFields(string, options = {
        start: '?',
        delimeter: '&',
        assign: '=',
        end: ''
    }) {
        string = string.replace(options.start, '')
        string = string.replace(options.end, '')
        const fields = string.split(options.delimeter)
        for (let index = 0; index < fields.length; index++) {
            const field = fields[index];
            const data = field.split(options.assign)
            this.data[data[0]] = data[1] 
        }
    }

    field(name) {
        const field = new Field(name, this.data[name])
        this.collection.push(field)
        return field
    }
    reset() {
        this.collection.length = 0
        this.errors.length = 0
    }
    validate() {
        for (const field of this.collection) {
            if (field.errors.length > 0) {
                this.errors.push(field.errors[0])
            }
        }
    }
    hasError() {
        return this.errors.length > 0
    }
    getErrors() {
        return this.errors
    }
}

export default Validator