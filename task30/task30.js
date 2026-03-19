// 30. Countdown Timer 
// HTML Design 
// • Input for seconds 
// • Start button 
// • Display timer 
// Example 
// Input → →10 
// Output 
// 10 
// 9 
// 8 
// 7 
// ... 
// 1 
// 0


const input = document.getElementById('input')

const error = document.getElementById("errorDiv")

const result = document.getElementById("resultDiv")

const btn = document.getElementById('subBtn')


btn.addEventListener("click", (e) => {
    e.preventDefault()

    let inputValue = input.value

    const id=setInterval(() => {
        result.innerText = inputValue--
        inputValue = inputValue--
        if (inputValue == -1) {
            clearInterval(id)
            result.innerText="Time Up"
        }
    }, 1000)

})