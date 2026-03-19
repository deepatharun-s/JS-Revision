// 28. Toggle Dark Mode 
// HTML Design 
// • Button (<button>Toggle Dark Mode</button>_ 
// Behaviour 
// Switch between 
// Light mode 
// Dark mode 
 
// Use: document.body.classList.toggle()



const btn=document.getElementById('subBtn')


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    document.body.classList.toggle('switchTheme')
})