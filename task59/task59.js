// 59. Detect Internet Connection Status 
// HTML Design 
// Connection Status 

// Online 
// Offline 
// Behaviour 
// Use 
// navigator.onLine 
// Listen for 
// online 
// offline 
// Example →  You are offline 

document.getElementById('btn').addEventListener("click", () => {
    if (navigator.onLine) {
        document.getElementById('resultDiv').innerText = `You are Online`
    }
    else {
        document.getElementById('resultDiv').innerText = `You are Offline`
    }
})