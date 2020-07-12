import {
  productManagement,
  getRequestedItems,
  basketToggle,
  calculateCheckout,
} from "./elevent.js";

//Variables
const basketBtn = document.getElementsByClassName("basket")[0];

// EventListeners
window.addEventListener("DOMContentLoaded", readTextFile);
window.addEventListener("DOMContentLoaded", getRequestedItems);
basketBtn.addEventListener("click", basketToggle);

// Source of production list : https://github.com/john-smilga/setup-files-js-comfy-house
// Productions list
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("./products.json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

// Read in items from Productions list
readTextFile("./products.json", function (text) {
  const data = JSON.parse(text);
  for (var i = 0; i <= data.items.length; i++) {
    const itemId = data.items[`${i}`].sys.id;
    const itemPrice = data.items[`${i}`].fields.price;
    const itemTitle = data.items[`${i}`].fields.title;
    const itemImage = data.items[`${i}`].fields.image.fields.file.url;

    // Create product object
    class RequestedItem {
      constructor(id, price, title, image) {
        this.id = id;
        this.price = price;
        this.title = title;
        this.image = image;
      }
    }
    const product = new RequestedItem(itemId, itemPrice, itemTitle, itemImage);

    // Initial dynamic front store generation
    // Item events =>
    // add - addLocalStorage
    // remove - removeFromLocalStorage
    // => calculate checkout price
    productManagement(product);
  }
});

//Side Functions
//Basket open/close
basketToggle();
// Calculate checout total price from local storage
calculateCheckout();

/* 
Unfortunately could not place the Object Constructor into the global scope as all the data read in from
a JSON file which behaviour is very similar to API requests in the way I used here.
I meant to have a DATABASE* with this method
*/
