// console.log("ciao");

// Pari e Dispari
// 1 L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// 2 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// 3 Sommiamo i due numeri
// 4 Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// 5 Dichiariamo chi ha vinto.

// scelta pari o dispari

const choiseUser = prompt("Scegli tra pari o dispari");
if (choiseUser === "pari") {
  console.log("Hai scelto", choiseUser);
  // console.log(randomNumber(0));
} else if (choiseUser === "dispari") {
  console.log("Hai scelto", choiseUser);
  // console.log(randomNumber(0));
} else if (choiseUser !== "pari" || choiseUser !== "dispari") {
  console.log("Valore non consentito! Scegli tra pari o dispari");
}

// creazione funzione per generarenmero random user
let currentNumberUser;
function randomNumberUser(generatedNumberUser) {
  currentNumberUser = generatedNumberUser;
  currentNumberUser = currentNumberUser + Math.floor(Math.random() * 5 + 1);
  return currentNumberUser;
}
console.log(randomNumberUser(0));

// creazione funzione per generarenmero random user
let currentNumberPc;
function randomNumberPc(generatedNumberPc) {
  currentNumberPc = generatedNumberPc;
  currentNumberPc = currentNumberPc + Math.floor(Math.random() * 5 + 1);
  return currentNumberPc;
}
console.log(randomNumberPc(0));

// somma dei numeri random generati e stampa
let addNumbers = currentNumberUser + currentNumberPc;
console.log(addNumbers);

// creazione funzione per verificare se somma è pari o dispari con relativo messaggio
let result = 0;
function verificatedAddNumbers(plus) {
  result = plus;
  if (
    (choiseUser === "pari" && result % 2 === 0) ||
    (choiseUser === "dispari" && result % 2 === 1)
  ) {
    console.log("Hai vinto");
  } else if (
    (choiseUser === "pari" && result % 2 !== 0) ||
    (choiseUser === "dispari" && result % 2 !== 1)
  ) {
    console.log("hai perso");
  }
  return result;
}
console.log(verificatedAddNumbers(addNumbers));
