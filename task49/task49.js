// 49. Pagination (Basic) 
// HTML Design 
// User List 

// Item 1 
// Item 2 
// Item 3 

// Bottom 
// Prev  1  2  3  4  Next 
// Behaviour 
// Show 10 items per page


const result = document.getElementById('resultDiv')

const data = []

for (let i = 1; i < 50 + 1; i++) {
    data.push('Item' + i)
}
// console.log(data);

let page = 1
let perpage = 10

function loadItems() {
    result.innerText = ''
    let start = (page - 1) * perpage
    let end = start + perpage

    // console.log("start", start);
    // console.log("end", end);


    const a = data.slice(start, end)
    // console.log(a);

    for (let i = 0; i < a.length; i++) {
        const li = document.createElement('li')
        li.innerText = a[i]
        result.appendChild(li)
    }

}
loadItems()



document.getElementById("nextBtn").addEventListener("click", () => {
    if (page < 5) {
        page++
    }
    loadItems()
})

document.getElementById("prevBtn").addEventListener("click", () => {
    if (page > 1) {
        page--
    }
    loadItems()
})

document.getElementById("btn1").addEventListener("click", () => {
    page = 1
    loadItems()
})
document.getElementById("btn2").addEventListener("click", () => {
    page = 2
    loadItems()
})
document.getElementById("btn3").addEventListener("click", () => {
    page = 3
    loadItems()
})
document.getElementById("btn4").addEventListener("click", () => {
    page = 4
    loadItems()
})