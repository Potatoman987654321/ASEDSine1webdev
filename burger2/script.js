// Get the menu and burger elements
let menu = document.getElementById("menu");
let burger = document.getElementById("burger");

// Add a single event listener to the menu
menu.addEventListener("change", function (e) {
  // Get the checkbox and corresponding ingredient
  let checkbox = e.target;
  let ingredient = burger.querySelector("#" + checkbox.id.replace("check", ""));

  // Control visibility
  if (checkbox.checked) {
    ingredient.style.display = "block";
  } else {
    ingredient.style.display = "none";
  }
});
