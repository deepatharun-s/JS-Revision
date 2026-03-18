// 20. Generate Random Number 
// HTML Design 
// • Textbox for Min 
// • Textbox for Max 
// • Error div 
// • Button 
// • Result div 
// Example 
// Min: 1 
// Max: 100 

// Result: Random Number = 54 
// Validation Rules 
// • Empty fields not allowed 
// • Only numbers allowed 
// • Max must be greater than Min


const mininput = document.getElementById('mininput')

const maxinput = document.getElementById('maxinput')

const error = document.getElementById("errorDiv")

const result = document.getElementById("resultDiv")

const btn = document.getElementById('subBtn')


btn.addEventListener("click", (e) => {
    e.preventDefault()

    error.innerText = ''
    result.innerText = ''

    const min = Number(mininput.value)
    // console.log(min);
    

    const max = Number(maxinput.value)

    // console.log(min,max);

    if (min==0 || max==0) {
        error.innerText = "Please enter a number"
        return
     }

    if ((/[a-z,A-Z]/.test(min))||(/[a-z,A-Z]/.test(max))) {
        error.innerText = "Only numbers allowed"
        return
    }
    

    if(max<=min){
        error.innerText="Max must be greater than Min"
        return
    }


    if ((/[0-9]/.test(min))&&(/[0-9]/.test(max))) {


        const randomNumber = Math.floor(Math.random() * (max - min) + min)

        // console.log(randomNumber);


        result.innerText = `Random Number = ${randomNumber}`
        return

    }

    if ((/[$&+,:;=?@#|'<>.-^*()%!]/.test(min))||(/[$&+,:;=?@#|'<>.-^*()%!]/.test(max))) {
        error.innerText = 'Special characters not allowed'
        return
    }
})