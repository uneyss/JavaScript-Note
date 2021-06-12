// Değerler depolandığı zaman kapatsak bile sabit kalıyor Local Storage.
// Oturum açık kaldığı sürece depolanıyor Session Storage.
// Aynı key'i tekrardan farklı bir value ile girersek value güncellenecek


// Session Storage - Key - Value 


// Button
const add = document.querySelector("#add")
const del = document.querySelector("#delete")
const clear = document.querySelector("#clear")

// Input
const addkey = document.querySelector("#addkey")
const addvalue = document.querySelector("#addvalue")
const deletekey = document.querySelector("#deletekey")

add.addEventListener("click", addItem)
del.addEventListener("click", deleteItem)
clear.addEventListener("click", clearItem)

function addItem(e){
    sessionStorage.setItem(addkey.value, addvalue.value)
}
function deleteItem(e){
    sessionStorage.removeItem(deletekey.value)
}
function clearItem(e){
    sessionStorage.clear()
}



// Local Storage 


// Set Item

localStorage.setItem("deneme", "123")
localStorage.setItem("deneme1", "1234")
localStorage.setItem("deneme2", 12345)


// Get Item
const value = localStorage.getItem("deneme2")
console.log(value)
console.log(typeof value)

// Clear Local Storage
// localStorage.clear()


console.log("Var mı ? ",localStorage.getItem("sport"))

// Local Storage - Array 
const todos = ["Todo 1", "Todo 2", "Todo 3"]
localStorage.setItem("todos", JSON.stringify(todos))

const value2 = JSON.parse(localStorage.getItem("todos"))
console.log(value2)