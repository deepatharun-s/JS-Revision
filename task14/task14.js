// 14. Count Words in a Sentence 
// HTML Design 
// • Title: Word Counter 
// • Textarea → user enters a sentence 
// • Error div 
// • Button: Count Words 
// • Result div 
// UI Example 
// Enter Sentence 
// [ I love javascript programming ] 
 
// Error here → [ Count Words ] 
 
// Result  → Total Words = 4 
// Validation Rules 
// • If empty → "Please enter a sentence" 
// • Ignore extra spaces 
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

    const arr=inputValue.split(' ')
    // console.log(arr);
    
    result.innerText=`Total Words : ${arr.length}`

})