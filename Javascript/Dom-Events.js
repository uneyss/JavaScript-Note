const filterInput = document.getElementById("filter")
const todoForm = document.getElementById("todo-form")

todoForm.addEventListener("submit",submitform)


function submitform(e){
    console.log('Submit Eventi')
    e.preventDefault()
}

/* filterInput.addEventListener("focus",function(e){
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(e.target.placeholder)
    console.log(e.target.className)
}) */


/* 
filterInput.onfocus = function(){
    console.log('Naber')
} 
*/
console.log('Filter', filterInput)



// Keyboard Event

// Not : İnput alanından değer almak için e.target.value diyerek alabiliriz.
const header = document.querySelector(".card-header")
const todoInput = document.querySelector("#todo")

todoInput.addEventListener("keyup",changeText)

function changeText(e){
    header.textContent = e.target.value
    console.log(e.target.value)
}




// keypress Shift yukarı yön tuşları vb. görmüyor

/* document.addEventListener("keypress", run)

function run (e) {
    // console.log(e.which)
    console.log(e.key)
} */







// keydown Shift yukarı yön tuşları vb. görüyor

/* document.addEventListener("keydown", run)

function run (e) {
    // console.log(e.which)
    console.log(e.key)
} */




// keyup Tuşu bıraktığımız zaman çalışıyor

/* document.addEventListener("keyup", run)

function run (e) {
    // console.log(e.which)
    console.log(e.key)
} */