// 1. Find Largest & Smallest Word
// HTML Design
// • Title: Find Largest & Smallest Word
// • Layout:
//  Label: Enter Sentence
//  Textarea → user types sentence (ex: I love my country)
//  Error div → shows validation message
//  Button: Find Words
//  Result div
// UI Example
// Enter Sentence:
// [ I love my country ]
// Error: (shown here)
// [ Find Words ]
// Result: (shown here)


const subBtn=document.getElementById("subBtn")

const input=document.getElementById('text')

const result=document.getElementById('resultDiv')

const error=document.getElementById('errorDiv')


subBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    
    // console.log(input.value);

    const inputValue=input.value
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

    if(inputValue.length==0){
        result.innerText=''
        error.innerText="Please Enter value"
        return
    }

    const arr=inputValue.split(" ")

    let smallestValue=arr.reduce((a,b)=>{
        if(a.length<=b.length){
            return a
        }
        else{
            return b
        }
    })

    let largestValue=arr.reduce((a,b)=>{
        if(a.length>=b.length){
            return a
        }
        else{
            return b
        }
    })
    error.innerText=''

    result.innerText=`
    Smallest Word : ${smallestValue}
    Largest Word : ${largestValue}`


    console.log("Largest--->",largestValue)
    console.log("Smallest--->",smallestValue);
    

    
})

