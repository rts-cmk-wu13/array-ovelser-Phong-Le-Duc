document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // OPGAVE 1 ----------------- LØST MED FILTER METHOD
    let newNumbers = numbersArray.filter(function (number) {
        return number > 20
    });
    // console.log(newNumbers);
   
   // OPGAVE 2 ------------ LØST MED PUSH 
    catsArray.push("sniffles");
    // console.log(catsArray);

// OPGAVE 2 ------------




}) // ends DOMContentLoaded
