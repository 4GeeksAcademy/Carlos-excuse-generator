/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generate();
};

function generate() {
  var sustantivos = ["Un perro", "Un niño", "Un hombre"];
  var adjetivos = ["loco", "tonto", "asustado"];
  var acciones = ["ha roto mi", "mordió mi", "vomitó mi"];
  var posesiones = ["coche", "moto", "pierna"];

  var rand_first = Math.floor(Math.random() * sustantivos.length);
  var rand_second = Math.floor(Math.random() * adjetivos.length);
  var rand_third = Math.floor(Math.random() * acciones.length);
  var rand_fourth = Math.floor(Math.random() * posesiones.length);

  document.getElementById("result").innerHTML =
    sustantivos[rand_first] +
    " " +
    adjetivos[rand_second] +
    " " +
    acciones[rand_third] +
    " " +
    posesiones[rand_fourth];
}
