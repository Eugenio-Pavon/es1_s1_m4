//1

let controllo = function (a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    console.log(true);
  }
};

controllo(30, 20);

//2

let rimozione = function (stringa, posizione) {
  let nuova = "";
  for (let i = 0; i < stringa.length; i++) {
    if (i !== posizione) {
      nuova += stringa[i];
    }
  }
  return nuova;
};
let stringaIniziale = "ciao";
let posizioneDaRimuovere = 2;

let nuova = rimozione(stringaIniziale, posizioneDaRimuovere);

console.log(nuova);

//3

let numeri = function (x, y) {
  if (40 <= x <= 60 || 40 <= y <= 60 || 70 <= x <= 100 || 70 <= y <= 100) {
    console.log(true);
  } else {
    console.log(false);
  }
};

numeri(50, 30);

//4
let verifica = function (citta) {
  if (citta.startsWith("los") || citta.startsWith("new")) {
    return citta;
  } else {
    return false;
  }
};

console.log(verifica("new york"));

//5

let array = [1, 2, 3, 4];
let sommaElimenti = function (array) {
  let risultato = 0;
  for (let i = 0; i < array.length; i++) {
    risultato += array[i];
  }
  return risultato;
};

console.log(sommaElimenti(array));

//6

let array2 = [5, 6, 7, 8];

let controllaArray = function () {
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 1 || array2[i] === 3) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(controllaArray(array2));

//7

let angolazione = function (gradi) {
  if (gradi < 90) {
    return "acuto";
  } else if (gradi === 90) {
    return "retto";
  } else if (gradi > 90 && gradi < 180) {
    return "ottuso";
  } else if (gradi === 180) {
    return "piatto";
  }
};

console.log(angolazione(150));

//8

let creaAcronimo = function (nome) {
  let parole = nome.split(" ");
  let acronimo = "";

  for (let i = 0; i < parole.length; i++) {
    acronimo += parole[i][0].toUpperCase();
  }
  return acronimo;
};

console.log(creaAcronimo("fabbrica italiana automobilistica torino"));
