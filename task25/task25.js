// 25. Show / Hide Password 
// HTML Design 
// • Password textbox 
// • Checkbox 
// Structure 
// <input type="password" id="password"> 

// <input type="checkbox" id="toggle"> 
// <label>Show Password</label> 
// Behaviour 
// If checkbox checked 
// password type → text 
// Otherwise:  text → password 


const input = document.getElementById('password')

const btn = document.getElementById('toggle')


btn.addEventListener("change", (e) => {
    e.preventDefault()

    if (input.type == 'text') {
        input.type = 'password'
    }
    else {
        input.type = 'text'
    }

})