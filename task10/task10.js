// 10. Registration Form 
// HTML Design 
// Fields: 
// • First Name * 
// • Last Name * 
// • Email * 
// • Phone * 
// • Zipcode 
// • Address 
// • Submit Button 
// • Error message div 
// Structure 
// <form> 
 
// First Name*  <input type="text"> 
// Last Name*   <input type="text"> 
// Email*       <input type="text"> 
// Phone*       <input type="text"> 
// Zipcode      <input type="text"> 
// Address      <textarea></textarea> 
 
// <div id="error"></div> 
 
// <button type="submit">Register</button> 
 
// </form>



const zipcode=document.getElementById('zipcode')

const address=document.getElementById('address')

const error=document.getElementById('error')

const result=document.getElementById('resultDiv')

const btn=document.getElementById('subBtn')


btn.addEventListener('click',(e)=>{
    e.preventDefault()

    console.log(zipcode.value);
    error.innerText=''
    result.innerText=''

    if (!zipcode.value || !address.value){
        error.innerText="All fields are required"
        return
    }

    result.innerText='Form Submitted Successfully'
})