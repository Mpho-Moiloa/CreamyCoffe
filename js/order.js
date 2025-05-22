const SIZES = {
    small: { name: "a small", price: 12, shots: 1 },
    tall: { name: "a tall", price: 14, shots: 2 },
    grande: { name: "a grande", price: 16, shots: 3 }
};

const STYLES = {
    americano: { name: "Americano", price: 0 },
    cappuccino: { name: "Cappuccino", price: 1 }, // Assuming this is extra for cream
    latte: { name: "Latte", price: 0.5 } // Assuming this is extra for milk
};

const BASE_INGREDIENTS = {
    espressoShotPrice: 0.75,
    // milk: 0.5, // Covered by latte style price
    // cream: 1, // Covered by cappuccino style price
    sugar: 0.2, // Will need UI elements if we want to use this
    syrup: 5 // Will need UI elements if we want to use this
};

//Purchase button functionality
function purchase() {
    const selectedSizeValue = document.querySelector('input[name="size"]:checked');
    const selectedStyleValue = document.querySelector('input[name="style"]:checked');
    const orderResultEl = document.getElementById("orderResult");

    if (!selectedSizeValue && !selectedStyleValue) {
        orderResultEl.innerHTML = "Please select a size and a style for your coffee.";
        return;
    }
    if (!selectedSizeValue) {
        orderResultEl.innerHTML = "Please select a size for your coffee.";
        return;
    }
    if (!selectedStyleValue) {
        orderResultEl.innerHTML = "Please select a style for your coffee.";
        return;
    }

    const sizeKey = selectedSizeValue.id; // e.g., "small"
    const styleKey = selectedStyleValue.id; // e.g., "americano"

    const sizeInfo = SIZES[sizeKey];
    const styleInfo = STYLES[styleKey];

    if (!sizeInfo || !styleInfo) {
        orderResultEl.innerHTML = "There was an error processing your order. Please try again.";
        // console.error("Invalid size or style key selected.");
        return;
    }

    const calculatedPrice = (sizeInfo.shots * BASE_INGREDIENTS.espressoShotPrice) + sizeInfo.price + styleInfo.price;

    orderResultEl.innerHTML = `You have ordered ${sizeInfo.name} ${styleInfo.name}; price is R${calculatedPrice.toFixed(2)}`;
}

function updateDynamicPrice() {
    const selectedSizeValue = document.querySelector('input[name="size"]:checked');
    const selectedStyleValue = document.querySelector('input[name="style"]:checked');
    const priceDisplayEl = document.getElementById("dynamicPriceDisplay");

    if (selectedSizeValue && selectedStyleValue) {
        const sizeKey = selectedSizeValue.id;
        const styleKey = selectedStyleValue.id;

        const sizeInfo = SIZES[sizeKey];
        const styleInfo = STYLES[styleKey];

        // It's good practice to check if keys were valid, though radio buttons should ensure this.
        if (sizeInfo && styleInfo) {
            const calculatedPrice = (sizeInfo.shots * BASE_INGREDIENTS.espressoShotPrice) + sizeInfo.price + styleInfo.price;
            priceDisplayEl.innerHTML = `R${calculatedPrice.toFixed(2)}`;
        } else {
            priceDisplayEl.innerHTML = "- error calculating -"; // Should not happen with radio buttons
        }
    } else {
        priceDisplayEl.innerHTML = "- select size and style -";
    }
}

// Add event listeners
const radioButtons = document.querySelectorAll('input[name="size"], input[name="style"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', updateDynamicPrice);
});

// Initial call to set the price display when the page loads
// Calling directly might be too early if script is in <head> and not deferred.
// DOMContentLoaded ensures the DOM is ready.
document.addEventListener('DOMContentLoaded', updateDynamicPrice);

function calculateOrderPrice(sizeKey, styleKey) {
    const sizeInfo = SIZES[sizeKey];
    const styleInfo = STYLES[styleKey];

    if (!sizeInfo || !styleInfo) {
        // console.error(`Invalid size or style key provided: sizeKey=${sizeKey}, styleKey=${styleKey}`);
        return NaN; // Or throw an error: throw new Error("Invalid size or style key");
    }

    return (sizeInfo.shots * BASE_INGREDIENTS.espressoShotPrice) + sizeInfo.price + styleInfo.price;
}
