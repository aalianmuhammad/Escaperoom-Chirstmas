// Variabelen
const wachtwoord = "KERSTAVOND";

// Functions
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// Queryselectors
const safe = document.querySelector(".treasurechest");

// Beveiliging van de kluis
safe.addEventListener("click", code1);

function code1() {
  let password = prompt("Voer hier het wachtwoord van de kist in.");

  if (password === null) {
    alert("Je moet eerst een wachtwoord invoeren.");
  } else {
    if (password.toUpperCase() === wachtwoord) {
      
      alert("Het wachtwoord is goed.");
      on();
    } else {
      console.log("Wachtwoord is fout!");
      alert("Wachtwoord is onjuist, probeer het opnieuw.");
      off();
    }
  }
}
