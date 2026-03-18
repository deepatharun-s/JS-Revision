// 12. Get Query Parameters 
// Example URL → http://www.mitrahsoft.com?technology=coldfusion&people=veryNice 
 
// HTML 
// <button>Get Params</button> 
// <div id="result"></div> 
// Output 
// Technology: coldfusion 
// People: veryNice 




const result=document.getElementById("resultDiv")

const btn=document.getElementById('subBtn')


btn.addEventListener("click",(e)=>{
    e.preventDefault()


    const params=new URLSearchParams('http://www.mitrahsoft.com?technology=coldfusion&people=veryNice')

    const technology=params.get('technology')

    const people=params.get('people')

    result.innerText=`Technology : ${technology}
    People : ${people}`
})