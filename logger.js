$(document).ready(() => {
  // Server Information
  let serverAddress = "http://127.0.0.1:5000/";

  // Add event to capture key press - e contains event information
  window.addEventListener("keyup", (e) => {
    let selectedKey = e.key;
    // Ajax POST formatted in JSON for key presses
    $.ajax({
      url: serverAddress,
      contentType: "application/json",
      dataType: "json",
      type: "POST",
      data: JSON.stringify({ key: selectedKey }),
      success: () => {},
    });
  });

  // Add event to capture mouse clicks - e contains event information
  window.addEventListener("click", (e) => {
    // Defining variables
    let clickedButton = e.key;
    let clickedElement = e.target;
    // Ajax POST formatted in JSON for mouse clicks and their respective html element
    $.ajax({
      url: serverAddress,
      contentType: "application/json",
      dataType: "json",
      type: "POST",
      data: JSON.stringify({ mouse: clickedButton, element: clickedElement }),
      success: () => {},
    });
  });
});
