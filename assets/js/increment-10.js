document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");

    incrementButton.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 10;
    });

    decrementButton.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 10) { // Minimum quantity of 10
            quantityInput.value = currentQuantity - 10;
        }
    });
});
