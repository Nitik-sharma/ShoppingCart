function init() {
  var cartItem = [];
  const tempObj = JSON.parse(localStorage.getItem("cartObj"));
  console.log(tempObj);

  if (tempObj !== undefined) {
    cartItem = tempObj.arr;
  }
  const container = document.getElementById("container");
  container.innerHTML = "";
  cartItem.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML += `

  <div class="card" style="width: 18rem">
        <img src="${item.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <div class="card-body rate">
            <h5 class="card-title">${item.itemPrice}</h5>
             <h4 class="card-title">${item.itemId}</h4>
            <p class="card-text">S,M,L</p>
          </div>

          <button type="button" class="btn btn-dark" onclick="removeValue(this)">
            Remove From Cart
          </button>
        </div>
      </div>
  `;
    container.append(div);
  });
}
init();

function removeValue(element) {
  const parentEle = element.parentElement;
  var Id = parentEle.querySelector("h4").innerText;
  console.log(Id);
  function removeCart(pId) {
    const cartdataString = localStorage.getItem("cartObj");
    if (cartdataString) {
      const cartdata = JSON.parse(cartdataString);
      console.log(cartdata);

      const removeIndex = cartdata.arr.findIndex((item) => item.itemId === pId);
      console.log(removeIndex);

      if (removeIndex !== -1) {
        cartdata.arr.splice(removeIndex, 1);
      }
      localStorage.setItem("cartObj", JSON.stringify(cartdata));
    }
  }
  const pId = Id;
  removeCart(pId);
  init();
}
