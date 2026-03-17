// 6. Checkbox Controls
// HTML Design
// • Title: Checkbox Manager
// • 5 Checkboxes
// • 3 Buttons
// UI
// ☐ Option 1
// ☐ Option 2
// ☐ Option 3
// ☐ Option 4
// ☐ Option 5
// [Check All] [UnCheck All] [Toggle]


const check = document.getElementById('checkBtn')

const Uncheck = document.getElementById("UncheckBtn")

const toggle = document.getElementById("ToggleBtn")



check.addEventListener("click", (e) => {
    e.preventDefault()

    const box=document.querySelectorAll('#checkboxx')
    // console.log(box);
    
    for(let i=0;i<box.length;i++){
        box[i].checked=true
    }

}
)

Uncheck.addEventListener("click", (e) => {
    e.preventDefault()

    const box=document.querySelectorAll('#checkboxx')
    // console.log(box);
    
    for(let i=0;i<box.length;i++){
        box[i].checked=false
    }

}
)

toggle.addEventListener("click", (e) => {
    e.preventDefault()

    const box=document.querySelectorAll('#checkboxx')
    // console.log(box);
    
    for(let i=0;i<box.length;i++){
        box[i].checked=!box[i].checked
    }

}
)