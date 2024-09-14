document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");

    incrementButton.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    });

    decrementButton.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) { // Minimum quantity of 1
            quantityInput.value = currentQuantity - 1;
        }
    });
});
