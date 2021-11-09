// Variabelen
const w8woord = "0122";

// Queryselectors
const door = document.querySelector(".door");

// Beveiliging van de kluis
door.addEventListener("click", deur);

function deur() {
  let invoer = prompt("Voer hier het wachtwoord van de kluis in.");

  if (invoer === null) {
    alert("Je moet eerst 4-cijferige code invoeren.");
  } else {
    if (invoer == w8woord) {
      console.log("Wachtwoord is OK");
      if (confirm("Goed gedaan je hebt de kluis bereikt en kerstmis gered")) document.location = "../html/outro.html"; {
      }
    } else {
      console.log("Wachtwoord is fout!");
      alert("Wachtwoord is onjuist, probeer het opnieuw.");
    }
  }
}