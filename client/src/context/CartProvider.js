import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

    const addToCart = (item) => {
        // check if the item is already in the cart
        const isItemInCart = cartItems.find((cartItem) =>
            cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size
        );

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    // otherwise, return the cart item
                    : cartItem
                )
            );
            return { success: true, message: "Item quantity increased in cart." };
        } else {
            // if the item is not in the cart, add the item to the cart
            setCartItems([...cartItems, { ...item, quantity: 1 }])
            return { success: true, message: "Item added to cart." };
        }
    }

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) =>
            cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size
        );

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) =>
                !(cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size)
            ));
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        }
    }

    const deleteItem = (item) => {
        setCartItems(cartItems.filter((cartItem) =>
            !(cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size)
        ));
    }

    const clearCart = () => {
        // set the cart items to an empty array
        setCartItems([]);
    }

    const getCartTotal = () => {
        // calculate the total price of the items in the cart
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    const getTotalQuantity = () => {
        // calculate the total quantity of items in the cart
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                getTotalQuantity,
                deleteItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider }