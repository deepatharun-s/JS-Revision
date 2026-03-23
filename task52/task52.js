// 52. Lazy Load Images (Performance Optimization) 
// HTML Design 
// Image Gallery 

// [ image ] 
// [ image ] 
// [ image ] 
// Images should load only when visible in viewport. 
// Behaviour 
// Use → IntersectionObserver 
// Example 
// Before scroll → images not loaded 
// After scroll → images load.


const gallery = document.getElementById("gallery")

const area = document.getElementById("area")


function loadImages() {
    for (let i = 0; i < 10; i++) {
        const img = document.createElement('img')
        img.src = 'https://picsum.photos/id/25/5000/3333'
        img.width = 700
        gallery.appendChild(img)
    }
}
loadImages()


const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            loadImages()
        }
    })
})

imageObserver.observe(area)