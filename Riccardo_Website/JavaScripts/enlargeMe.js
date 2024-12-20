/*
 JavaScript for changing the Grid container me, created by [Riccardo Ragazzo, December 2024]
 */

// The constant that contains the image to be changed
const meFullImage = `<img src="stylesCSS/images/realMeOutside.jpg" alt="This is the Real Me!" class="image-adjust"/>
`;

// This constant contains the element that will be updated !!! Note that the slashes have changed compared to the html.
const imageMe = `
<img src="stylesCSS/images/io.png" alt="About me" class="image-adjust"/>
`;

document.addEventListener("DOMContentLoaded", () => {
  // Will be used to place the Table on the HTML page
  document.getElementById("me").innerHTML = meFullImage;
  document.getElementById("me").innerHTML = imageMe;
  document.getElementById("me").addEventListener("click", changeMe); // Add event listener to the item in the grid
});

// Function that changes the Me style of the grid with a new image
function changeMe() {
  const aboutMe = document.getElementById("me");
  aboutMe.removeEventListener("click", changeMe);
  if (aboutMe.classList.contains("enlarged")) {
    aboutMe.classList.remove("enlarged");
    aboutMe.innerHTML = imageMe;
  } else {
    aboutMe.classList.add("enlarged");
    aboutMe.innerHTML = meFullImage;
  }
  aboutMe.addEventListener("click", changeMe);
}
