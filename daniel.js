let power = 0;
let food = 0;

window.onload = () => {
  const noodknop = document.getElementsByClassName("js--knop")
  const voedsel = document.getElementsByClassName("js--eten")
  
  for (let i = 0; i < noodknop.length; i++) {
    const knop = noodknop[i];
    knop.addEventListener('click', gordijnDicht)
  }
  for (let i = 0; i < voedsel.length; i++) {
    const kanen = voedsel[i];
    kanen.addEventListener('click', etenKiezen)
  }
  teleportToBox();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const gordijnDicht = (event) => {
  const gordijn = document.getElementsByClassName("js--curtain")
  const muziek = document.getElementById("js--kalmmusic")

  if (power == 0) {
    for (let i = 0; i < gordijn.length; i++) {
      gordijn[i].setAttribute('opacity', 1)
    }
    muziek.setAttribute('volume', 1);
    
    power = 1;
  } else {
    for (let i = 0; i < gordijn.length; i++) {
      gordijn[i].setAttribute('opacity', 0)
    }
    muziek.setAttribute('volume', 0);
    power = 0;
  }
}

const etenKiezen = (event) => {
  const tekst = document.getElementById("js--tekst");
  const einde = document.getElementById("js--end");
  document.getElementById("js--dorito").setAttribute("opacity", 0);
  document.getElementById("js--redbull").setAttribute("opacity", 0);
  document.getElementById("js--cola").setAttribute("opacity", 0);
  document.getElementById("js--pringles").setAttribute("opacity", 0);
  tekst.setAttribute("value", "Top keuze! U hoef niet te betalen in deze omgeving. Even scannen...")
  sleep(3000).then(() => { tekst.setAttribute("value", "Oke geregeld, geniet van de film!");
  switch(food) {
    case 1:
      document.getElementById("js--dorito").setAttribute("opacity", 1);
      break;
    case 2:
      document.getElementById("js--redbull").setAttribute("opacity", 1);
      break;
    case 3:
      document.getElementById("js--cola").setAttribute("opacity", 1);
      break;
    case 4:
      document.getElementById("js--pringles").setAttribute("opacity", 1);
      break;
  }  
  einde.setAttribute("color", "green")
}); 
}

function teleportToBox() {
  const places = document.getElementsByClassName("js--place");
  const camera = document.getElementById("js--camera");

  for (let i = 0; i < places.length; i++) {
    // teleport function
    places[i].addEventListener("click", function () {
      let att = document.createAttribute("animation");
      att.value =
        "property: position; easing: linear; dur: 1000; to: " +
        this.getAttribute("position").x +
        " 1.8 " +
        this.getAttribute("position").z;
      camera.setAttribute("animation", att.value);
    });
  }
}

function dorito() {
  food = 1;
}
function redbull() {
  food = 2;
}
function cola() {
  food = 3;
}
function pringles() {
  food = 4;
}

function endCheck() {
  const kleur = document.getElementById("js--end").getAttribute("color");
  if(kleur == "green"){
    location.href="https://www.ing.nl/particulier/klantenservice/beschikbaarheid/index.html";}
  }
