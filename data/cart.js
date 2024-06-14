// cart.js
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Save cart to localStorage
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product to cart
export function addToCart(productId) {
    let matchingItem = cart.find(cartItem => cartItem.productId === productId);

    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }

    saveToStorage();
}

// Delete product from cart
export function deleteProduct(productId) {
    cart = cart.filter(cartItem => cartItem.productId !== productId);
    saveToStorage();
}
