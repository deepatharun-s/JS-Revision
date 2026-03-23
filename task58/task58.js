// 58. Multi Step Form Wizard 
// HTML Design 
// Step 1: Personal Info 
// Step 2: Address 
// Step 3: Review 
// UI 
// [Next] [Previous] 
// Behaviour 
// • Validate each step 
// • Save progress 
// • Prevent skipping steps. 

function next(step){
document.getElementById("step"+step).style.display="none"
document.getElementById("step"+(step+1)).style.display="block"
}

function prev(step){
document.getElementById("step"+step).style.display="none"
document.getElementById("step"+(step-1)).style.display="block"
}