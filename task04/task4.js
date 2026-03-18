// 4. Reverse String
// HTML Design
// • Title: Reverse String
// • Textbox
// • Error div
// • Button
// • Result div
// UI
// Enter String
// [ javascript ]
// Error here
// [ Reverse ]
// Result: tpircsavaj



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

    // console.log(reversedValue);
    result.innerText=`Reversed String : ${reversedValue}`
    

})