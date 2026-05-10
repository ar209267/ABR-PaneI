// Firebase config (replace with your own)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// LOGIN
function login(){
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, pass)
  .then(()=>{
    document.getElementById("loginBox").style.display="none";
    document.getElementById("dashboard").style.display="block";
    loadProducts();
  })
  .catch(err=>alert(err.message));
}

// LOGOUT
function logout(){
  auth.signOut().then(()=>location.reload());
}

// ADD PRODUCT
function addProduct(){
  const name=document.getElementById("pname").value;
  const price=document.getElementById("pprice").value;

  db.collection("products").add({
    name:name,
    price:price
  });

  alert("Product Added");
  loadProducts();
}

// LOAD PRODUCTS
function loadProducts(){
  let list=document.getElementById("productList");
  list.innerHTML="";

  db.collection("products").get().then(snapshot=>{
    let total=0;

    snapshot.forEach(doc=>{
      let data=doc.data();

      total += Number(data.price);

      list.innerHTML += `
        <div class="card">
          <h4>${data.name}</h4>
          <p>$${data.price}</p>
        </div>
      `;
    });

    document.getElementById("earnings").innerText = "$" + total;
  });
}
