// 37. Infinite Scroll API Loader 
// HTML Design 
// User List 
 
// Name 
// Email 
// Phone 
// Behaviour 
// Fetch from API 
// Example 
// https://jsonplaceholder.typicode.com/users 
// Load more users on scroll. 

const result=document.getElementById('resultDiv')

async function fetchAPI() {
    const res=await fetch("https://jsonplaceholder.typicode.com/users")

    if(!res.ok){
        console.error('Error');
        return
    }

    const data=await res.json()

    const arr=data.map((ele)=>{
        const div=document.createElement('div')
        div.className="user"
        div.innerText=`Name : ${ele.name} 
        Email : ${ele.email}
        Phone : ${ele.phone}`
        result.appendChild(div)
    })
    // console.log(arr);
    
    
}
fetchAPI()


window.addEventListener("scroll", () => {
    if (scrollY){
        fetchAPI()
    }
})