const uName = document.getElementById("userName");
const ulName = document.getElementById("lastName");
const saveInfo = document.getElementById("SaveInfo-btn");

let getUser = JSON.parse(localStorage.getItem("users"));

console.log(getUser);
uName.value = getUser[0].firstName;
ulName.value = getUser[0].lastName;
console.log(uName.value);

// saveInfo.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(uName.value);
// });
