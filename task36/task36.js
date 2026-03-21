// 36. Infinite Scroll Image Gallery 
// HTML Design 
// Image Grid 

// [img] [img] [img] 
// [img] [img] [img] 
// Behaviour 
// Scroll down → load more images 


const images = document.getElementById("image-grid")

function loadImages() {
    for (let i = 0; i < 10; i++) {
        const img = document.createElement('img')
        img.src = 'https://picsum.photos/id/25/5000/3333'
        img.width = 700
        images.appendChild(img)
    }
}
loadImages()

window.addEventListener("scroll", () => {
    if (scrollY) {
        loadImages()
    }
})