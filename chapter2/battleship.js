var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var guesses = 0;
var hit = 0;
var isSunk = false;
//ask the user a guess until the ship is sunk
while (isSunk == false) {
  guess = prompt("Ready, aim, Fire!(enter a number 0-6):");
  //check if guess is a correct entry
  if (guess < 0 || guess > 6) {
    alert("Enter a correct value between 0-6");
  } else {
    guesses++;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT");
      hit++;
      if (hit == 3) {
        isSunk = true;
        alert("You sunk my battleship!!!");
      }
    } else {
      alert("MISS");
    }
  }
}
alert(
  "you took " +
    guesses +
    " guesses to sunk the battle ship, which means your acurancy was: " +
    (3 / guesses) * 100 +
    "%"
);
