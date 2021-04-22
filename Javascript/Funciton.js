// Function 

// Bölüm sonu egzersizi 
let greeting = document.querySelector("#greeting")
greeting.addEventListener("click",domClik)
greeting.addEventListener("mouseover", domClik)

function domClik() {
    console.log("tıklandı")
    // this.innerHTML = "Tıklandığı için bilgi değişti"
    // greeting.className += "text-primary text-center";
    this.style.color == "red" ? this.style.color ="blue" : this.style.color = "red"

}

let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter


increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)


function clickEvent() {
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter 
}