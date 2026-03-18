// 9. Show Date & Time
// HTML Design
// • Single Button
// • Result div
// UI
// [ Show ]
// Current Date & Time: 16 Mar 2026 10:30 AM


const btn=document.getElementById('Btn')

const result=document.getElementById('resultDiv')

btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const DateTime=new Date().toLocaleString()

    result.innerText=DateTime

})