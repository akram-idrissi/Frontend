export const updateCartCounter = (value) => {
    try {
        let productsCount = localStorage.getItem("products-counter");
        productsCount = productsCount ? parseInt(productsCount) : 0;
        productsCount = productsCount + value;
        localStorage.setItem("products-counter", productsCount);
        window.dispatchEvent(new CustomEvent("products-counter"));
        return productsCount;
    } catch (error) {
        return null;
    }
}

export const addToCart = (key, value) => {
    try {
        const storedData = localStorage.getItem("products");
        const keyValuePairs = storedData ? JSON.parse(storedData) : [];

        const existingIndex = keyValuePairs.findIndex((pair) => pair.key === key);
        if (existingIndex !== -1) {
            keyValuePairs[existingIndex].value = value;
        } else {
            keyValuePairs.push({ key, value });
            updateCartCounter(1);
        }

        localStorage.setItem("products", JSON.stringify(keyValuePairs));
        return keyValuePairs;
    } catch (error) {
        return null;
    }
};

export const removeFromCart = (key) => {
    try {
        const storedData = localStorage.getItem("products");
        const keyValuePairs = storedData ? JSON.parse(storedData) : [];

        const updatedPairs = keyValuePairs.filter((pair) => pair.key !== key);

        localStorage.setItem("products", JSON.stringify(updatedPairs));
        updateCartCounter(-1);
        return updatedPairs;
    } catch (error) {
        return null;
    }
};

export const getProductsFromCart = () => {
    try {
        const storedData = localStorage.getItem("products");
        return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
        return [];
    }
};

export const clearCart = () => {
    try {
        localStorage.removeItem("products");
        localStorage.removeItem("products-counter");
        window.dispatchEvent(new CustomEvent("products-counter"));
    } catch (error) {
        return [];
    }
}; 