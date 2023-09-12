function correctBug(cart) {
    for(let i = 0; i < cart.length; i++) {
        cart[i] = cart[i] *= 2;
    }
    return cart;
}

// let cart = [4, 6, 8 ,10 ,12, 14 ,16];
let cart = [14, 16, 18 ,10 ,112, 114 ,116];

console.log(correctBug(cart));