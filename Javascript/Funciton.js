// Function 


// Arrow function Start 

function hello (firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello("JavaScript")

const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2("helloFuncV2")



const helloFuncV3 = (firstName, lastName) => 
console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("helloFuncV3","Last name info")



const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("helloFuncV4","Other info")

// Not  
// "this" keyword;
// this'in arrow fonksiyonlardaki davranışı, regular fonksiyonlardaki davranışından farklıdır. Nasıl ve nerede oluşturulursa oluşturulsun this'in arrow fonksiyonu içerisindeki değeri her zaman parent fonksiyonuna eşittir. 
// Diğer bir deyişle arrow fonksiyonu kendi execution context'ini oluşturmaz. Yani kendisini referans göstermez, her zaman parent'ına bakar.
let movie = { 

    name: "La la land",
    
    thisInArrow:() => { 
    console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
    }, 
    
    thisInRegular(){ 
    console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
    } 
    
    };
    movie.thisInArrow(); // output : Movie name is
    movie.thisInRegular(); // output : Movie name is La la land

const seriesList = list => {
  
        list.forEach((series, index) => {
          console.log(`${index+1}. ${series}`) 
        });
      };
      
      seriesList(["Firefly", "The Mandalorian","Breaking Bad"]);
      /* output:
      1. Firefly
      2. The Mandalorian
      3. Breaking Bad
      */
      const newArray = (nums) => {

        const newNums = nums.map(e=>{      
            if(e%2==0){
                return e*2
            }else if(e%2==1){
                return e*3
            }
        });
    
       return newNums 
    }
    
    console.log(newArray([1,2,3,4,5]));  // output: [3,4,9,8,15]

// Arrow function End 



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