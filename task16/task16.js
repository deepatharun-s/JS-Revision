// 16. Count Vowels and Consonants 
// HTML Design 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// Output Example 
// Input → javascript 
 
// Vowels: 3 
// Consonants: 7 
// Validation Rules 
// • Empty input not allowed 
// • Numbers not allowed 
// • Special characters not allowed


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


    let vowelCount=0
    let consonantCount=0

    const vowels='aeiouAEIOU'

    for (let i=0;i<inputValue.length;i++){
        if(vowels.includes(inputValue[i])){
            vowelCount++
        }
        else{
            consonantCount++
        }
    }

result.innerText=`Vowels :${vowelCount}
Consonants :${consonantCount}`


})