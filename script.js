const productGrid = document.getElementById('product-grid');
const categoryBtns = document.getElementById('category-btns');
const cartCountElement = document.getElementById('cart-count');
let cartCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts('https://fakestoreapi.com/products');
    fetchCategories();
});

async function fetchCategories() {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const categories = await res.json();
    categoryBtns.innerHTML = `<button onclick="fetchProducts('https://fakestoreapi.com/products')" class="px-5 py-2 bg-indigo-600 text-white rounded-full text-xs font-bold">All Items</button>`;
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = "px-5 py-2 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-bold hover:bg-gray-50 transition capitalize";
        btn.innerText = cat;
        btn.onclick = () => fetchProducts(`https://fakestoreapi.com/products/category/${cat}`);
        categoryBtns.appendChild(btn);
    });
}

async function fetchProducts(url) {
    productGrid.innerHTML = `<div class="col-span-full text-center py-10 text-gray-400">Loading...</div>`;
    const res = await fetch(url);
    const products = await res.json();
    render(products);
}