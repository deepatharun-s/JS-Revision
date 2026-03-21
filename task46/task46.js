// 46. Login Modal Popup 
// HTML Design 
// [ Login ] 
// Modal 
// Email 
// Password 

// [ Login ] 
// Validation required.

const popup = document.getElementById('btn')

const overlay = document.getElementById('overlay')

const closeOverlay = document.getElementById('closeBtn')


popup.addEventListener('click', () => {
    overlay.style.display = 'block'
})

closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none'
})

document.addEventListener('click', (e) => {
    if (e.target.id == 'background') {
        overlay.style.display = 'none'
    }
})

document.addEventListener('keyup', (e) => {
    const keyName = e.key
    if (keyName === "Escape") {
        overlay.style.display = 'none'
    }
})

const email = document.getElementById('email')

const password = document.getElementById('password')

document.getElementById('logIn').addEventListener("click", (e) => {
    e.preventDefault()

    if (email.value == '' || password.value == '') {
        document.getElementById('resDiv').innerText = 'All fields are required'
    }
    else {
        document.getElementById('resDiv').innerText = 'Logged IN Successfully'
    }

})