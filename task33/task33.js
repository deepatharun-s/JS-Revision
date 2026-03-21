// 33. Drag File Upload Area 
// HTML Design ----------------------- 
//  Drag file here 
//  or click to upload ----------------------- 
// Behaviour 
// • User drags image file 
// • Display file name 
// • Validate image only


const area = document.getElementById("imageArea")

const result = document.getElementById("resultDiv")


area.addEventListener("dragover", (e) => {
    e.preventDefault()
})

area.addEventListener("drop", (e) => {
    const file = e.dataTransfer.files[0]

    if ((file.name).endsWith(".jpg")) {
        result.innerText = "Image file name = " + file.name
    }
    else {
        result.innerText = "Only images Allowed"
    }

})