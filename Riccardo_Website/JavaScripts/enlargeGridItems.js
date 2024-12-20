/*
 JavaScript for changing the Grid container text, created by [Riccardo Ragazzo, December 2024]
 */

// The constant that contains the text to be changed
const aboutText =
  "I am a Computer Science student, I am passionate about programming, its creativity, the difficulty and about coding." +
  " I enjoy complex problem solving and learn new things every day. ";
//aboutText = aboutText.classList.add('h1-special') // Tryout, to be deleted or changed !!! IMPORTANT !!!

// Function that change the content and style of the grid items on click !!! Long hours, but it works !!!
function changeGridItemAbout() {
  // Retrieve the document on the HTML page by its id
  const divGridItemAbout = document.getElementById("about");
  // Toggle the visibility of the div by its class
  divGridItemAbout.classList.toggle("enlarged");
  // Select the h3 element inside the div
  const h3Element = divGridItemAbout.querySelector("h3");
  // Change the text of the h3 element, using modern JavaScript
  h3Element.textContent = divGridItemAbout.classList.contains("enlarged")
    ? aboutText
    : "About me";
} // To be revised, to be improved, to be optimized !!! Its only enlarging but not changing the CSS style, need to be corrected


