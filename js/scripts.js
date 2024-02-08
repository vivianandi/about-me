/*
  Function Name: yourName
  Parameters: none
  Output: sentence with name and string
  Return: none
*/

/*
Original JS
<script>
let name = prompt("What's your name?");
document.write("Hi, " + name + ", I hope you like my page!")
</script>
*/

function yourName() {
  let name = prompt("What's your name?");
  document.write("Hi, " + name + ", I hope you like my page!")
}

/*
  Function Name: catsOrDogs
  Parameters: none
  Output: none
  Return: string about cats or dogs
*/

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

function catsOrDogs() {

}

function doYouLikeCats() {
  let userLikesCats = confirm("Would you like a cat?");
  if (userLikesCats) {
    return "Why do you like cats?";
  } else {
    return "Smart!";
  }
}