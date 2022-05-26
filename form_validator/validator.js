function Validator (option) {
    var formElement = document.querySelector(option.form)
    if (formElement){
        
        option.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement){
                Validator.validate(inputElement, rule, option.errorSelector)
            }
        })

    }
}   

Validator.validate = function(inputElement, rule, errorSelector) {
    var errorElement = inputElement.parentElement.querySelector(errorSelector)
    inputElement.addEventListener('blur',() => {
        var errorMessage = rule.test(inputElement.value)
        if (errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        } 
        else {
            errorElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
    })

    inputElement.oninput = () => {
        errorElement.innerText = ''
        inputElement.parentElement.classList.remove('invalid')
    }

}

// rules decleration
Validator.isRequired = (selector, errorMsg) => {
    return {
        selector:selector,
        test: function(value){
            return value.trim() ? undefined: errorMsg || 'This field is required.'
        }
    }
}

Validator.isEmail = (selector, errorMsg) => {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : errorMsg || 'Input your email address.'
        }
    }
}

Validator.minLength = (selector, minLength , errorMsg) => {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= minLength ? undefined : errorMsg || `at least ${minLength} characters for password.`
        }
    }
}

Validator.confirm = (selector, getElement, errorMsg) => {
    return {
        selector: selector,
        test: (value) => {
            var e = getElement().value
            console.log(e)
            return value == e ? undefined : errorMsg || 'Password doesnt fit'
        }
    }
}