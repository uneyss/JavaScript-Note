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









// Mouse Eventleri 
const cardMain = document.querySelectorAll(".card-body")[1]
const title = document.querySelector("#tasks-title")

// Click Event 
title.addEventListener("click",run)


// Double Click Evnet 
title.addEventListener("dbclick",run)


// Mouse Down
title.addEventListener("mousedown",run)

// Mouse Up
title.addEventListener("mouseup",run)

// Mouse Over Elementin üzerine gelmemiz yeterli
title.addEventListener("mouseover",run)

// Mouse Out 
title.addEventListener("mouseout",run) 
cardMain.addEventListener("mouseover",run)

// Mouse Enter - Mouse Leave

cardMain.addEventListener("mouseenter",run)


function run(e){
console.log(e.type)
}







// Input Eventleri 

const filter = document.getElementById("filter")

// Dom Loaded
document.addEventListener("DOMContentLoaded",load)

function load(e){
    console.log('Sayfa Yüklendi')
}

// Focus 
filter.addEventListener("focus",run)
// Blur
filter.addEventListener("blur",run)
// Paste
filter.addEventListener("paste")
// Copy
filter.addEventListener("copy",run)
// Cut
filter.addEventListener("cut",run)
// Select 
filter.addEventListener("cut",run)

function run(e){
    console.log(e.type)
}



// Event Capturing - Event Bubbling 