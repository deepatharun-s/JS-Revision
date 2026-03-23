// 55. API Request Loader with Retry 
// HTML Design 
// [ Fetch Data ] → Result Area 
// Behaviour 
// • Show loading spinner 
// • If API fails → retry 3 times 
// • If still fails → show error. 
// Example 
// Loading... 
// Retrying request... 
// Error: Failed after 3 attempts

function fetchData(retries = 3) {

    document.getElementById("resultDiv").innerHTML = "Loading..."

    fetch("https://jsonplaceholder.typicode.com/post")
        .then(res => {

            if (!res.ok) throw new Error("Error")
            return res.json()

        })
        .then(data => {
            document.getElementById("resultDiv").innerHTML = "Success"
        })
        .catch(() => {

            if (retries > 0) {
                document.getElementById("resultDiv").innerHTML = `Retrying...`
                setTimeout(() => fetchData(retries - 1), 1000)
                // fetchData(retries-1)
            } else {
                document.getElementById("resultDiv").innerHTML = "Failed after retries"
            }

        })

}