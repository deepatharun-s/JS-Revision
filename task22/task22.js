// 22. Password Strength Checker 
// HTML Design 
// • Password textbox 
// • Error div 
// • Strength indicator 
// Strength Rules 
// Password must contain: 
// • Minimum 8 characters 
// • Uppercase 
// • Lowercase 
// • Number 
// • Special character 
// Output Example 
// Weak 
// Medium 
// Strong


const input = document.getElementById('input')

const error = document.getElementById("errorDiv")

const result = document.getElementById("resultDiv")

const btn = document.getElementById('subBtn')


btn.addEventListener("click", (e) => {
    e.preventDefault()

    const inputValue = input.value

    error.innerText = ''
    result.innerText = ''

    if (/^$/.test(inputValue)) {
        error.innerText = "Empty input not allowed"
        return
    }
    let score = 0

    if (inputValue.length >= 8) {
        if (/[a-z]/.test(inputValue)) {
            score++
        }
        if (/[A-Z]/.test(inputValue)) {
            score++
        }
        if (/[0-9]/.test(inputValue)) {
            score++
        }
        if (/[$&+,:;=?@#|'<>.-^*()%!a-zA-Z0-9]/.test(inputValue)) {
            score++
        }
    }
    console.log(score);
    

    if (score<=2){
        result.innerText="Weak"
    }
    else if(score<=3){
        result.innerText="Medium"
    }
    else{
        result.innerText="Strong"
    }

})