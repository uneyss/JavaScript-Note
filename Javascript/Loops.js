// Loops 

/* For */

/* 

for([başlangıçAtaması]; [koşulifadesi]; [döngüSonundaÇalışacakİfade]) {
    yapılacak işlem
}
10'a kadar yazdırma 
for(let index = 0; index < 10; index++){
    console.log('İndex : ', index)
}


*/

let users = ["Lorem", "İpsum", "Dolor", ""]
const userListDOM = document.querySelector('#userList')

for(index = 0; index < users.length; index++){
    const liDom = document.createElement('li')
    liDom.innerHTML= users[index]
    userListDOM.appendChild(liDom)
}

/* Break & Contunie */

const LOREM_LIST = [
    `lorem`, `ipsum`, `dolor`,`amet`, `consectetur`, `adipisicing`, `elit`, ``
]

let counter = 0 
/* for(; counter < 10; counter++){
    console.log('break', counter)
    if(counter === 5) {break} // Buraya kadar gel anlamına geliyor.
} */

/* for(; counter < 10; counter++){
    if(counter === 5) {continue} // 
    console.log('continue', counter)
} */
const UL_DOM = document.querySelector("#userList")

/* for(i=0; i < LOREM_LIST.length; i++){
    if(LOREM_LIST[i] == "dolor") {break}
    let liDOM = document.createElement('li')
    liDOM.innerHTML = LOREM_LIST[i]
    UL_DOM.append(liDOM) 
} */

for(i=0; i < LOREM_LIST.length; i++){
    if(LOREM_LIST[i] == "continue") {continue}
    let liDOM = document.createElement('li')
    liDOM.innerHTML = LOREM_LIST[i]
    UL_DOM.append(liDOM) 
}

/* While */
/* 
while(koşul){
    Yapılacak işlem;
}
*/
let x = 0
while(x < 10){
    console.log('while', x)
    x ++

}


/* let userName; 

while(!userName) // Yok olduğu sürece çalış 
{
    userName = prompt("Kullanıcı Aadınızı Giriniz :")
    console.log(userName)
} */


/* forEach */
/* 
arr.forEach(function(value, index, array) {
  index ve array kullanmak opsiyoneldir
} 
*/
const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

PRODUCTS.forEach((product, index, array) => array[index] = product + " 111")
console.log(PRODUCTS)

const userListDOm = document.querySelector('#userList')
PRODUCTS.forEach(item =>{
    const liDom = document.createElement('li')
    liDom.innerHTML= item 
    userListDOm.appendChild(liDom)
}
)


/* Array filter */

// 5harften fazla olanalar (6)
const PRODUCTS_2 = ["MİC", "CABLE", "SPEAKER", "DESKTOP PC", "SERVER", "MOUSE", "KEYBOARD"]

const New_Products = PRODUCTS_2.filter(new_item => new_item.length > 6)
console.log('New Products', New_Products)

// Aktif olanlar
const USERS = [
    {fullname: "Anonim 1", isActive: false},
    {fullname: "Anonim 2", isActive: true},
    {fullname: "Anonim 3", isActive: false},
    {fullname: "Anonim 4", isActive: true},
]

const Active_users = USERS.filter(new_users => new_users.isActive === true) // direkt olarak true istiyorsak "new_users.isActive yazmamız yeterli. Sadece false için kullanıcaksak mantıklı."
console.log('Active Users', Active_users)




/* Map */
const USERS_2 = ["Ayşe", "Mehmet", "Tuğçe", "Aksel"]

const NEW_USERS = USERS_2.map(user => user.toLowerCase())
console.log('Lower Case', NEW_USERS)

/* const USERS_OBJ = USERS.map(i => 
 {
     
    return{userName: item, shortName: `${item[0]}`, newName: `${item[0]}.toUpperCase()`}
 }   
) */