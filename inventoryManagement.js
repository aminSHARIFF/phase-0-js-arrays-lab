/* 1. Create the products array */
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

/* 2. Function to log the first product */
function logFirstProduct() {
console.log(products[0]);
}

/* 3. Function to add a new product */
function addProduct(productName) {
products.push(productName);
}

/* 4. Function to update a product name */
function updateProductName(position, newName) {
products[position] = newName;
}

/* 5. Function to remove the last product */
function removeLastProduct() {
products.pop();
}




// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
