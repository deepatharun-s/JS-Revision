// 60. Idle User Detection 
// HTML Design 
// User Dashboard 
// Behaviour 
// If user inactive for 30 seconds 
// Show modal 
// Are you still there? →  [Yes] 
// If not confirmed → logout.


let timer

function startTimer() {

    timer = setTimeout(() => {
        document.getElementById("modal").style.display = "block"
    }, 3000)

}

function resetTimer() {
    clearTimeout(timer)
    document.getElementById("modal").style.display = "none"
    startTimer()
}

document.onmousemove = resetTimer
document.onkeydown = resetTimer

startTimer()