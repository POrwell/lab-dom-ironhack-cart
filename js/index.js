// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
const price = product.querySelector(".price span");
const priceAsNum = Number(price.innerText);
const quantity = product.querySelector(".quantity input")
const quantityAsNum = Number(quantity.value);
const subtotalCalc = priceAsNum * quantityAsNum;
const subtotal = product.querySelector(".subtotal span")
subtotal.innerText = subtotalCalc;
const finalSubTotal = Number(subtotal.innerText);
return finalSubTotal; 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test */

  // ITERATION 2
  let counter = 0;
document.querySelectorAll(".product").forEach((nodeElement) => {
  
let newSubTot = updateSubtotal(nodeElement);
counter += newSubTot;
});

  // ITERATION 3
const totalAmount = document.querySelector("#total-value span");
totalAmount.innerText = counter;
const finalTotalAmount = Number(totalAmount.innerText);
return finalTotalAmount;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const itemToRemove = target.parentNode.parentNode;
  const itemToRemoveParent = itemToRemove.parentNode;
  itemToRemoveParent.removeChild(itemToRemove);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

 const removeBtns = document.querySelectorAll(".btn-remove").forEach((removeButton) => {
removeButton.addEventListener("click", removeProduct)
  });


