const firstName = document.getElementById("userName");

const lastName = document.getElementById("lastName");
const email = document.getElementById("Email-id");
const password = document.getElementById("password");
const conformPassword = document.getElementById("conform-password");

const singnUp = document.getElementById("sing-btn");

singnUp.addEventListener("click", (e) => {
  e.preventDefault();
  validation();
});

function emailCheck(email) {
  let users = JSON.parse(localStorage.getItem("users"));

  const obj = users.find((userObj) => {
    return userObj.email === email;
  });
  if (obj) return true;
  else return false;
}

function saveUser(fName, lName, Email, PasswordInput) {
  let userObj = {
    firstName: fName,
    lastName: lName,
    email: Email,
    password: PasswordInput,
  };
  let users = JSON.parse(localStorage.getItem("users"));
  if (users === null) {
    users = [];
  }
  users.push(userObj);
  localStorage.setItem("users", JSON.stringify(users));

  sessionStorage.setItem("logginUser", JSON.stringify(users));

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
  conformPassword.value = "";

  setTimeout(() => {
    window.location.pathname = "login.html";
  }, 1000);
}

function validation() {
  console.log(
    firstName.value,
    lastName.value,
    email.value,
    password.value,
    conformPassword.value
  );
  if (
    firstName.value.trim() === "" ||
    lastName.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === "" ||
    conformPassword.value.trim() === ""
  ) {
    alert("All filling are madentary");
  } else {
    if (password.value.trim() != conformPassword.value.trim()) {
      alert("Password mismatch");
      password.value = "";
      conformPassword.value = "";
    } else {
      if (localStorage.getItem("users")) {
        if (emailCheck(email.value)) {
          alert("You have an Already an account !!!");
        } else {
          saveUser(
            firstName.value,
            lastName.value,
            email.value,
            password.value
          );
        }
      } else {
        saveUser(firstName.value, lastName.value, email.value, password.value);
      }
    }
  }
}
