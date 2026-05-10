function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").style.display = "flex";
  } else {
    document.getElementById("error").innerText = "Wrong username or password";
  }
}

function logout() {
  location.reload();
}
