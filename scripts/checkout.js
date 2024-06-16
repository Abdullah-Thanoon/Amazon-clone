import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {cart} from '../data/cart.js'

export function updateNavbar() {
    let counter = 0;
    cart.forEach(element => {
        counter += element.quantity;
    });
    
    document.querySelector(".return-to-home-link").innerText = counter + ' items';
}

updateNavbar();
renderOrderSummary();
renderPaymentSummary();