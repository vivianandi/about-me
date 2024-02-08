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