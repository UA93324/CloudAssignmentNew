$(document).ready(function () {

  $("#loginBtn").click(function () {

    // Dummy login validation
    var username = $("#username").val()
    var password = $("#password").val()

    // Check if username and password match the dummy data
    if (username === "Jordan Ward" && password === "123") {

      // If successful, redirect to the main page
      window.location.href = "index.html"

    } else {

      // If login fails, show an alert
      alert("Invalid username or password. Please try again.")

    }
  })
})
