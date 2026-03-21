// 38. Debounce Search Input 
// HTML Design 
// Search Products 
 
// [ Search box ] 
// Behaviour 
// Search should trigger after 500ms pause 
// Example 
// Typing → lap 
 
// Search triggers once.

const result=document.getElementById('resultDiv')

function debounce(callback,delay){
    let timeout
    return function(...args){
        clearTimeout(timeout)
        timeout=setTimeout(()=>{
            callback.apply(this,args)
        },delay)
    }
}

function search(input){
    result.innerText=`Searching for ${input}`
}

const doDebounce=debounce(search,500)

const input=document.getElementById('input')

input.addEventListener("input",()=>{
    doDebounce(input.value)
})