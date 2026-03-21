// 39. Debounced API Search 
// HTML Design 
// Search GitHub Users 
 
// [ search username ] 
// Behaviour 
// Call API → https://api.github.com/search/users?q= 
// Use debounce 500ms






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

async function fetchAPI(input) {
    const res=await fetch(`https://api.github.com/search/users?q=${input}`)
    // console.log(res);
    if (!res.ok){
        console.error("Error");
        return
    }
    const data=await res.json()
    const a=data.items
    console.log(a);
    

    // console.log(data.items);
    const arr=a.map((ele)=>{
        return ele.login
    }).filter((val)=>{
        if(val.includes(input)){
            return val
        }
    })
    console.log(arr);
    result.innerText=''

    for (let i=0;i<arr.length;i++){
        const li=document.createElement('li')
        li.innerText=arr[i]
        result.appendChild(li)
    }
    
    // result.innerText=JSON.stringify(arr)
}

const doDebounce=debounce(fetchAPI,500)

const input=document.getElementById('input')

input.addEventListener("input",()=>{
    doDebounce(input.value)
})