// console.log("ciao");

// Palidroma
// 1 Chiedere all’utente di inserire una parola
// 2 Creare una funzione per capire se la parola inserita è palindroma

function reverseWord(word) {
  let currentCharacter = "";
  for (let i = 0; i < word.length; i++) {
    currentCharacter = word[i] + currentCharacter;
  }
  return currentCharacter;
}
const requestWordUser = prompt("Inserisci una parola");
console.log(reverseWord(requestWordUser));

if (requestWordUser == reverseWord(requestWordUser)) {
  console.log("Parola palidroma");
} else {
  console.log("Parola non palidroma");
}

// // #######################################################
// // FUNCTIONS
// //
// function reverseWord(word) {
//   let reversedWord = "";
//   for (let i = 0; i < word.length; i++) {
//     reversedWord = word[i] + reversedWord;
//   }
//   return reversedWord;

//   // ciao (word)
//   // reversedWord = ''
//   // i = 0 => reversedWord = 'c'
//   // i = 1 => reversedWord = 'ci'
// }

// // #######################################################
// // MAIN
// //

// const requestWordUser = "otto";
// console.log(reverseWord(requestWordUser));
// console.log(reverseWord("ciao"));
