// 18. Character Counter 
// HTML Design 
// • Textarea 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input → Hello World 
 
// Result → Characters = 11 
// Validation Rules 
// • Empty sentence not allowed


const input=document.getElementById('input')

const error=document.getElementById("errorDiv")

const result=document.getElementById("resultDiv")

const btn=document.getElementById('subBtn')


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const inputValue=input.value .trim()

    error.innerText=''
    result.innerText=''

    if(/^$/.test(inputValue)){
        error.innerText="Empty input not allowed"
        return
    }

    result.innerText=`Characters = ${inputValue.length}`


})