const themeButton = document.getElementById("theme")
const body = document.body

// Assign false to darkTheme "if theme never been used before in this browser"
if (localStorage.getItem("darkTheme") === null) {
  localStorage.setItem("darkTheme", "false")
}

// check the theme status in localStorage
checkTheme()
function checkTheme() {
  if (localStorage.getItem("darkTheme") === "true") {
    // if the theme status is true "for dark"
    // keep the button checked and make sure body has dark class
    themeButton.checked = true
    body.classList.add("dark")
  } else {
    // if the theme status is true "for dark"
    // keep the button unchecked and make sure body does NOT has dark class
    themeButton.checked = false
    body.classList.remove("dark")
  }
}

// toggle the value of darkTheme in localStorage
function setTheme() {
  if (localStorage.getItem("darkTheme") === "true") {
    localStorage.setItem("darkTheme", "false")
    body.classList.remove("dark")
  } else {
    localStorage.setItem("darkTheme", "true")
    body.classList.add("dark")
  }
}
