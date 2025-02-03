document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // OPGAVE 1: FIND OG UDSKRIV ALLE TAL OVER 20 ----------------- LØST MED FILTER METHOD
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

let hasBaxter = dogsArray.includes("Baxter");
//   console.log("opgave 3b", hasBaxter);
  
  
  // OPGAVE 4A: find element, hvis ikke element findes, return undefined ------------ løst med find

//   let hasBagheera = catsArray.includes("Bagheera");
//   console.log("opgave 4a", hasBagheera);

let hasBagheera = catsArray.find(function(cat){
    return cat === "Bagheera";
   
   }) 
//    console.log("opgave 4a", hasBagheera);

    // OPGAVE 4B: find element, hvis ikke element findes, return undefined ------------ løst med find

    let hasSalem = catsArray.find(function(cat){
        return cat === "Salem";
       
       }) 

    //    console.log("opgave 4b", hasSalem);

// OPGAVE 5: gang alle elementerne i array med 3 ------------ løst med find

let numberMultiply = numbersArray.map(function(number) {
    return number * 3 
}) 
// console.log("opgave 5",numberMultiply);

// OPGAVE 6: udskriv alle elementer i et array ud i en string -----  løst med join

// console.log("opgave 6", dogsArray.join(", ")); 


// OPGAVE 7 find index af mango ---- løst med indexof :


let fruitIndexOf = fruitsArray.indexOf("Mango")
// console.log(fruitIndexOf);

// OPGAVE 8: fjern et element fra array og udskriv det opdateret array-----

let removeDog = dogsArray.filter(function(dog) {
    return dog != "Polly"
});
console.log(removeDog);



}) // ends DOMContentLoaded
