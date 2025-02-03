document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // OPGAVE 1: FIND OG UDSKRIV ALLE TAL OVER 20 ----------------- LØST MED FILTER METHOD
    // let newNumbers = numbersArray.filter(function (number) {
    //     return number > 20
    // });


    let newNumbers = numbersArray.filter(function (number) {
        return number > 20
    });

    // console.log("opgave 1",newNumbers);



    // OPGAVE 2 TILFØJ NYT ELEMENT TIL ARRAY CatsArray og udskriv ------------ LØST MED PUSH 
    catsArray.push("sniffles");
    // console.log("opgave 2", catsArray);

    // OPGAVE 3A: CHECK EFTER SPECIFIK ELEMENT I ARRAY OG CHECK OM TRUE ELLER FALSE------------ LØST MED INCLUDES

    let hasTrixie = dogsArray.includes("Trixie");
    // console.log("opgave 3a", hasTrixie);

 

     
    
    // OPGAVE 3B: CHECK EFTER SPECIFIK ELEMENT I ARRAY OG CHECK OM TRUE ELLER FALSE------------ LØST MED INCLUDES

// let hasBaxter = dogsArray.includes("Baxter");
//   console.log("opgave 3b", hasBaxter);
  

     // ALTERNATIV METODE some
     // NY UDGAVE MED =>  har et implicit return bare husk at udelad krølle paranteserne

    //  let hasBaxter = dogsArray.some(function(dog)  {return dog == "Baxter"})
     let hasBaxterArrow = dogsArray.some((dog) =>  dog == "Baxter")
  
  // OPGAVE 4A: find element, hvis ikke element findes, return undefined ------------ løst med find

let hasBagheera = catsArray.find(function(cat){
    return cat === "Bagheera";
   
   }) 
//    console.log("opgave 4a", hasBagheera);

    // OPGAVE 4B: find element, hvis ikke element findes, return undefined ------------ løst med find

    // let hasSalem = catsArray.find(function(cat){
    //     return cat === "Salem";
    //    }) 

       let = hasSalem =catsArray.find(cat => cat == "Salem")

    //    console.log("opgave 4b", hasSalem);

// OPGAVE 5: gang alle elementerne i array med 3 ------------ løst med find

// let numberMultiply = numbersArray.map(function(number) {
//     return number * 3 
// }) 

let numberMultiply = numbersArray.map((number) => number * 3)

// console.log("opgave 5",numberMultiply);

// OPGAVE 6: udskriv alle elementer i et array ud i en string -----  løst med join array metoden

console.log("opgave 6", dogsArray.join(", ")); 


// OPGAVE 7 find index af mango ---- løst med indexof :


let fruitIndexOf = fruitsArray.indexOf("Mango")
// console.log(fruitIndexOf);

let BlueberryIndex = fruitsArray.indexOf("blåbær")
// console.log(BlueberryIndex);
// findes ikke så consol kalde det for "-1"


// OPGAVE 8: fjern et element fra array og udskriv det opdateret array----- løst med .filter metoden

// let removeDog = dogsArray.filter(function(dog) {
//     return dog != "Polly"
// });

// let removeDogSplice = dogsArray.splice(dogsArray.indexOf("polly"), 1)
// console.log(removeDogSplice);


let dogsModified = dogsArray.filter((dog) => dog != "polly")
console.log(dogsModified);
// OPGAVE EKSTRA: udsriv summen af tallene i numberArray ----

// let sum = numbersArray.reduce(function(total, number) {
//     return total + number;
// })
// console.log(sum);



// [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]
let sum = numbersArray.reduce((result, number) => result + number, 500)
   


console.log("ekstraopgave", sum);



}) // ends DOMContentLoaded

