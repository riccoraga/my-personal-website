/*
 JavaScript for changing the form, created by [Riccardo Ragazzo, December 2024]
 */

// The constant that contains the form to be changed !!! action="/submit_form" onclick="closeForm()"
const formTextContent = `
<div class="enlarged">
 <form method="post" class="h3-special" id="contactForm" netlify>
 <label for="name">Name:</label><br>
 <input type="text" id="name" name="name" placeholder="please write your name" class="form-textbox"><br><br>
 <label for="email">Email:</label><br>
 <input type="email" id="email" name="email" placeholder="please write your email" class="form-textbox"><br><br>
 <label for="message">Write a review about my Website:</label><br> 
 <textarea id="message" name="message" rows="4" cols="50" placeholder="please write your message" class="form-textbox"></textarea><br><br>
 <input type="submit" value="SUBMIT"  class="form-textbox" id="submit">
 </form>
 </div>
 `;

// This constant contains the element that will be updated !!! Note that the slashes have changed compared to the html.
const imageFormHTML = `
<img src="stylesCSS/images/scrivimi.png" alt="SCRIVIMI" class="formImage"/>
`;

document.addEventListener("DOMContentLoaded", () => {
  // Will be used to listen of an event of the form and the image on the HTML page
  //document.getElementById("contactForm").innerHTML = formTextContent;
  document.getElementById("form").innerHTML = imageFormHTML;
  document.getElementById("form").addEventListener("click", enlargeForm); // Add event listener to the item in the grid !!! REPLACE with the right FUNCTION
});

// Function that changes the image and style of the grid with a Form Removed just keeping for future references
// function changeForm() {
//   const formContainer = document.getElementById("form");
//    // console.log("Change Form clicked");
//     formContainer.removeEventListener("click" , changeForm);
//   if ((formContainer.innerHTML === imageFormHTML) || (document.getElementById('form').innerHTML === imageFormHTML)){
//     //console.log("the imageForm is detected");
//     formContainer.innerHTML = formTextContent;
//     // Add event listener for form submission
//     document
//       .getElementById("contactForm")
//       .addEventListener("submit", submitForm);
//   } else {
//     //formContainer.innerHTML = imageFormHTML; !!!! TO BE REINSTATED
//     formContainer.classList.add('formDiv');
//     formContainer.innerHTML = formTextContent; // TO BE REMOVED
//     //console.log("the imageForm is not detected");
//   }
// }

// New improved function !!! With TESTS
function enlargeForm() {
  //console.log('Enlarge Form function clicked')
  const formElement = document.getElementById("form");
  formElement.removeEventListener("click", enlargeForm); // Remove the event listner to avoid double clicks
  if (formElement.classList.contains("enlarged")) {
    //console.log('Form is enlarged');
    //formElement.classList.remove('enlarged'); !!!! Checking .... Not useful, the Form closes himself and the DOM updates automatically back to the image !
  } else {
    console.log("Form is NOT enlarged");
    formElement.classList.add("enlarged"); // Add the class 'enlarged' to the form element
    formElement.innerHTML = formTextContent; // Change the content of the form element
    formElement.removeEventListener("click", enlargeForm); // Remove the event listner to avoid closing the form
  }
}
/* New Function that let the submit button work after the Form has been changed */
/*function closeForm() {
    console.log("Submit clicked")
  const formElement = document.getElementById("submit");
  formElement.classList.remove("enlarged");
  formElement.innerHTML = imageFormHTML;
  formElement.addEventListener("click", changeForm);
}
*/
