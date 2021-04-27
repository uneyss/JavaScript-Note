// Object (Nesne)

// Nasıl Oluşturulur ? 

let item1 = {}
let item2 = new Object()

let object1 = {obj: 1}

console.log("item1", item1)
console.log("object1", object1)

/* Key Value */

let laptop1 = {
    brand: "Apple",
    model: "Macbook Pro",
    "2kg" : 2,
    modelName : "Macbook Pro",
    model_Name : "Macbook Pro"
}

console.log(laptop1)

// Doğru Anahtar Bilgisi Oluşturmak
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])

// Anahtar Bilgisine Yeni Değer Eklemek
laptop1.brand = "Mac"
laptop1["brand"]= "Mac1"
console.log(laptop1)

// Yeni Bilgi Eklemek
laptop1.version = "12.00"
console.log(laptop1)

// Anahtar Bilgilerine Ulaşmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(Object.keys[laptop1])

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

// Değer Bilgilerine Ulaşmak (values) -> Object.values(item)
console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value =>{
    console.log("value: ", value)
})

/* Object İçinde Metot Eklemek */

let user1 = {
    firstName: "Üneys",
    lastName: "Alkış",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function (){
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
    }
}

console.log(user1.shortName())



// Object Ve Array Destructing

// Object Destructring 

let settings = {
    userName: "LoremIpsum",
    password: "BadPassword",
    isActive: false,
    ip:"120.000.000",
    serverName: "uneysalkis.com"
}

// Obje İçindeki Bilgilerin Tek Seferde çıkarılması 

let userName = settings.userName
console.log(userName)

let {userName, password, isActive, ip, serverName} = settings
console.log(userName, password, isActive, ip, serverName)

let {userName: user, password, isActive, ip: serverIP, serverName} = settings // AS gibi almak rename && destructring


// Obje İçindeki Bazı Bilgilerin  çıkarılması
let {userName: userName2, password: password2, isActive: isActive2, ...newSettings} = settings  // ...newSettings kalanını buraya at demek

// Objenin Destructing İle Kopyalanması

/* 
Hatalı
let settings2 = settings
settings2.userName = "Değişen Bilgi"
console.log(settings)  
console.log(settings2)   
*/

// Doğru
let settings2 = {...settings} // Şeklini çıkart boz settings2'ye ekle
settings2.userName = "Değişen bilgi"
console.log(settings)  
console.log(settings2)

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)

// Object Kopyalama İle Aynı... let settings2 = {...settings}
let copyOfScore = [...score]
console.log(copyOfScore)