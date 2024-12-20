/*
 JavaScript for changing the Grid container into a table, created by [Riccardo Ragazzo, December 2024]
 */

// This constant contains the element that will be updated
const tableImage = `
    <h1 class="h1-special">
        <img src='stylesCSS/images/statsTable.png' alt="Stats and More" class="imageStats" />
    </h1>
`;

// Saves the Table for the Grid container
const tableHTML = `
    <table>
        <thead>
            <tr>
                <th>Language</th>
                <th>Experience</th>
                <th>Level</th>
                <th>Expertise</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>JavaScript</td>
                <td>Intermediate</td>
                <td>Advanced</td>
                <td>Intermediate</td>
            </tr>
            <tr>
                <td id="td-blue">Python</td>
                <td id="td-blue">Intermediate/Advanced</td>
                <td id="td-blue">Advanced</td>
                <td id="td-blue">Intermediate/Advanced</td>
            </tr>
            <tr>
                <td>Java</td>
                <td>Intermediate</td>
                <td>Intermediate</td>
                <td>Intermediate</td>
            </tr>
            <tr>
                <td id="td-blue">C#</td>
                <td id="td-blue">Intermediate/Advanced</td>
                <td id="td-blue">Intermediate/Advanced</td>
                <td id="td-blue">Intermediate</td>
            </tr>
        </tbody>
    </table>
`;

// This function will toggle the table and image !!!! Contains TESTS !!!
function tableEnlarge() {
  //console.log("tableEnlarge() called"); // Debugging line
  const gridTable = document.getElementById("curiosity");
  /*if (!gridTable) {
    console.error("Element with id 'curiosity' not found"); // Debugging line
    return;
  }*/
  gridTable.removeEventListener("click", tableEnlarge); // Remove existing listener

  if (gridTable.classList.contains("table-enlarged")) {
    //console.log("Removing 'table-enlarged' class"); // Debugging line
    gridTable.classList.remove("table-enlarged");
    gridTable.classList.add('image-stats'); // Add 'imageStats' class as it was creating an issue with the table-enlarged style
    gridTable.innerHTML = tableImage;
  } else {
    //console.log("Adding 'table-enlarged' class"); // Debugging line
    gridTable.classList.add("table-enlarged");
    gridTable.innerHTML = tableHTML;
  }

  gridTable.addEventListener("click", tableEnlarge); // Add listener back
}
