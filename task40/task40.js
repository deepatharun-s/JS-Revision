// 40. Auto Suggest Search 
// HTML Design 
// Search Country → [ Ind ] 

// Suggestions 

// India 
// Indonesia 
// Indigo 
// Behaviour 
// • Typing should show suggestions 
// • Use debounce 


const result = document.getElementById('resultDiv')

function debounce(callback, delay) {
    let timeout
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback.apply(this, args)
        }, delay)
    }
}

function search(input) {


    const countries = ['India', 'Indonesia', 'Indigo', 'Nepal', 'South America', 'North America', 'Singapore', 'Malaysia']

    const arr = countries.filter((ele) => {
        if (ele.toLowerCase().includes(input)) {
            return ele
        }
    })

    result.innerText = arr

}

const doDebounce = debounce(search, 500)

const input = document.getElementById('input')

input.addEventListener("input", () => {

    doDebounce(input.value)
})