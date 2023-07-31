const apiUrl = "https://fakestoreapi.com/products";
let arr = [];
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    addData(data);
    arr.push(...data);
  })
  .catch((error) => console.log("error during fatching", error));

const container = document.getElementById("container");
const men = document.getElementById("men");
const woMen = document.getElementById("women");
const All = document.getElementById("All");
const Jewellery = document.getElementById("Jewellery");
const electronic = document.getElementById("Electronics");
const addBtn = document.querySelector(".btn");
const ApplyFilter = document.getElementById("apply");
const PriceRange = document.querySelectorAll("priceRange");

men.addEventListener("click", () => {
  const menData = filterData("men's clothing");

  console.log(menData);
  addData(menData);
});

woMen.addEventListener("click", () => {
  const womenData = filterData("women's clothing");

  console.log(womenData);
  addData(womenData);
});

Jewellery.addEventListener("click", () => {
  const Jewellerydata = filterData("jewelery");

  addData(Jewellerydata);
});

electronic.addEventListener("click", () => {
  const electronicData = filterData("electronics");
  addData(electronicData);
});

function filterData(filterValue) {
  let filterArr = arr.filter((val) => val.category === filterValue);

  return filterArr;
}

All.addEventListener("click", () => {
  addData(arr);
});

// console.log("array element", arr);
function addData(data) {
  //   console.log("click on 1");
  container.innerHTML = "";

  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "data";

    div.innerHTML += `
       <div class="card" style="width: 18rem">
            <img src="${item.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-body rate">
                <h5 class="card-title">$${item.price}</h5>
                <h4 class="card-title">${item.id}</h4>
              </div>
                <p class="card-text">S,M,L</p>
              </div>

             <button type="button" class="btn btn-dark" onclick="addValue(this)">Add Cart</button>

            </div>
          </div>
    `;
    container.appendChild(div);
  });
}
console.log(arr);

function addValue(element) {
  const parentEle = element.parentElement;
  const Grandparent = parentEle.parentElement;
  const imageLink = Grandparent.querySelector("img").src;

  const price = parentEle.querySelector("h5").innerText;
  const Id = parentEle.querySelector("h4").innerText;

  var cartArr = localStorage.getItem("cartObj");
  var obj = {
    image: imageLink,
    itemPrice: price,
    itemId: Id,
  };
  console.log(obj);
  var arr = [];
  if (cartArr) {
    const tempObj = JSON.parse(cartArr);
    arr = tempObj.arr;
  }
  arr.push(obj);
  var cartObj = { arr };
  localStorage.setItem("cartObj", JSON.stringify(cartObj));
}

ApplyFilter.addEventListener("click", () => {
  console.log("Hii", PriceRange);
});
