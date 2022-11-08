

const passwordField = document.getElementById('password-field')
const letter = document.getElementById('letter')
const capitalLetter = document.getElementById('capital')
const num = document.getElementById('number')
const length = document.getElementById('length')
const formEl = document.getElementById('form')




passwordField.addEventListener("focus", () => {
    document.getElementById('message-modal').style.display = "block"
    passwordField.style.border = "2px solid #96031a"
    
})



passwordField.addEventListener("blur", () => {
    document.getElementById('message-modal').style.display = "none"
    passwordField.style.border = "2px solid #ced4da"
    
})


    
passwordField.addEventListener("keyup", () => {
    if(passwordField.value.match(/[a-z]/g)) {  
        letter.classList.remove("invalid")
        letter.classList.add("valid")
    } else {
        letter.classList.remove("valid")
        letter.classList.add("invalid")
    }

    if(passwordField.value.match(/[A-Z]/g)) {  
        capitalLetter.classList.remove("invalid")
        capitalLetter.classList.add("valid")
    } else {
        capitalLetter.classList.remove("valid")
        capitalLetter.classList.add("invalid")
    }
    
    if(passwordField.value.match(/[0-9]/g)) {  
        num.classList.remove("invalid")
        num.classList.add("valid")
    } else {
        num.classList.remove("valid")
        num.classList.add("invalid")
    }

    if(passwordField.value.length >= 8) {
        length.classList.remove("invalid")
        length.classList.add("valid")
    } else {
        length.classList.remove("valid")
        length.classList.add("invalid")
    }

     
    if(passwordField.value.length >= 8) {
        passwordField.style.border = "2px solid #20bf55"
    } else if(passwordField.value.length < 8) {
        passwordField.style.border = "2px solid #96031a"
    }
    
})



