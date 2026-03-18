// 7. Sum & Multiply Numbers
// HTML Design
// • Title: Sum and Multiply
// • Input textbox
// • Output textbox (readonly)
// • Error div
// • Add button
// • Multiply button
// UI
// Input Numbers
// [1,2,3,4]
// Output
// [ ]
// Error here
// [Add] [Multiply]




const input = document.getElementById('input')

const error = document.getElementById("errorDiv")

const result = document.getElementById("output")

const addbtn = document.getElementById('addBtn')

const prodbtn = document.getElementById('prodBtn')




addbtn.addEventListener("click", (e) => {
    e.preventDefault()

    const inputValue = input.value

    error.innerText=''
    result.innerText=''

    if(/^$/.test(inputValue)){
        error.innerText="Empty input not allowed"
        return
    }

    if(/[a-zA-Z]/.test(inputValue)){
        error.innerText="Alphabets not allowed"
        return
    }

    const arr=inputValue.split(',')
    // console.log(arr);
    

    let sumValue=0


    for (let i=0;i<arr.length;i++){
        sumValue+=Number(arr[i])
    }
    result.value=sumValue
})


prodbtn.addEventListener("click", (e) => {
    e.preventDefault()

    const inputValue = input.value

    const arr=inputValue.split(',')
    // console.log(arr);
    

    let productValue=1

    for (let i=0;i<arr.length;i++){
        productValue*=Number(arr[i])
    }
    result.value=productValue
})
