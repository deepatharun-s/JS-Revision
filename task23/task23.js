// 23. Email Domain Extractor 
// HTML Design 
// • Textbox for email 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input: user@gmail.com 
 
// Result: Domain = gmail.com 
// Validation Rules 
// • Empty input → "Please enter email" 
// • Invalid email → "Enter valid email" 



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
        error.innerText="Please enter email"
        return
    }

    if(!inputValue.includes('@')){
        error.innerText='Enter valid email'
        return
    }

    const arr=inputValue.split('@')

    result.innerText=`Domain = ${arr[1]}`

})