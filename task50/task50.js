// 50. API Pagination 
// HTML Design 
// Products Table 

// Pagination → 1 2 3 4 5 

// Behaviour 
// Fetch data from API 
// Example 
// ?page=1 
// ?page=2


// 49. Pagination (Basic) 
// HTML Design 
// User List 

// Item 1 
// Item 2 
// Item 3 

// Bottom 
// Prev  1  2  3  4  Next 
// Behaviour 
// Show 10 items per page


let page = 1

function loadPage(change) {

    page += change

    if (page < 1) page = 1

    fetch("https://dummyjson.com/products?page=" + page)
        .then(res => res.json())
        .then(data => {

            let output = ""

            data.products.forEach(p => {
                output += p.title + "<br>"
            })

            document.getElementById("list").innerHTML = output

        })

}

loadPage(0)


