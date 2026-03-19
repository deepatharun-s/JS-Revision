// 21. Live Character Counter (Textarea) 
// HTML Design 
// • Textarea 
// • Character count display below 
// • Maximum 200 characters 
// Behaviour 
// • As the user types, character count updates. 
// • If more than 200 characters, show error. 
// Example 
// Message → Hello world 

// Characters → 11 / 200


const input = document.getElementById('input')

const error = document.getElementById("errorDiv")

const result = document.getElementById("resultDiv")



input.addEventListener("input", (e) => {
    e.preventDefault()

    const inputValue = input.value

    error.innerText = ''
    result.innerText = ''

    if (inputValue.length > 200) {
        error.innerText = "Not allowed"
    }
    else {
        result.innerText = `Message => ${inputValue}
        Characters => ${inputValue.length} / 200`
    }

})