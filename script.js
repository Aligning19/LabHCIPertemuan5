

const form = document.getElementById('form')
const errorElement = document.getElementById('error')

function validateEmail() {
    let ca = 0
    let cd = 0
    const emailElement = document.getElementById('email')
    const ai = emailElement.value.indexOf('@')
    const di = emailElement.value.indexOf('.')

    if(ai == -1 || di == -1) {
        errorElement.innerHTML = 'Email must contain @ and .'
        return false
    }

    const email = emailElement.value

    email.split('').forEach((character) => {
        if(character == '@') ca++
        else if(character == '.') cd++
    })

    if(ca > 1 || cd > 1) {
        errorElement.innerHTML = 'Email can only contain 1 @ and 1 .'
        return false
    }

    return true
}

function isContainCapital(s){
    let contain = false
    s.split('').forEach((character) => {
        if(character >= 'A' && character <= 'Z') contain = true
    })
    return contain
}

function isContainLowercase(s){
    let contain = false
    s.split('').forEach((character) => {
        if(character >= 'a' && character <= 'z') contain = true
    })
    return contain
}

function isContainNumerical(s){
    let contain = false
    s.split('').forEach((character) => {
        if(character >= '0' && character <= '9') contain = true
    })
    return contain
}

function handleFormEvent(event){
    event.preventDefault()
   
    // pastiin id nya sama kyk yang ada di html ya
    const fullnameElement = document.getElementById('fullname')
    const emailElement = document.getElementById('email')
    const passElement = document.getElementById('password')
    const conPassElement = document.getElementById('confirmpassword')
    
    const split = fullnameElement.value.split(' ')

    if(split.length < 2) {
        errorElement.innerHTML = 'Full name must contain more than 1 word'
        return
    }
    
    if(!validateEmail()) return

    console.log('here')
    if(passElement.value != conPassElement.value) {
        errorElement.innerHTML = 'password doesnt match'
        return
    }
    
    if(
        !isContainCapital(passElement.value) ||
        !isContainLowercase(passElement.value) ||
        !isContainNumerical(passElement.value)
    ) {
        errorElement.innerHTML = 'password must contain a single lowercase, uppercase, numerical character'
        return
    }

    errorElement.innerHTML = ''
}

form.addEventListener('submit', handleFormEvent)