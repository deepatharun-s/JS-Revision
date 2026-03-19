// 26. Filter List Search 
// HTML Design 
// • Search textbox 
// • List of items 
// Behaviour 
// Typing man 
// Visible result 
// Mango 
// Other items hidden.


const input = document.getElementById('input')


const result = document.getElementById("resultDiv")



input.addEventListener("input", (e) => {
    e.preventDefault()

    const inputValue = input.value
    result.innerText = ''

    const arr = ['Apple', 'Banana', 'Grapes', 'JackFruit', 'Kiwi', 'Watermelon']

    const newarr = arr.filter((ele) => {
        if (ele.toLowerCase().includes(inputValue)) {
            const li = document.createElement('li')
            li.innerHTML = `<li>${ele}</li>`
            result.appendChild(li)
        }
    })

})