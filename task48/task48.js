// 48. OTP Paste Feature 
// Behaviour 
// User pastes 
// 123456 
// Automatically fills all boxes. 

let inputs=document.querySelectorAll("input")

document.addEventListener("paste",function(e){

let data=e.clipboardData.getData("text")

for(let i=0;i<inputs.length;i++){
inputs[i].value=data[i] 
}

})

