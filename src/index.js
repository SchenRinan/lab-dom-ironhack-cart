// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  
  //... your code goes here
  //get the value in unit price
  //get the value in quantity
  //multiply then show amount at subtotal
  let multiplier = +document.querySelector('.price span').innerHTML;
  let multiplicand = document.querySelector('.quantity input').value;
  const result = multiplier * multiplicand;
  document.querySelector('.subtotal span').innerHTML = result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
for(i=0;i<document.getElementsByClassName('price').length;i++)
{
  let multiplier = +document.querySelectorAll('.price span')[i].innerHTML;
  let multiplicand = document.querySelectorAll('.quantity input')[i].value;
  let result = multiplier * multiplicand;
  document.querySelectorAll('.subtotal span')[i].innerHTML = result;
}
  // ITERATION 3
  //... your code goes here
  let sum = 0;
  for(i=0;i<document.getElementsByClassName('subtotal').length;i++)
  {
    sum += +document.querySelectorAll('.subtotal span')[i].innerHTML;
  }
  document.querySelector('#total-value span').innerHTML = sum;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here
  target.parentElement.parentElement.parentElement.removeChild(target.parentElement.parentElement);

}

// ITERATION 5

function createProduct() {
  //... your code goes here

// console.log(document.querySelector("tbody").innerHTML)
let trAdding = document.createElement('tr');
trAdding.innerHTML = `<tr class="product">
                        <td class="name">
                          <span>${document.querySelectorAll('.create-product input')[0].value}</span>
                        </td>
                        <td class="price">$<span>${document.querySelectorAll('.create-product input')[1].value}</span></td>
                        <td class="quantity">
                          <input type="number" value="0" min="0" placeholder="Quantity" />
                        </td>
                        <td class="subtotal">$<span>0</span></td>
                        <td class="action">
                          <button class="btn btn-remove">Remove</button>
                        </td>
                        </tr>`;

document.querySelector("tbody").appendChild(trAdding);
document.querySelectorAll('.create-product input')[0].value = '';
document.querySelectorAll('.create-product input')[1].value = 0;
let i = document.getElementsByClassName('btn-remove').length - 1;
  const removeAProduct = document.getElementsByClassName('btn-remove');
  removeAProduct[i].addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct);

  const removeAProduct = document.getElementsByClassName('btn-remove');
  removeAProduct[0].addEventListener('click', removeProduct);
});
