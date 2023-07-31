const email = document.getElementById("Email-id");
const password = document.getElementById("password");
const login = document.getElementById("Login-btn");

login.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hello");
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("ALl are medentary");
  } else {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      let currUser = users.find((user) => {
        return user.email === email.value.trim();
      });

      if (currUser) {
        if (password.value.trim() === currUser.password) {
          localStorage.setItem("loginUser", JSON.stringify(currUser));
          alert("Your are login Sucessfulyy !!!!!!");

          setTimeout(() => {
            window.location.pathname = "shop.html";
          }, 2000);
        } else {
          alert("Your Password incorrect");
          password.value = "";
        }
      } else {
        alert("You have not singUp");
      }
    } else {
      alert("You have not singUp");
    }
  }
});
