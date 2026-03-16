// 3. Check First & Last Character Same
// HTML Design
// • Title: First & Last Character Checker
// • Textbox
// • Error div
// • Button
// • Result div
// UI
// Enter String:
// [ level ]
// Error here
// [ Check ]
// Result here
// Alert appears if first and last characters match.


const input=document.getElementById('input')

const error=document.getElementById("errorDiv")

const result=document.getElementById("resultDiv")

const btn=document.getElementById('subBtn')


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const inputValue=input.value

    const arr=inputValue.split('')
    // console.log(arr);
    
    

    if (arr[0]==arr[(arr.length)-1]){
        console.log("asd");
        alert("First and Last characters matched.")
    }
    else{
        result.innerText="First and Last characters NOT matched."
    }

})