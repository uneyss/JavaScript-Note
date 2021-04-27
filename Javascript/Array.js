// Array 


/* Array 1. Bölüm */
/* Array temel  */
console.log(
    "*****",
    "Array 1. Bölüm",
    "*****"
    )
// Array oluşturmak 
let domain = "Üneys Ahmet Alkış"
let isActive = false 
let items = [1, 2, 3, isActive, domain]
console.log(items)

let emptyArray = [] // Boş list

// Array içerisindeki eleman/oge sayısını öğrenme 

console.log(items.length) // Uzunluğunu alıyoruz 
// document.querySelector('#info').innerHTML = items.length

// Array içerisinde ilk elemanı çağırmak
console.log(items[2])

// Array ortadaki elemanı çağırmak 
console.log("Ortadaki : ", items[Math.floor(items.length / 2)])

// Array son elemanı çağırmak 
console.log(items[items.length - 1])

// Array olup olmadığı kontrol etme
console.log (typeof(items))// Object olarak çıktı veriyor.
console.log (Array.isArray(items)) // True çıktısı verir. 

// isArray -> True 

console.log("[] : ", Array.isArray([])) // True dönecektir çünkü array'i bu işaretle tanımlarız.
console.log("1 : ", Array.isArray(1)) // False
console.log("true : ", Array.isArray(true)) // False 





/* Array 2. Bölüm */
/* Array yapısına öğe ekleme ve Array içerisinden istenilen öğenin çıkarılması */
console.log(
    "*****",
    "Array 2. Bölüm",
    "*****"
    )
let items_2 = [10, 20, 30, 40]
console.log("items_2 - ilk hali ", items_2)

// Array sona öğe/eleman eklemek -> push 
items_2.push(50)
console.log("50 : ", items_2)

// Array başa öğe eklemek -> unshift
items_2.unshift(5)
console.log("5 : ", items_2)

// Array sondaki öğeyi çıkarmak -> pop
let lastItem = items_2.pop() // Son elemanı lastItem içerisine ekledik
console.log("lastItem", lastItem, "items_2", items_2)

// Array bastaki öğeyi çıkarımak -> shift 
let firstItem = items_2.shift() // Baştaki elemanı firstItem içerisine ekledik
console.log("firstItem", firstItem, "items_2", items_2)

// Array içindeki bir öğenin bilgisini değiştirmek 

items_2[0] = 3; // İlk
console.log(items_2)

items_2[items_2.length - 1] = 200 // Son
console.log(items_2)

// Array hem eleman eklemek hem eleman silmek -> splice
// Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.
console.log("Splice edilmeden önce ", items_2)
items_2.splice(1, 0, 300)
console.log("Splice ediltikten sonra ", items_2)




/* Array 3. Bölüm */
/* Metot kullanımı Array içinde Array oluşturma  */
let items_3 = [1, 2, 3, 4, 5]
console.log(
    "*****",
    "Array 3. Bölüm",
    "*****"
)
// Array içinde array
let femaleUsers = ["Fatma", "Ayşe", "Selin"]
let maleUsers = ["Ahmet", "Hakan", "Mehmet"]

items_3.unshift(femaleUsers)
items_3.push(maleUsers)

console.log(items_3)
console.log(items_3.length)
console.log(items_3[0].length) // Array içindeki istediğimiz Array'in bilgisini aldık 
console.log(items_3[0][0]) // Fatma bilgsine ulaştık

// Array içerisinde eleman olup olmadığını kontrol etme -> includes()
console.log(items_3.includes(1)) // items_3 içerisinde 1 olduğu için true yazdırır.
console.log(items_3.includes(6)) // items_3 içerisinde 6 olmadığı için false yazdırır

// Array içerisindeki öğeleri ayırmak 
let newItems = items_3.splice(2,4)
console.log("newItems : ", newItems)
console.log("items_3 : ", items_3)

// Array içerisindeki öğenin index bilgisini bulmak -> indexOf(value)
items_3.unshift("lorem")
items_3.push("ipsum")

console.log(items_3.indexOf("ipsum"))

// Array Kopyalamak -> slice, [...ES6]
let copyItems = items_3
console.log(items_3)

copyItems.pop() // Son öğreyi çıkarttık 
console.log("copyItems : ", copyItems)
console.log("items_3 : ", items_3);

console.log("Kopyalandıktan sonraki hali :")
copyItems = items_3.slice() // Kopyalama yaptı 
copyItems.pop() // Son öğeyi çıkarttık 
console.log("copyItems", copyItems)
console.log("items", items_3);

let es6Items = [...items_3] // ES6 ve sonrasında gelen kopyalama işlemi
console.log("ES6 items__3 : ", items_3)

// İki Array'in bilgisini birleştirme [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers]
console.log("ES6 All users :", allUsers);


// Array içerisindeki bilgiyi String'e çevirmek -> toString, join
console.log("toString : ", allUsers.toString());
console.log("join : ", allUsers.join(" --- "));


// İstediğimiz Index Bilgisine öğe ekleme -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melisa") // Sondan bir öncekine ekledik 
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Ece") // Ortasına ekledik 
console.log(allUsers);
