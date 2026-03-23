// 53. Global Event Bus (Custom Event System) 
// Task 
// Create a simple publish/subscribe event system. 
// Example 
// eventBus.subscribe("userLogin", callback) 
// eventBus.publish("userLogin", {name:"John"}) 
// Behaviour 
// Multiple components can listen to same event. 

let eventBus = {

    events: {},

    subscribe(event, callback) {
        if (!this.events[event]) this.events[event] = []
        this.events[event].push(callback)
    },

    publish(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(ele => ele(data))
        }
    }

}

eventBus.subscribe("userLogin", (data) => {
    document.getElementById('resultDiv').innerText=`User Logged : ${data.name}`
    console.log("User Logged:", data.name)
})

function login() {
    eventBus.publish("userLogin", { name: "Deepatharun" })
}