// 13. Cookie Counter (CFML + JS) 
// HTML Design 
// Button + message 
// <form method="post"> 
// <input type="submit" value="Submit"> 
// </form> 
// Flow 
// 1. Page loads 
// 2. CFML creates cookie VisitsCounter 
// 3. Increment every submit 
// 4. JS alert shows value 
// Example 
// alert("Visits: 5"); 


const btn = document.getElementById('subBtn')


function cookieValue(name) {

    let cookies = document.cookie.split(";")
    console.log(cookies);
    

    for (let i = 0; i < cookies.length; i++) {

        let c = cookies[i].trim()
        console.log(c);
        

        if (c.indexOf(name + "=") === 0) {
            return c.substring(name.length + 1)
        }

    }

    return ""
}

btn.addEventListener('click', () => {

    let count = cookieValue("visitCounter")

    if (count === "") {
        count = 1
    } else {
        count = Number(count) + 1
    }

    document.cookie = "visitCounter=" + count

    alert("Visits : " + count)

})