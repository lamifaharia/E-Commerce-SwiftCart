const productGrid = document.getElementById('product-grid');
const categoryBtns = document.getElementById('category-btns');
const cartCountElement = document.getElementById('cart-count');
let cartCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts('https://fakestoreapi.com/products');
    fetchCategories();
});