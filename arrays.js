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
    console.log(hasTrixie);
     
    
    // OPGAVE 3B: CHECK EFTER SPECIFIK ELEMENT I ARRAY OG CHECK OM TRUE ELLER FALSE------------ LØST MED INCLUDES

let hasBaxter = dogsArray.includes("Baxter");
  console.log(hasBaxter);
  
  
  // OPGAVE 4------------
    




}) // ends DOMContentLoaded
