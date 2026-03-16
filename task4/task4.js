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

    let reversedValue=''

    for (let i=inputValue.length-1;i>=0;i--){
        reversedValue+=inputValue[i]
    }

    // console.log(reversedValue);
    result.innerText=`Reversed String : ${reversedValue}`
    

})