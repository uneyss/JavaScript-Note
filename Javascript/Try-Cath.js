// Try-Cath 
/* 
    try {
    //Çalıştırılacak kodlar
    }catch(hata) {
    //Hata yakalandığında çalışacak kodlar
    }finally {
    //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
}
*/
let products;

try {
    products.forEach(element => {
        console.log(items)
    }) 
}
catch (error){
    console.log("error", error)
    // İstediğimiz gibi gerçekleşmedi, catch içerisinde de tanımlama yapabilriz.
    // products = [1, 2, 3]
    // products.forEach(item => console.log(item))
}

console.log("Hata yönetimi düzgün çalışıyor")

let info = "kodluyoruz"
console.log(info)

function valid(){
    try {
        if (document.querySelector("#dogumTarihi").value == "") {
            throw 'Doğum tarihini boş geçemezsiniz';
        };
    }catch(err) {
        alert(err);
    }
}