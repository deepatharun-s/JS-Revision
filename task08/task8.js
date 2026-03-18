// 8. Replace Element in Array
// HTML Design
// • Textbox 1: Array elements (A,B,C,D)
// • Textbox 2: Position
// • Textbox 3: New element
// • Error div
// • Button
// • Result div
// UI
// Array: [A,B,C,D]
// Position: [2]
// New Element: [X]
// Error here
// [Replace]
// Result: A,X,C,D

const inputArray=document.getElementById('Array')

const inputPosition=document.getElementById('Pos')

const inputElement=document.getElementById('Element')

const error=document.getElementById("errorDiv")

const result=document.getElementById("resultDiv")

const btn=document.getElementById('subBtn')


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const inputArrayValue=inputArray.value 
    const inputPositionValue=inputPosition.value-1
    const inputElementValue=inputElement.value

    const arr=inputArrayValue.split(',')

    arr[inputPositionValue]=inputElementValue
    // console.log(arr);
    
    result.innerText=`New Array : ${arr}`
})