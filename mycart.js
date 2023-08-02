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

  <div class="card" style="width: 18rem, self-align:center">
        <img src="${item.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <div class="card-body rate">
            <h5 class="card-title">${item.itemPrice}</h5>
             <h4 class="card-title">${item.itemId}</h4>
            <p class="card-text">S,M,L</p>
          </div>

          <button type="button" class="btn btn-dark" onclick="removeValue(this)" style="width:100%">
            Remove From Cart
          </button>

          <button type="button" class="btn btn-primary" onclick="placeItem()" style="width:100%">
            Placeitem
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

function placeItem(e) {
  var options = {
    key: "rzp_test_xV39ZNbgU1Du4V", // Enter the Key ID generated from the Dashboard
    amount: 100, //check this out if this is paisa or INR // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "accio portal",
    description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    theme: {
      color: "#122620",
    },
    image: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
    handler: function () {
      // run a function when your payment is successfull
      location.href = "./shop.html";
    },
    options: {
      checkout: {
        method: {
          netbanking: 0,
          card: 0,
          upi: 1,
          wallet: 0,
        },
      },
    },
  };

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
  // clear mycart - localStorage
  e.preventDefault();
}
