export const cart = [];

export function addToCart (productId) {
    let matchingItem = cart.find(cartItem => cartItem.id === productId);
          
    if(matchingItem){
        matchingItem.quantity++;
    } else{
        cart.push({
            id: productId,
            quantity: 1
        });
    }
  }