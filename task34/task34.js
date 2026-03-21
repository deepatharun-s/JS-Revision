// 34. Kanban Board Drag & Drop 
// HTML Design 
// TODO          IN PROGRESS          DONE 
// ---------------------------------------- 
// Task 1 
// Task 2 
// Behaviour 
// User can drag task between columns 
// Example 
// TODO -> IN PROGRESS 

const tasks = document.querySelectorAll(".item")

const progressTask = document.getElementById("progressTask")

const doneTask = document.getElementById("doneTask")




tasks.forEach((task) => {
    task.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id)
    })
})

progressTask.addEventListener("dragover", (e) => {
    e.preventDefault()
})

progressTask.addEventListener("drop", (e) => {
    e.preventDefault()

    let id = e.dataTransfer.getData("text")

    let dragElement = document.getElementById(id)

    progressTask.appendChild(dragElement)

})

doneTask.addEventListener("dragover", (e) => {
    e.preventDefault()
})

doneTask.addEventListener("drop", (e) => {
    e.preventDefault()

    let id = e.dataTransfer.getData("text")

    let dragElement = document.getElementById(id)

    doneTask.appendChild(dragElement)

})