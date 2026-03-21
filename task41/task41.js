// 41. Basic Image Slider 
// HTML Design 
// [ < ]   Image   [ > ] 
// Behaviour 
// Click next/prev to change image. 


const image=document.getElementById('slider')

const prev=document.getElementById('prev')

const next=document.getElementById('next')

const images=[
    'https://picsum.photos/id/25/5000/3333',
    'https://picsum.photos/id/26/4209/2769',
    'https://picsum.photos/id/20/3670/2462'
]

let index=0

image.src=images[0]

next.addEventListener("click",()=>{
    index=(index+1)%images.length
    image.src=images[index]
})

prev.addEventListener("click",()=>{
    index=(index-1+images.length)%images.length
    image.src=images[index]
})