//Variables
const basketMenu = document.getElementsByClassName("basket-menu")[0];
const row = document.getElementsByClassName("row")[0];
const itemList = document.getElementsByTagName("ul")[0];
const checkoutPrice = document.getElementById("checkout");

//Function
//Initial render for shop front
export function productManagement(product) {
  const itemDiv = document.createElement("div");
  itemDiv.setAttribute("class", "products col-4 col-sm-12 col-xsm-12");
  const itemImg = document.createElement("img");
  itemImg.setAttribute("style", "height: 200px; width: 200px;");
  itemImg.src = `${product.image}`;
  const itemT = document.createElement("h3");
  itemT.innerHTML = product.title;
  const itemP = document.createElement("p");
  itemP.innerHTML = product.price;

  row.appendChild(itemDiv);
  itemDiv.appendChild(itemImg);
  itemDiv.appendChild(itemT);
  itemDiv.appendChild(itemP);

  itemDiv.addEventListener("click", addItemToCart);
  itemList.addEventListener("click", removeItemFromCart);

  // ADD item to Cart
  function addItemToCart(e) {
    const target = e.target;
    if (target.classList[0] == "products") {
      const itemDiv = document.createElement("div");
      itemDiv.setAttribute("class", "item-cont");
      const newItem = document.createElement("li");
      newItem.setAttribute("class", "list-item");
      const itemImg = document.createElement("img");
      itemImg.src = `${product.image}`;
      const itemT = document.createElement("h3");
      itemT.innerHTML = product.title;
      const itemP = document.createElement("p");
      itemP.innerHTML = product.price;
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      trashButton.setAttribute("class", "trash-btn");
      trashButton.setAttribute("value", `${product.id}`);

      itemList.appendChild(itemDiv);
      itemDiv.appendChild(newItem);
      newItem.appendChild(itemImg);
      newItem.appendChild(itemT);
      newItem.appendChild(itemP);
      itemDiv.appendChild(trashButton);

      // Save to LocalStorage
      saveLocalItems(product);
      // Accumulate checkout upon adding new item
      calculateCheckout();
    }
  }
}

function saveLocalItems(product) {
  let products;
  if (localStorage.getItem("products") === null) {
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem("products"));
  }
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
}

//Remove item from Cart
function removeItemFromCart(e) {
  const targbtn = e.target;
  const product = targbtn.value;
  if (targbtn.classList[0] == "trash-btn") {
    targbtn.parentElement.style.display = "none";
    // Remove from local storage
    removeLocalItems(product);
    calculateCheckout();
  }
}

function removeLocalItems(product) {
  let products;
  if (localStorage.getItem("products") === null) {
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem("products"));
  }
  const productId = product;
  // Find element on matching ID
  products.splice(
    products.findIndex((x) => x.id === productId),
    1
  );
  localStorage.setItem("products", JSON.stringify(products));
}

// Runs after DOMContentLoaded
// Display items from memory
export function getRequestedItems() {
  let products;
  if (localStorage.getItem("products") === null) {
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem("products"));
  }

  products.forEach(function (product) {
    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("class", "item-cont");
    const newItem = document.createElement("li");
    newItem.setAttribute("class", "list-item");
    const itemImg = document.createElement("img");
    itemImg.src = `${product.image}`;
    const itemT = document.createElement("h3");
    itemT.innerHTML = product.title;
    const itemP = document.createElement("p");
    itemP.innerHTML = product.price;
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.setAttribute("class", "trash-btn");
    trashButton.setAttribute("value", `${product.id}`);

    itemList.appendChild(itemDiv);
    itemDiv.appendChild(newItem);
    newItem.appendChild(itemImg);
    newItem.appendChild(itemT);
    newItem.appendChild(itemP);
    itemDiv.appendChild(trashButton);
  });
}

//Features
//Event Listeners
//Functions
export function calculateCheckout() {
  // Get Items from localStorage
  let products;

  if (localStorage.getItem("products") === null) {
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem("products"));
  }

  // re-structure products array into a new array with objects containing only project.price
  let prices = products.map((obj) => {
    let rObj = {};
    rObj = obj.price;
    return rObj;
  });

  let sum = prices.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  checkoutPrice.innerHTML = sum.toFixed(2);
}

export function basketToggle() {
  basketMenu.classList.toggle("basket-active");
}
