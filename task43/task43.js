// 43. Slider with Dots Navigation 
// HTML Design 
// [ Image ] 

// • • • • 
// Behaviour 
// Click dot → change image

const image = document.getElementById('slider')

const dots = document.getElementById('dotsarea')




const images = [
    'https://picsum.photos/id/25/5000/3333',
    'https://picsum.photos/id/26/4209/2769',
    'https://picsum.photos/id/20/3670/2462'
]

let index = 0

function showImage(index) {
    image.src = images[index]
}
showImage(index)

// for (let i = 1; i < images.length + 1; i++) {
//     const dot = document.createElement('span')
//     dot.innerHTML=`<button id='dot${i}' onclick="showImage(${i-1})">.</button>`
//     dots.appendChild(dot)
// }

for (let i = 1; i < images.length + 1; i++) {
    const dot = document.createElement('span')
    dot.id = 'dot' + i
    dots.appendChild(dot)

    dot.addEventListener("click", () => {
        showImage(i - 1)
    })
}