// 24. Copy Text to Clipboard 
// HTML Design 
// • Textbox 
// • Copy button 
// • Message div 
// Behaviour 
// Click Copy 
// Text copied to clipboard 
 
// This uses: navigator.clipboard.writeText()


const input=document.getElementById('input')

const result=document.getElementById("resultDiv")

const btn=document.getElementById('subBtn')


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const inputValue=input.value 

    navigator.clipboard.writeText(inputValue)

    result.innerText='Text copied to clipboard Successfully'

})