// 57. Undo / Redo System 
// HTML Design 
// Input Field 

// [Undo] [Redo] 
// Behaviour 
// User types 
// Hello 
// Hello World 
// Hello World JS 
// Undo 
// Hello World 
// Hello 
// Redo 
// Hello World 
// Hello World JS

let history = []
let index = -1

document.getElementById("input").addEventListener("input", function (e) {
    history = history.slice(0, index + 1)
    history.push(e.target.value)
    index++
})

function undo() {
    if (index > 0) {
        index--
        document.getElementById("input").value = history[index]
    }
}

function redo() {
    if (index < history.length - 1) {
        index++
        document.getElementById("input").value = history[index]
    }
}