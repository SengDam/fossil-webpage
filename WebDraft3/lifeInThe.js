"use strict";

//selectors for the periods <span> tag
const permian = document.getElementById("Permian");
const carboniferous = document.getElementById("Carboniferous");
const devonian = document.getElementById("Devonian");
const silurian = document.getElementById("Silurian");
const ordovician = document.getElementById("Ordovician");
const cambrian = document.getElementById("Cambrian");

//selectors for the timebreaks <span> tags
const OrdoSil = document.getElementById("Ordo-Sil");
const DevoCarb = document.getElementById("Devo-Carb");
const PermExt = document.getElementById("Perm-Ext");

//Initialize the information columns
const cambrianInfoLeft = document.getElementById("infoCambrianLeft");
const cambrianInfoRight = document.getElementById("infoCambrianRight");
const ordovicianInfoLeft = document.getElementById("infoOrdovicianLeft");
const ordovicianInfoRight = document.getElementById("infoOrdovicianRight");

const silurianInfoLeft = document.getElementById("infoSilurianLeft");
const silurianInfoRight = document.getElementById("infoSilurianRight");
const devonianInfoLeft = document.getElementById("infoDevonianLeft");
const devonianInfoRight = document.getElementById("infoDevonianRight");

const carboniferousInfoLeft = document.getElementById("infoCarboniferousLeft");
const carboniferousInfoRight = document.getElementById("infoCarboniferousRt");
const permianInfoLeft = document.getElementById("infoPermianLeft");
const permianInfoRight = document.getElementById("infoPermianRight");

const infoOrdoSilLeft = document.getElementById("infoOrdoSilLeft");
const infoDevoCarbLeft = document.getElementById("infoDevoCarbLeft");
const infoPermExtLeft = document.getElementById("infoPermExtLeft");

const infoOrdoSilRight = document.getElementById("infoOrdoSilRight");
const infoDevoCarbRight = document.getElementById("infoDevoCarbRight");
const infoPermExtRight = document.getElementById("infoPermExtRight");

//Store the information in arrays, I will use a left and right array for this
const infoRt = [
  cambrianInfoRight,
  ordovicianInfoRight,
  silurianInfoRight,
  devonianInfoRight,
  carboniferousInfoRight,
  permianInfoRight,
  infoOrdoSilRight,
  infoDevoCarbRight,
  infoPermExtRight,
];

const infoLt = [
  cambrianInfoLeft,
  ordovicianInfoLeft,
  silurianInfoLeft,
  devonianInfoLeft,
  carboniferousInfoLeft,
  permianInfoLeft,
  infoOrdoSilLeft,
  infoDevoCarbLeft,
  infoPermExtLeft,
];

//This function loops through the spans and makes sure they are all hidden.
function hiddenLoop() {
  for (let i = 0; i < infoRt.length; i++) {
    if (!infoRt[i].classList.contains("hidden")) {
      infoRt[i].classList.add("hidden");
      infoLt[i].classList.add("hidden");
    }
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//These are the events that change the body of the webpage when the span is clicked
/**
 * GOALS
 * |_| Add a backdrop that represents each period
 *    -----Should I use a mural type picture
 *    >>>-----Should I use the geologic color for the background and focus on the fossils pictures
 * |_| Do more research to figure out what fossils to add
 *      -----Dominate plant species
 *      -----Land Organisms
 *      -----Sea Creatures
 *
 *
 */
permian.addEventListener("click", function () {
  document.body.style.backgroundColor = "#3399ff";

  //find the active span and hide it
  hiddenLoop();

  //Remove the hiddent tag from permian
  permianInfoRight.classList.remove("hidden");
  permianInfoLeft.classList.remove("hidden");
});

carboniferous.addEventListener("click", function () {
  document.body.style.backgroundColor = "#009999";

  //find the active span and hide it
  hiddenLoop();
  //Remove the hidden tag from Carboniferous
  carboniferousInfoRight.classList.remove("hidden");
  carboniferousInfoLeft.classList.remove("hidden");
});

devonian.addEventListener("click", function () {
  document.body.style.backgroundColor = "#8484ff";

  //find the active span and hide it
  hiddenLoop();

  //comment
  devonianInfoRight.classList.remove("hidden");
  devonianInfoLeft.classList.remove("hidden");
});

silurian.addEventListener("click", function () {
  document.body.style.backgroundColor = "#b3005f";

  //find the active span and hide it
  hiddenLoop();
  //comment
  silurianInfoRight.classList.remove("hidden");
  silurianInfoLeft.classList.remove("hidden");
});

ordovician.addEventListener("click", function () {
  //The background color
  document.body.style.backgroundColor = "#8b1c00";

  //find the active span and hide it
  hiddenLoop();

  //Remove the hidden tag for the Ordovician information.
  ordovicianInfoLeft.classList.remove("hidden");
  ordovicianInfoRight.classList.remove("hidden");
});

cambrian.addEventListener("click", function () {
  //The background color
  document.body.style.backgroundColor = "#a13d2d";

  //find the active span and hide it
  hiddenLoop();
  //Remove the hidden tag for the Cambrian information
  cambrianInfoLeft.classList.remove("hidden");
  cambrianInfoRight.classList.remove("hidden");
});

OrdoSil.addEventListener("click", function () {
  hiddenLoop();
  infoOrdoSilLeft.classList.remove(`hidden`);
  infoOrdoSilRight.classList.remove(`hidden`);
  document.body.style.backgroundColor = "#101010";
});
DevoCarb.addEventListener("click", function () {
  hiddenLoop();
  infoDevoCarbLeft.classList.remove(`hidden`);
  infoDevoCarbRight.classList.remove(`hidden`);
  document.body.style.backgroundColor = "#101010";
});

PermExt.addEventListener("click", function () {
  hiddenLoop();
  infoPermExtLeft.classList.remove(`hidden`);
  infoPermExtRight.classList.remove(`hidden`);
  document.body.style.backgroundColor = "#101010";
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
