class Field {
    constructor(name, value = '') {
        this.name = name
        this.value = value
        this.errors = []
        this.handlers = []
    }

    notEmpty(errorMessage = '') {
        if (this.value.length === 0) {
            this.errors.push({
                error: true,
                fieldName: this.name,
                message: errorMessage.length > 0 ? errorMessage : 'The field is empty.'
            })
        }
        return this
    }
    isEmpty(errorMessage = '') {
        if (this.value.length > 0) {
            this.errors.push({
                error: true,
                fieldName: this.name,
                message: errorMessage.length > 0 ? errorMessage : 'The field not empty.'
            })
        }
        return this
    }
    isEmail(errorMessage = '') {
        let emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        if (!emailRegex.test(this.value)) {
            this.errors.push({
                error: true,
                fieldName: this.name,
                message: errorMessage.length > 0 ? errorMessage : 'Please enter a valid email address.'
            })
        }
        return this
    }
    min(min, errorMessage = '') {
        if (this.value.length < min) {
            this.errors.push({
                error: true,
                fieldName: this.name,
                message: errorMessage.length > 0 ? errorMessage : `The minimum is ${min} characters.`
            })
        }
        return this
    }
    max(max, errorMessage = '') {
        if (this.value.length > max) {
            this.errors.push({
                error: true,
                fieldName: this.name,
                message: errorMessage.length > 0 ? errorMessage : `The maximum is ${max} characters.`
            })
        }
        return this
    }
    equalTo(to, errorMessage = '') {
        if (this.value !== to) {
            this.errors.push({
                error: true,
                fieldName: this.name,
                message: errorMessage.length > 0 ? errorMessage : 'Both values must be equals.'
            })
        }
    }
    handleError(error) {
        this.handlers.push(error)
    }
}

export default Field