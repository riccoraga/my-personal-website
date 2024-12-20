/*
 JavaScript for changing the Grid container Hobbies, created by [Riccardo Ragazzo, December 2024]
 */

// The constant that contains the text to be changed
const hobbiesText = `<div class="h1-special">
  <p class="h3-special">
   I love playing tennis, running and catching a tennis ball is my favorite hobby! :)
   </p>
   <p class="h3-special">
   Nothing wins against a good Book, reading is food for the mind.
   </p>
   <p class="h3-special">
   Going out in the nature, long walks is my way to relax. (When I am not playing tennis!)
   </p>
   <p class="h3-special">
   I love diving in the sea, when I am in the water feels like I am in another world.
   </p>
   </div>`;
// This constant contains the element that will be updated !!! Note that the slashes have changed compared to the html.

const imageTennis = `
<img src="stylesCSS\\images\\tennis.png" alt="About me" class="imageStats"/>
`;

document.addEventListener("DOMContentLoaded", () => {
  // Will be used to place the Table on the HTML page
  document.getElementById("hobbies").innerHTML = hobbiesText;
  document.getElementById("hobbies").innerHTML = imageTennis;
  document.getElementById("hobbies").addEventListener("click", changeHobbies); // Add event listener to the item in the grid
});

// Function that changes the Tennis and style of the grid Stats with a Table !!! Corrected with a new Class on table.css "table-enlarged"
function changeHobbies() {
  const hobbiesElement = document.getElementById("hobbies");
  hobbiesElement.removeEventListener("click", changeHobbies);
  if (hobbiesElement.classList.contains("enlarged")) {
    hobbiesElement.classList.remove("enlarged");
    hobbiesElement.innerHTML = imageTennis;
  } else {
    hobbiesElement.classList.add("enlarged");
    hobbiesElement.innerHTML = hobbiesText;
  }
  hobbiesElement.addEventListener("click", changeHobbies);
}
