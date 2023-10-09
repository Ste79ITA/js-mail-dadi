// MAIL

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

let userMail = prompt('Inserisci la tua mail');
console.log(userMail);

// - Controlla che sia nella lista di chi può accedere.

let mailCheck = emailDatabase.includes(userMail);

// - Stampa un messaggio appropriato sull’esito del controllo.

if (mailCheck == true) {
  console.log(`Utente riconosciuto, bentornato ${userMail}!`);
} else {
  console.log(
    `L'indirizzo mail: ${userMail} non è corretto o inesistente. Accesso Negato`
  );
}
