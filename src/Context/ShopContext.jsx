import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null);

// Initialize the cart with all items set to zero
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0; // Use product ID as key
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1 // Increment item quantity
        }));
    }

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max(prev[itemId] - 1, 0) // Prevent negative quantities
        }));
    }

    // Context value to be provided
    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
    };

    console.log(cartItems); // For debugging

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
