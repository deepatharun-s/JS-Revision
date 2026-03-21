// 32. Drag & Drop Reordering List 
// HTML Design 
// • List of tasks 
// 1. Task A 
// 2. Task B 
// 3. Task C 
// Behaviour 
// User should be able to drag and reorder tasks. 
// Example 
// Before → A B C 
// After drag  → C A B

const items = document.querySelectorAll("#dragList li")


let = drag
items.forEach((item) => {
    item.addEventListener("dragstart", () => {
        drag = this
    })

    item.addEventListener("dragover", (e) => {
        e.preventDefault()
    })

    item.addEventListener("drop", () => {

        this.parentNode.insertBefore(drag, this)
    })
})