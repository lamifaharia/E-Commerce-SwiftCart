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

function render(products) {
    productGrid.innerHTML = '';
    products.forEach(p => {
        productGrid.innerHTML += `
            <div class="product-card">
                <div class="img-container">
                    <img src="${p.image}" class="max-h-full object-contain">
                </div>
                <div class="flex justify-between items-center mb-1">
                    <span class="text-[10px] font-bold text-blue-500 uppercase">${p.category}</span>
                    <span class="text-[10px] text-yellow-500"><i class="fas fa-star"></i> ${p.rating.rate}</span>
                </div>
                <h3 class="text-sm font-bold text-gray-800 h-10 overflow-hidden mb-2">${p.title}</h3>
                <div class="text-lg font-black text-gray-900 mb-4">$${p.price}</div>
                <div class="grid grid-cols-2 gap-2">
                    <button class="text-[11px] font-bold py-2 border border-gray-100 rounded-md">Details</button>
                    <button onclick="addToCart()" class="text-[11px] font-bold py-2 bg-[#4f46e5] text-white rounded-md">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

function addToCart() {
    cartCount++;
    cartCountElement.innerText = cartCount;
}