// 27. Dynamic Table Row Add 
// HTML Design 
// • Name textbox 
// • Age textbox 
// • Add button 
// • Table 
// Structure 
// <input type="text" placeholder="Name"> 
// <input type="text" placeholder="Age"> 
 
// <button>Add</button> 
 
// <table> 
// <tr> 
// <th>Name</th> 
// <th>Age</th> 
// </tr> 
// </table> 
 
// Behaviour 
// Add new rows dynamically. 
// Example 
// Name: John 
// Age: 25 
 
// Table becomes 
// Name   Age 
// John   25




const nameInput=document.getElementById('nameinput')

const ageInput=document.getElementById('ageinput')

const error=document.getElementById("errorDiv")

const result=document.getElementById("resultDiv")

const btn=document.getElementById('subBtn')


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    error.innerText=''

    const name=nameInput.value.trim()

    const age=ageInput.value

    if (name=='' || age==''){
        error.innerText="Please enter both values"
        return
    }

    const tr=document.createElement('tr')

    tr.innerHTML=`<td>${name}</td>
    <td>${age}</td>`

    result.appendChild(tr)


})