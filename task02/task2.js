// 2. Vowel or Not
// HTML Design
// • Title: Vowel Checker
// • Textbox → input single letter
// • Error div
// • Button: Check
// • Result div
// UI
// Enter Letter:
// [ A ]
// Error message here
// [ Check ]
// Result: Vowel / Not Vowel



const input=document.getElementById('input')

const error=document.getElementById("errorDiv")

const result=document.getElementById("resultDiv")

const btn=document.getElementById('subBtn')


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const inputValue=input.value.trim()

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
    // console.log(inputValue);
    

    const vowels='aeiouAEIOU'

    if (vowels.includes(inputValue)){
        result.innerText='Vowel'
    }
    else{
        result.innerText="Not Vowel"
    }
    
})