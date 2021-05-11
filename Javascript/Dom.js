/* Document Object Section */

value  = document.all.length 
value  = document.all[0] 


/* 
HTML collection üzerinde gezinmek için ilk önce Array'e çeviriyoruz
const elements = document.all
const collections = Array.from(elements)
collections.forEach(function(collection){
console.log(collections)
}) 
*/

// Body'e erişmek
value = document.body 
value = document.head // Head'e erişmek


// Scriptler
value = document.scripts
value = document.scripts.length
value = document.scripts[0]

// Linkler 
value = document.links
value = document.links[0]
value = document.links[document.links.length-1]
value = document.links[document.links.length-1].getAttribute("class")
value = document.links[document.links.length-1].getAttribute("href")
value = document.links[document.links.length-1].className
value = document.links[document.links.length-1].classList

// Formlar 
value = document.forms
value = document.forms.length
value = document.forms[0]
value = document.forms["form"]
value = document.forms[0].id
value = document.forms[0].getAttribute("id")
value = document.forms[0].name
value = document.forms[0].getAttribute("name")

value = document.forms[0].method
console.log("Document Section", value)





/* Elemnt Section */


// Elementi id'ye göre seçme 
let element
element = document.getElementById("todo-form")
element = document.getElementById("tasks-title")

// Elementi class'a göre seçme
element = document.getElementsByClassName("list-group-item") 
element = document.getElementsByClassName("list-group-item")[0] 
element = document.getElementsByClassName("card-header")

// Element tag'e göre seçme
element = document.getElementsByTagName("li") 
element = document.getElementsByTagName("div")

// Yukarıdakilerin hepisni tek metodla yapmak için "querySelector()" kullanabiliriz. (Css Selector)
element = document.querySelector("#todo-form")
element = document.querySelector("#tasks-title")
element = document.querySelector(".list-group-item")
element = document.querySelector("li")
element = document.querySelector("div")

// Çoklu element için
element = document.querySelectorAll(".list-group-item") // Node List dönüyor. forEach() kullanabiliyoruz.

element.forEach(function(el){
    console.log(el)
})
console.log("Elemenet Section", element)





/* Style Section */
const style = document.querySelector("#clear-todos")

// Elementlerin özellikler
/* 
console.log("Style Section", style.id)
console.log("Style Section", style.className)
console.log("Style Section", style.classList)
console.log("Style Section", style.classList[0])
console.log("Style Section", style.textContent)
console.log("Style Section", style.innerHTML)
console.log("Style Section", style.href)
console.log("Style Section", style.style) 
*/


// Style ve Element özelliklerini değiştirme
/* 
style.className = "btn btn-success" 
style.style.color = "#000"
style.style.marginLeft = "50px"
style.href = "https://www.google.com.tr"
style.target = "_blank"
style.textContent = "Silin"
style.innerHTML = "<span style = 'color:green'>Silin</span>" 
console.log("Style Section",style)
*/

/* 
const elements = document.querySelectorAll(".list-group-item")
elements.forEach(function(el){
    el.style = "red"
    el.style.background = "#eee"
}) 
*/

let element2 = document.querySelector("li:first-child")
element2 = document.querySelector("li:nth-child(1)")
element2 = document.querySelector("li:nth-child(2)")
element2 = document.querySelector("li:nth-child(3)")
element2 = document.querySelector("li:nth-child(4)")
element2 = document.querySelectorAll("li:nth-child(odd)")
element2 = document.querySelectorAll("li:nth-child(even)")

element2.forEach(function(el){
    el.style.background = "#ccc" 
    el.style.color = "red" 
})
console.log("Element 2", element2)



/* Element üzerinde gezinme */

let values
const todoList = document.querySelector(".list-group")
const todo = document.querySelector(".list-group-item:nth-child(2)")
const cardrow = document.querySelector(".card.row")

values = todoList
values = todo
values = cardrow

// Child Nodes -Text Dahil
values = todoList.childNodes
values = todoList.childNodes[0]

// Children - Element
values = todoList.children
values = todoList.children[0]
values = todoList.children[todoList.children.length - 1]
values = todoList.children[2].textContent = "Değişti"

values = cardrow
values = cardrow.children
values = cardrow.children[2].children[1].textContent = "Burası da değişti"

values = todoList
values = todoList.firstElementChild
values = todoList.lastElementChild
values = todoList.children.length
values = todoList.childElementCount

// Parent Seçme 
values = cardrow
values = cardrow.parentElement
values = cardrow.parentElement.parentElement

// Element Kardeşleri 
values = todo
values = todo.previousElementSibling
values = todo.nextElementSibling
values = todo.nextElementSibling.nextElementSibling
values = todo.previousElementSibling.previousElementSibling
console.log("Child Section", values)