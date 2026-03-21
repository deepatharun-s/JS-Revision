// 31. Basic Drag & Drop Between Two Boxes 
// HTML Design 
// • Two containers 
// o Available Items 
// o Selected Items 
// UI Example 
// Available Items          Selected Items 

// [Item 1]                 (Drop Here) 
// [Item 2] 
// [Item 3] 
// Behaviour 
// • Drag item from left box 
// • Drop into right box 


const items = document.querySelectorAll(".item")

const selectedItems = document.getElementById("selectedItems")


items.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text",e.target.id)
    })
})

selectedItems.addEventListener("dragover", (e) => {
    e.preventDefault()
})

selectedItems.addEventListener("drop", (e) => {
    e.preventDefault()

    let id=e.dataTransfer.getData("text")

    let dragElement=document.getElementById(id)

    selectedItems.appendChild(dragElement)

})