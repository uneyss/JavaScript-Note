// Fetch API


// JSON dosyadan veri çekmek:
fetch("data/settings.json").then( // Dosyaya git
    response =>  response.json() // Datayı al 
).then(responseJson => { // Dataytı aldıktan sonra yazdır 
    console.log(responseJson)
    console.log(responseJson.username)
})

let userListDOM = document.querySelector("#userList")


// API üzerinden veri çekmek: 
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement("li")
        liDOM.innerHTML = item.title
        userListDOM.appendChild(liDOM)
    })
})