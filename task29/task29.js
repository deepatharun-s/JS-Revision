// 29. Form Auto Uppercase 
// HTML Design 
// • Textbox 
// Behaviour 
// User types → john 
// Automatically converts to → JOHN 


const input=document.getElementById('input')


input.addEventListener("input",(e)=>{
    e.preventDefault()

    input.value=input.value.toUpperCase()

})