// 5. Find Largest Number
// HTML Design
// • Title: Largest Number Finder
// • Textbox → input like 1,2
// • Error div
// • Button
// • Result div
// UI
// Enter Numbers
// [ 4,8 ]
// Error here
// [ Find Largest ]
// Result: 8



const input=document.getElementById('input')

const error=document.getElementById("errorDiv")

const result=document.getElementById("resultDiv")

const btn=document.getElementById('subBtn')


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const inputValue=input.value 



    const arr=inputValue.split(',')

    // console.log(arr);

    let max=arr[0]

    for(let i=0;i<arr.length;i++){
        if (Number(arr[i]>max)){
            max=arr[i]
        }
    }
    // console.log(max);
    result.innerText=`Largest : ${max}`

}
)