// 19. Number Even or Odd 
// HTML Design 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input: 8 
 
// Result: Even Number 
// Validation Rules 
// • Empty → "Please enter a number" 
// • Letters not allowed 
// • Special characters not allowed 


const input=document.getElementById('input')

const error=document.getElementById("errorDiv")

const result=document.getElementById("resultDiv")

const btn=document.getElementById('subBtn')


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const inputValue=input.value 

    error.innerText=''
    result.innerText=''

    if(/^$/.test(inputValue)){
        error.innerText="Please enter a number"
        return
    }

    if(/[a-z,A-Z]/.test(inputValue)){
        error.innerText="Letters not allowed"
        return
    }
    if(/[0-9]/.test(inputValue)){
        if (inputValue%2==0){
        result.innerText='Even Number'
    }
    else{
        result.innerText='Odd Number'
    }
    return

    }

    if(/[$&+,:;=?@#|'<>.-^*()%!]/.test(inputValue)){
        error.innerText='Special characters not allowed'
        return
    }

    

})