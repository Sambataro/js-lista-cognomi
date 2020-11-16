// Lista Cognomi
var listaCognomi = ["Rossi", "Colombo", "Caselli", "Brambilla"];
// Chiedere all’utente il cognome,
var cognomeUtente = prompt("scrivi il tuo cognome")
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
listaCognomi.push(cognomeUtente);
// lista ordinata alfabeticamente.
listaCognomi.sort();
// stampa lista Cognomi
var cognomiStampa = document.getElementById("lista_cognomi");
for (var i = 0; i < listaCognomi.length; i++) {
  cognomiStampa.innerHTML += "<li>" + listaCognomi[i] + "</li>";
}

// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.
