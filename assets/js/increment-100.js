document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");

    incrementButton.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity < 1000) { // Assuming you want to set a maximum limit
            quantityInput.value = currentQuantity + 100;
        }
    });

    decrementButton.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 100) { // Minimum quantity of 100 pieces
            quantityInput.value = currentQuantity - 100;
        }
    });
});
