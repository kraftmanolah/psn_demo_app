document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const sizeSelect = document.getElementById("size");
    const priceDisplay = document.getElementById("price");

    const prices = {
        small: 16000,
        medium: 22000,
        big: 32000
    };

    function updatePrice() {
        const size = sizeSelect.value;
        const price = prices[size];
        priceDisplay.textContent = `₦${price.toLocaleString()}`;
    }

    incrementButton.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    });

    decrementButton.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        }
    });

    sizeSelect.addEventListener("change", function () {
        updatePrice();
    });

    // Initial price update
    updatePrice();
});
