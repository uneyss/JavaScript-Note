 // Local Storage

/* 

localStorage.setItem('myCat', 'Tom'); // Set ile tanımlıyoruz.
localStorage.getItem('myCat'); // Get ile alıyoruz.
localStorage.removeItem('myCat') // Remove ile siliyoruz. 
// Hangi DOM'daysak o bilgi orada gözükür.  Key - Value ilişkisi vardır. Web sitesinde görmek için App > Local Storage.

*/

/* 
Kompleks bir yapımız varsa JSON kullanmamız gerekir. İlk önce stringify ile dönüştürüyoruz, 
daha sonra ise parse ediyoruz.

let user = {userName: "uneysalkis", isActive: true}
localStorage.setItem('userInfo',JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo')
userInfo = JSON.parse(userInfo)
console.log(userInfo)


let items = [1,2,3,4,5, user]
localStorage.setItem('newItem' , JSON.stringify(items))
JSON.parse(localStorage.getItem('newItem'))
console.log("İtemlerle Yaptığım Kısım ", items)

*/

// Local Storage Counter

// Counter içerisinde bilgi var mı            ? Evet var o zaman bilgi number olsun     : Hayır yok o zman 0 olsun 
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter


increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter 
}