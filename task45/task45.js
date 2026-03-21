// // 45. Modal Popup Close Methods 
// Behaviour 
// Modal should close when 
// • Clicking close button 
// • Clicking outside modal 
// • Pressing ESC key


const popup = document.getElementById('btn')

const overlay = document.getElementById('overlay')

const closeOverlay = document.getElementById('closeBtn')

// const background=document.getElementById('background')


popup.addEventListener('click', () => {
    overlay.style.display = 'block'
})

closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none'
})

document.addEventListener('click',(e)=>{
    if(e.target.id=='background'){
    overlay.style.display = 'none'
    }
})

document.addEventListener('keyup', (e) => {

    if (e.key === "Escape") {
        overlay.style.display = 'none'
    }
})