// **************
// MAIL
// **************

// Creazione array contente indirizzi mail.

const emailDatabase = [
  'bekkison@salvationauto.com',
  'dynman@monthologiesmerch.com',
  'mugikvmeshke@enometry.com',
  'jack910@wmqrhabits.com',
  'jewalz563@tearflakes.com',
  'prince2st@pacarmu.link',
  'cscp196557@apemail.in',
  'nastri.s@gmail.com',
];

// - Chiedi all’utente la sua email.

// let userMail = prompt('Inserisci la tua mail');
// console.log(userMail);

// - Controlla che sia nella lista di chi può accedere.

// let mailCheck = emailDatabase.includes(userMail);

// // - Stampa un messaggio appropriato sull’esito del controllo.

// if (mailCheck == true) {
//   console.log(`Utente riconosciuto, bentornato ${userMail}!`);
// } else {
//   console.log(
//     `L'indirizzo mail: ${userMail} non è corretto o inesistente. Accesso Negato`
//   );
// }

// **************
// DADI
// **************

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const resultsDOMElement = document.querySelector('.results');
const buttonDOMElement = document.querySelector('.play-btn');

buttonDOMElement.addEventListener('click', function () {
  let userDice = Math.floor(Math.random() * 6) + 1;
  let computerDice = Math.floor(Math.random() * 6) + 1;

  resultsDOMElement.innerHTML = `User: ${userDice}  |     Computer ${computerDice}`;

  let message = '';

  if (userDice > computerDice) {
    message = 'HAI VINTO!';
  } else if (userDice < computerDice) {
    message = 'HAI PERSO!';
  } else if (userDice == computerDice) {
    message = 'PAREGGIO!';
  }

  resultsDOMElement.innerHTML += `<div class='message'>${message}</div>`;
});
