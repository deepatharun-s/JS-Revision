// 35. Infinite Scroll List 
// HTML Design 
// Item 1 
// Item 2 
// Item 3 
// ... 
// Behaviour 
// • Load 10 items initially 
// • When user reaches bottom 
// • Load 10 more automatically 

const items = document.getElementById("uList")

function loadItems() {
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li')
        li.id = `item${[i]}`
        li.innerText = `items${i}`
        items.appendChild(li)
    }
}
loadItems()



window.addEventListener("scroll", () => {
    if (scrollY) {
        loadItems()
    }
})