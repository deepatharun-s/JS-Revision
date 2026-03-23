// 51. Debounce vs Throttle Scroll Logger 
// HTML Design 
// • Large scrollable page 
// • Console log scroll position 
// Behaviour 
// • Implement Debounce version 
// • Implement Throttle version 
// • Compare results. 
// Example 
// Scroll Position: 450px

const result=document.getElementById('resultDiv')

function debounce(callback,delay){
    let timeout
    return function(){
        clearTimeout(timeout)
        timeout=setTimeout(()=>callback(),delay)
    }
}

window.addEventListener("scroll",debounce(()=>{
    result.innerText=`Debounce version- Scroll Position: ${window.scrollY}px`
    console.log("Debounce version- Debounce",window.scrollY)
},2000))


function throttle(callback, delay) {
    let isThr = false;

    return function () {
        if (!isThr) {
            isThr = true;

            setTimeout(() => {
                callback()
                isThr = false;
            }, delay);
        }
    }
}

window.addEventListener('scroll', throttle(() => {
    result.innerText=`Throttle version- Scroll Position: ${window.scrollY}px`
    console.log('Throttle version- Throttle',window.scrollY);
}, 1000));