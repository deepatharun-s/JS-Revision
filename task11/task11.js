// 11. Get Full URL 
// HTML Design 
// Button + Result 
// <button onclick="getURL()">Get URL</button> 
// <div id="result"></div> 
 
// JS concept → window.location.href 



const btn=document.getElementById('subBtn')
const result=document.getElementById('resultDiv')

btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const res=window.location.href

    result.innerText=res
})