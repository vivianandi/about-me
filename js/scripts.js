/*
Original JS
<script>
let name = prompt("What's your name?");
document.write("Hi, " + name + ", I hope you like my page!")
</script>
*/

/*
  Function Name: yourName
  Parameters: none
  Output: sentence with name and string
  Return: none
*/

function yourName() {
  let name = prompt("What's your name?");
  document.write("Hi, " + name + ", I hope you like my page!")
}

/*
Original JS
<script>
let pet = prompt("Do you prefer cats or dogs? Enter 'cats' or 'dogs'.")
  if (pet.toLowerCase() === "cats") {
    document.write("Cats are wonderful companions!");
  } else if (pet.toLowerCase() === "dogs") {
    document.write("Dogs are loyal friends!");
  } else {
    document.write("Invalid choice. Please enter either 'cats' or 'dogs'.");
  }
</script>
*/

/*
  Function Name: catsOrDogs
  Parameters: none
  Output: string about cats or dogs
  Return: none
*/

function catsOrDogs() {
  let pet = prompt("Do you prefer cats or dogs? Enter 'cats' or 'dogs'.")
  if (pet.toLowerCase() === "cats") {
    document.write("Cats are wonderful companions!");
  } else if (pet.toLowerCase() === "dogs") {
    document.write("Dogs are loyal friends!");
  } else {
    document.write("Invalid choice. Please enter either 'cats' or 'dogs'.");
  }
}

/*
Original JS
<script>
let family = confirm("Do you love your family?");
  if (family === true) {
    document.write("Great, me too! Meet my family below.");
  } else {
    document.write("You psychopath!");
  }
*/

/*
  Function Name: family
  Parameters: none
  Output: string 
  Return: none
*/

function family() {
  let family = confirm("Do you love your family?");
  if (family === true) {
    document.write("Great, me too! Meet my family below.");
  } else {
    document.write("You psychopath!");
  }
}

/*Class 08 Lab*/

function rateMyPets() {
  let rating = prompt("Rate how cute my pets are 1-10?")
  rating = Number(rating);
  for (let i = 0; i < rating; i++) {
    document.write("⭐️");
  }
}

/*

Add validation on one of the user inputs.
Keep asking until an acceptable value is entered.

function favoriteColorMaxGuesses() {

  let numberOfGuesses = 0;

  while ( numberOfGuesses < 5 ) {
    let answer = prompt("What is your favorite color?");
    if( answer != "black" ) {
      alert("Boo");
      numberOfGuesses++;
    }
    else {
      alert("Yah!");
      break; // Force Stop the while loop
    }
  }

  document.write("Black is awesome");
}
*/

function favoriteAnimalMaxGuesses() {

  let numberOfGuesses = 0;

  while (numberOfGuesses < 3) {
    let answer = prompt("Can you guess my favorite animal?");

    if (answer !== "elephant") {
      alert("Nope, try again!");
      numberOfGuesses++;
    } else {
      alert("That's correct!");
      break; // Force stop the while loop
    }
  }

  document.write("My favorite animal is the elephant!");

}