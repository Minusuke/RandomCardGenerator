/* eslint-disable */

import "./style.css";

window.onload = function() {
  //write your code here
  // Definir los posibles valores y pintas de las cartas
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["♠", "♥", "♦", "♣"];

  // Obtener una carta aleatoria
  function getRandomCard() {
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    return randomValue + randomSuit;
  }
  // Actualizar la carta mostrada en la página
  function updateCard() {
    const cardElement = document.getElementById("card");
    cardElement.innerHTML = getRandomCard();
  }
  // Obtener referencia al botón
  const changeButton = document.getElementById("changeButton");

  // Cambiar la carta cuando se hace clic en el botón
  changeButton.addEventListener("click", updateCard);

  // Actualizar la carta cuando se carga la página
  window.onload = updateCard;
};
