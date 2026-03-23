// 56. Search with Highlighted Matches 
// HTML Design 
// Search: [ react ] 

// Articles List 
// Behaviour 
// Text → Learn React and JavaScript 
// Should become → Learn <mark>React</mark> and JavaScript 

function highlight() {

    let input = document.getElementById("search").value
    let text = "Learn React and JavaScript"

    let regex = new RegExp(input, "gi")

    let result = text.replace(regex, match => `<mark>${match}</mark>`)

    document.getElementById("text").innerHTML = result

}