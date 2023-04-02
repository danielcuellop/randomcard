window.onload = function() {
  let pintafinal = pintaAleatoria();
  let pintaRandom = document.getElementsByTagName("h3");
  let numeroRandom = numeroAleatorio();
  let valorRandom = document.getElementsByTagName("h1")[0];
  let color = colorCard(pintafinal);
  pintaRandom[0].textContent = pintafinal;
  pintaRandom[1].textContent = pintafinal;
  valorRandom.textContent = numeroRandom;
  pintaRandom[0].style.color = color;
  pintaRandom[1].style.color = color;
  valorRandom.style.color = color;
};
function pintaAleatoria() {
  let pinta = ["♦", "♥", "♠", "♣"];
  let positionP = Math.floor(Math.random() * 4);
  return pinta[positionP];
}
function numeroAleatorio() {
  let numero = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2"
  ];
  let positionN = Math.floor(Math.random() * 13);
  return numero[positionN];
}

function colorCard(x) {
  if (x == "♦" || x == "♥") {
    return "red";
  }
}
