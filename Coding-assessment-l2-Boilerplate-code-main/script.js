document.addEventListener('DOMContentLoaded', function() {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json')
        .then(response => response.json())
        .then(data => {
            const product = data.product;
            document.querySelector('.vendor').textContent = product.vendor;
            document.querySelector('.title').textContent = product.title;
            document.querySelector('#current-price').textContent = `${product.price}`;
            document.querySelector('#compare-price').textContent = `${product.compare_at_price}`;
            document.querySelector('#percentage-off').textContent = `35% Off`;
            document.querySelector('#main-image').src = product.images[0];
            document.querySelectorAll('.thumbnails img').forEach((img, index) => {
                img.src = product.images[index];
            });
        })
        .catch(error => console.error('Error fetching the product data:', error));
});

function changeImage(src) {
    document.getElementById('main-image').src = src;
}

function selectColor(color) {
    document.querySelectorAll('.color-box').forEach(box => {
        box.classList.remove('selected');
        if (box.getAttribute('data-color') === color) {
            box.classList.add('selected');
        }
    });
}

function addToCart() {
    const color = document.querySelector('.color-box.selected').getAttribute('data-color');
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const message = `Added to cart: ${quantity} x Embrace Sideboard - Color: ${color}, Size: ${size}`;
    document.getElementById('cart-message').textContent = message;
}
