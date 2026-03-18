// 17. Remove Duplicate Elements from Array 
// HTML Design 
// • Textbox → input array 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input  → A,B,C,A,B,D 

// Result → A,B,C,D 
// Validation Rules 
// • Empty input not allowed 
// • Multiple commas should be cleaned 
// • Single element not allowed 


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

    if (/[0-9]/.test(inputValue)) {
        error.innerText = "Numbers not allowed"
        return
    }


    const arr = inputValue.split(',')

    const newArray = arr.reduce((acc, curr) => {
        if (!acc.includes(curr)) {
            acc.push(curr)
        }
        return acc
    }, [])
    result.innerText = newArray

})