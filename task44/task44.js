// 44. Modal Popup (Basic) 
// HTML Design 
// [ Open Modal ] 
// Click → --------------------- 
//    Modal Title 
 
//    Hello User 
 
//    [Close] --------------------- 
// Behaviour 
// Overlay background.


const popup=document.getElementById('btn')

const overlay=document.getElementById('overlay')

const closeOverlay=document.getElementById('closeBtn')

popup.addEventListener('click',()=>{
    overlay.style.display='block'
})

closeOverlay.addEventListener('click',()=>{
    overlay.style.display='none'
})
