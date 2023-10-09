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

mailInputDOMElement = document.querySelector('.mail');
loginDOMElement = document.querySelector('.login');
loginResultDOMElement = document.querySelector('.login-result');

let userMail = '';
// - Salva email utente.

userMail = loginDOMElement.addEventListener('click', function () {
  userMail = mailInputDOMElement.value;

  // - Controlla che sia nella lista di chi può accedere.

  // let mailCheck = emailDatabase.includes(userMail);

  let message = '';
  for (let i = 0; i < emailDatabase.length; i++) {
    if (emailDatabase[i] === mailInputDOMElement.value) {
      message = `Utente riconosciuto, bentornato ${userMail}!`;
    } else {
      message = `L'indirizzo mail: ${userMail} non è corretto o inesistente. Accesso Negato`;
    }
  }
  // - Stampa un messaggio appropriato sull’esito del controllo.
  loginResultDOMElement.innerHTML = message;
  mailInputDOMElement.value = '';
});

// **************
// DADI
// **************

const resultsDOMElement = document.querySelector('.results');
const buttonDOMElement = document.querySelector('.play-btn');

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
buttonDOMElement.addEventListener('click', function () {
  let userDice = Math.floor(Math.random() * 6) + 1;
  let computerDice = Math.floor(Math.random() * 6) + 1;

  resultsDOMElement.innerHTML = `User: ${userDice}  |     Computer: ${computerDice}`;

  let message = '';

  //   - Stabilire il vincitore, in base a chi fa il punteggio più alto
  if (userDice > computerDice) {
    message = 'HAI VINTO!';
  } else if (userDice < computerDice) {
    message = 'HAI PERSO!';
  } else if (userDice == computerDice) {
    message = 'PAREGGIO!';
  }

  resultsDOMElement.innerHTML += `<div class='message'>${message}</div>`;
});
