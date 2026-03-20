// 15. Palindrome Checker 
// HTML Design 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input → madam 
 
// Result → This is a Palindrome 
// Validation Rules 
// • Empty → Please enter a word 
// • Numbers not allowed 
// • Special characters not allowed


const input=document.getElementById('input')

const error=document.getElementById("errorDiv")

const result=document.getElementById("resultDiv")

const btn=document.getElementById('subBtn')


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const inputValue=input.value.trim()

    error.innerText=''
    result.innerText=''

    if(/^$/.test(inputValue)){
        error.innerText="Empty input not allowed"
        return
    }

    if(/[0-9]/.test(inputValue)){
        error.innerText="Numbers not allowed"
        return
    }

    if(/[$&+,:;=?@#|'<>.-^*()%!]/.test(inputValue)){
        error.innerText='Special characters not allowed'
        return
    }

    let reversedValue=''

    for (let i=inputValue.length-1;i>=0;i--){
        reversedValue+=inputValue[i]
    }
    
    if (reversedValue==inputValue){
        result.innerText=`This is a Palindrome`
    }
    else{
        result.innerText=`This is not a Palindrome`
    }

    

})