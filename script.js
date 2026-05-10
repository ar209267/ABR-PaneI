function login(){
  let user=document.getElementById("username").value;
  let pass=document.getElementById("password").value;

  if(user=="admin" && pass=="1234"){
    document.getElementById("loginPage").style.display="none";
    document.getElementById("dashboard").classList.remove("hidden");
  }else{
    document.getElementById("error").innerText="Invalid login";
  }
}

function logout(){
  location.reload();
}
