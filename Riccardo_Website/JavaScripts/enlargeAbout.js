/*
 JavaScript for changing the Grid container About, created by [Riccardo Ragazzo, December 2024]
 */

// The constant that contains the text to be changed
const aboutText = `<div class="h1-larger-white">
  <p class="h3-special">
  I am a Computer Science student, very passionate about programming,
  its creativity, the difficulty and its complexity. 
  I enjoy complex problem-solving and learning new things every day.
   </p>
    <p class="h3-special">
    Normally you can find me on a tennis court or at my desk in front of the computer trying to solve the next algorithm.
   </p>
   <p class="h3-special">
   Here below you can find one of my project, a game coded with Unity and VS in C#.
   </p>

   <p>
   <a href="https://riccoraga.itch.io/escape-delce-academy" target="_blank" class="links">LINK: Escape Delce Academy</a>
   </p>
   </div>`;

// This constant contains the element that will be updated !!! Note that the slashes have changed compared to the html.
const imageContent = `
<img src="stylesCSS/images/ITImage.png" alt="About me" class="imageStats"/>
`;

document.addEventListener("DOMContentLoaded", () => {
  // Will be used to place the Table on the HTML page
  document.getElementById("about").innerHTML = aboutText;
  document.getElementById("about").innerHTML = imageContent;
  document.getElementById("about").addEventListener("click", changeAbout); // Add event listener to the item in the grid
});

// Function that changes the content and style of the grid Stats with a Table !!! Corrected with a new Class on table.css "table-enlarged"
function changeAbout() {
  const aboutContent = document.getElementById("about");
  aboutContent.removeEventListener("click", changeAbout);
  if (aboutContent.classList.contains("enlarged")) {
    aboutContent.classList.remove("enlarged");
    aboutContent.innerHTML = imageContent;
  } else {
    aboutContent.classList.add("enlarged");
    aboutContent.innerHTML = aboutText;
  }
  aboutContent.addEventListener("click", changeAbout);
}
