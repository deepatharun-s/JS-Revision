// 42. Auto Image Slider 
// HTML Design 
// Image Banner 
// Behaviour 
// Images automatically change every → 3 seconds 


const image=document.getElementById('slider')

const images=[
    'https://picsum.photos/id/25/5000/3333',
    'https://picsum.photos/id/26/4209/2769',
    'https://picsum.photos/id/20/3670/2462'
]

let index=0

function autoSlider(){
    index=(index+1)%images.length
    image.src=images[index]
}

setInterval(autoSlider,3000)

autoSlider()