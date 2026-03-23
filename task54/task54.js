// 54. Local Storage Form Auto Save 
// HTML Design 
// Name 
// Email 
// Message 
// Behaviour 
// • When user types → automatically save to localStorage 
// • When page refreshes → restore form values.


const nameInput = document.getElementById('name')

const email = document.getElementById('email')

const msg = document.getElementById('msg')


nameInput.addEventListener('input', () => {
    localStorage.setItem("name", nameInput.value)
})

email.addEventListener('input', () => {
    localStorage.setItem("email", email.value)
})

msg.addEventListener('input', () => {
    localStorage.setItem("msg", msg.value)
})


window.addEventListener('load', (e) => {

    e.preventDefault()
    const a = localStorage.getItem("name")
    const b = localStorage.getItem("email")
    const c = localStorage.getItem("msg")


    nameInput.value = a
    email.value=b
    msg.value=c
})

// localStorage.clear()