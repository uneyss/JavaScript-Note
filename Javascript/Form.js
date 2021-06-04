// Form Submıt
let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit', formSubmit)

let formDOM_2 = document.querySelector("#userForm2")
formDOM_2.addEventListener('submit', formSubmit_2)

function formSubmit(event){
    // Submit 
    event.preventDefault() // default işlemi engelledik...
    console.log("İşlem Gerçekleşti")
    // Input
    let scoreInputDOM = document.querySelector('#first')
    console.log(scoreInputDOM.value)
    localStorage.setItem('infoUser', scoreInputDOM.value)
}

function formSubmit_2(event){
	event.preventDefault()
    console.log("İşlem Gerçekleşti 2")
    let scoreInputDOM = document.querySelector('#name')
    console.log(scoreInputDOM.value)
    localStorage.setItem('infoUser2', scoreInputDOM.value)
}


// Last Form
let userFormDOM = document.querySelector('#lastForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (tittle, message, className="warning") => `
<div class=
"alert alert-${className} 
alert-dismissible 
fade show
" 
role=
"alert
">
  <strong>${tittle}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        alertDOM.innerHTML = alertFunction(
            "İşlem Tamamlandı",
            ":)",
            "success"
            )
        // Göndertikten sonra sıfırladık
        USER_NAME.value =""
        SCORE.value = ""
    }else {
        alertDOM.innerHTML = alertFunction(
        "Eyvah Bir Şeyler Ters Gitti !!",
        "Eksik Bilgi Girdiniz"
        
        )
    }
}

/* 
    <li class="list-group-item d-flex justify-content-between align-items-center">
        list item
        <span class="badge bg-primary rounded-pill">14</span>
    </li>
*/

let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span> 
    
    `
    liDOM.classList.add(
        'list-group-item', 
        'd-flex', 
        'justify-content-between', 
        'align-items-center'
        )
    userListDOM.append(liDOM)
}