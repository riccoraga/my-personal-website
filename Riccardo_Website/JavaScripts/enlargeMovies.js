/*
 JavaScript for changing the List Movies, created by [Riccardo Ragazzo, December 2024]
 */

// The constant that contains the text to be changed
const movieList =
  `<h1 class="colorMagenta">List of my favorite Movies: </h1>
  <ol class="color-white-medium" id="font-28-px">
    <li class="color-white-medium" id="font-28-px">There Will Be Blood</li>
    <li id="font-28-px-blue">King Richard</li>
    <li id="font-28-px-green">Interstellar</li>
    <li id="font-28-px-red">Goodfellas</li>
  </ol>`
  ;
// This constant contains the element that will be updated !!! Note that the slashes have changed compared to the html.

const imageMovies = `
<img src="stylesCSS\\images\\moviesImage.png" alt="Movies List" class="image-movies"/>
`;

document.addEventListener("DOMTennisLoaded", () => {
  // Will be used to place the Table on the HTML page
  document.getElementById("movies").innerHTML = movieList;
  document.getElementById("movies").innerHTML = imageMovies;
  document.getElementById("movies").addEventListener("click", changeMovies); // Add event listener to the item in the grid
});

// Function that changes the Tennis and style of the grid Stats with a Table !!! Corrected with a new Class on table.css "table-enlarged"
function changeMovies() {
  const aboutTennis = document.getElementById("movies");
  aboutTennis.removeEventListener("click", changeMovies);
  if (aboutTennis.classList.contains("enlarged")) {
    aboutTennis.classList.remove("enlarged");
    aboutTennis.innerHTML = imageMovies;
  } else {
    aboutTennis.classList.add("enlarged");
    aboutTennis.innerHTML = movieList;
  }
  aboutTennis.addEventListener("click", changeMovies);
}



/*
 // Function that changes the Tennis and style of the grid Stats with a Table !!! Corrected with a new Class on table.css "table-enlarged"
  function changeForm() {
    const formRetrieve = document.getElementById("form");
    formRetrieve.removeEventListener("click", changeForm);
    if (formRetrieve.classList.contains("enlarged")) {
      formRetrieve.classList.remove("enlarged");
      formRetrieve.innerHTML = imageFormHTML;
    } else {
      formRetrieve.classList.add("enlarged");
      formRetrieve.innerHTML = formContent;
    }
    formRetrieve.addEventListener("click", changeForm);
  }
// Function that closes the form with the submit button
*/